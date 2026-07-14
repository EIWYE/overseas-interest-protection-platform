/* ============================================================
 * aireport.js — AI 情报分析报告独立模块
 * 分析工具 / AI情报分析报告
 *
 * 功能:
 *  1. 独立视图 (view-aireport)，侧边栏"分析工具"下
 *  2. 素材收集篮 — 从预警中心、案例分析、事件追踪等功能区收集素材
 *  3. 报告列表 — 展示已保存的 AI 情报分析报告
 *  4. 权限控制 — 管理员和注册用户均可使用 (PERM.canUpload)
 *  5. 报告结构 — 现状分析(六要素:时间/地点/人物/起因/过程/结果) + 对华威胁 + 对策建议
 *  6. 数据共享 — 与 INTELCENTER._aiReports 共用 localStorage
 * ============================================================ */

var AIREPORT = {
  _cartKey: 'orps_aireport_cart',
  _materialCart: null,

  /* ===== 初始化 ===== */
  init() {
    this.seedTestData();
    this._loadCart();
    if (typeof INTELCENTER !== 'undefined' && INTELCENTER._aiReportInit) {
      INTELCENTER._aiReportInit();
    }
    this.render();
  },

  /* ===== 素材收集篮持久化 ===== */
  _loadCart() {
    if (this._materialCart === null) {
      try {
        var saved = localStorage.getItem(this._cartKey);
        this._materialCart = saved ? JSON.parse(saved) : [];
      } catch (e) {
        this._materialCart = [];
      }
    }
  },

  _saveCart() {
    try {
      localStorage.setItem(this._cartKey, JSON.stringify(this._materialCart));
    } catch (e) {}
    this._updateBadge();
  },

  _updateBadge() {
    var badge = document.getElementById('sb-aireport-count');
    if (badge) {
      var n = this._materialCart ? this._materialCart.length : 0;
      badge.textContent = n;
      badge.classList.toggle('zero', n === 0);
    }
  },

  /* ===== 全局入口: 从任意页面添加素材 ===== */
  addMaterial(type, data) {
    this._loadCart();
    var sourceLabels = {
      alert: '预警中心',
      event: '事件追踪',
      case: '典型案例',
      country: '国家风险',
      enterprise: '企业资产',
      threat: '威胁组织',
      osint: '开源情报',
      fusion: '风险融合',
      collected: '采集库'
    };
    var material = {
      id: 'CART-' + type + '-' + Date.now() + '-' + Math.floor(Math.random() * 10000),
      source: sourceLabels[type] || '其他',
      title: (data.title || data.name || data.t || '').toString(),
      country: (data.country || data.cty || '').toString(),
      date: (data.date || data.time || data.yr || '').toString(),
      severity: (data.severity || data.level || data.l || '').toString(),
      desc: (data.desc || data.d || data.description || data.detail || data.background || '').toString(),
      type: type
    };
    /* 去重: 同来源+同标题 */
    var exists = this._materialCart.some(function (m) {
      return m.title === material.title && m.source === material.source;
    });
    if (exists) {
      showToast('该素材已在收集篮中');
      return;
    }
    this._materialCart.push(material);
    this._saveCart();
    showToast('已加入情报分析素材收集篮（共 ' + this._materialCart.length + ' 个素材）');
  },

  /* ===== 便捷方法: 通过 ID 添加 ===== */
  addAlertMaterial(id) {
    if (typeof ALERTS === 'undefined') return;
    var a = ALERTS.find(function (x) { return x.id === id; });
    if (!a) return;
    this.addMaterial('alert', {
      title: a.title, country: a.country, date: a.time,
      severity: a.level, desc: a.desc
    });
  },

  addEventMaterial(id) {
    if (typeof EVENTS === 'undefined') return;
    var e = EVENTS.find(function (x) { return x.id === id; });
    if (!e) return;
    this.addMaterial('event', {
      title: e.title, country: e.country, date: e.date,
      severity: e.sev, desc: e.desc
    });
  },

  addCaseMaterial(idx) {
    if (typeof MATRIX === 'undefined' || !MATRIX._cases || !MATRIX._cases[idx]) return;
    var c = MATRIX._cases[idx];
    this.addMaterial('case', {
      title: c.t, country: c.cty, date: c.yr,
      severity: c.l, desc: c.d
    });
  },

  addAlertCaseMaterial(idx) {
    if (typeof AVIEW === 'undefined' || !AVIEW._alertCases || !AVIEW._alertCases[idx]) return;
    var c = AVIEW._alertCases[idx];
    this.addMaterial('case', {
      title: c.t, country: c.cty, date: c.yr,
      severity: c.level, desc: c.bg
    });
  },

  addCountryMaterial(name) {
    if (typeof COUNTRIES === 'undefined') return;
    var c = COUNTRIES.find(function (x) { return x.name === name; });
    if (!c) return;
    var ov = typeof calcOverall === 'function' ? calcOverall(c.scores) : 0;
    this.addMaterial('country', {
      title: c.name + ' 风险评估', country: c.name, date: '',
      severity: ov >= 8 ? '极高' : ov >= 6 ? '高' : ov >= 4 ? '中高' : '低',
      desc: c.notes || ''
    });
  },

  addEnterpriseMaterial(id) {
    if (typeof ENTERPRISES === 'undefined') return;
    var e = typeof id === 'number' ?
      ENTERPRISES.find(function (x) { return x.id === id; }) :
      ENTERPRISES.find(function (x) { return x.name === id || x.short === id; });
    if (!e) return;
    this.addMaterial('enterprise', {
      title: e.name, country: (e.countries || []).join('、'), date: '',
      severity: '', desc: e.industry + ' | 总部:' + e.hq + ' | 投资:' + e.investment + '亿$'
    });
  },

  addThreatMaterial(orgId) {
    if (typeof THREAT_DATA !== 'undefined' && THREAT_DATA.organizations) {
      var o = THREAT_DATA.organizations.find(function (x) { return x.id === orgId; });
      if (o) {
        this.addMaterial('threat', {
          title: o.name, country: (o.operatingRegions || []).join('、'), date: o.founded || '',
          severity: o.threatLevel ? (o.threatLevel >= 8 ? '极高' : o.threatLevel >= 6 ? '高' : '中') : '',
          desc: o.description || ''
        });
      }
    }
  },

  /* ===== 移除/清空 ===== */
  removeMaterial(idx) {
    this._loadCart();
    this._materialCart.splice(idx, 1);
    this._saveCart();
    this.render();
  },

  clearCart() {
    this._materialCart = [];
    this._saveCart();
    this.render();
    showToast('素材收集篮已清空');
  },

  /* ===== 基于收集篮创建报告 ===== */
  createFromCart() {
    this._loadCart();
    if (this._materialCart.length === 0) {
      showToast('收集篮为空，请先从系统中收集素材');
      return;
    }
    if (!PERM.canUpload()) {
      showToast('请先登录');
      return;
    }
    INTELCENTER._selectedMaterials = this._materialCart.map(function (m) {
      return {
        id: m.id, source: m.source, title: m.title, country: m.country,
        date: m.date, severity: m.severity, desc: m.desc
      };
    });
    INTELCENTER._allMaterials = INTELCENTER._gatherMaterials();
    INTELCENTER.showAiReportForm(null, true);
  },

  /* ===== 主渲染 ===== */
  render() {
    var el = document.getElementById('aireport-content');
    if (!el) return;
    this._loadCart();
    if (typeof INTELCENTER !== 'undefined') INTELCENTER._aiReportInit();

    if (!PERM.canUpload()) {
      el.innerHTML = '<div class="empty"><div class="ic">🔒</div><div>请先登录后使用AI情报分析报告功能</div></div>';
      return;
    }

    var reports = (typeof INTELCENTER !== 'undefined' && INTELCENTER._aiReports) ? INTELCENTER._aiReports : [];
    var cart = this._materialCart;
    var html = '';

    /* 素材收集篮 */
    html += '<div class="card mb-12" style="border:1px solid rgba(0,212,255,0.25)">';
    html += '<div class="card-tt"><span class="ic">🛒</span>情报分析素材收集篮';
    html += '<span class="badge b-blue" style="margin-left:8px">' + cart.length + '</span>';
    html += '<span style="font-size:10px;color:var(--text3);font-weight:400;margin-left:8px">— 在预警中心、案例分析等页面点击"🤖 加入情报分析"按钮收集素材</span>';
    html += '</div>';

    if (cart.length > 0) {
      html += '<div style="display:grid;gap:4px;margin-bottom:10px;max-height:220px;overflow-y:auto">';
      cart.forEach(function (m, i) {
        var sevText = m.severity || '';
        var sevClr = (sevText.indexOf('极高') >= 0 || sevText === 'critical' || sevText === 'red') ? 'var(--red)' :
                     (sevText.indexOf('高') >= 0 || sevText === 'high' || sevText === 'orange') ? 'var(--orange)' :
                     (sevText.indexOf('中') >= 0 || sevText === 'medium' || sevText === 'yellow') ? 'var(--yellow)' :
                     'var(--text3)';
        html += '<div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:var(--panel2);border-radius:6px;font-size:11px">';
        html += '<span class="badge b-blue" style="font-size:9px;min-width:60px;text-align:center">' + m.source + '</span>';
        html += '<div style="flex:1;min-width:0">';
        html += '<div style="font-weight:600;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + (m.title || '').substring(0, 60) + '</div>';
        html += '<div style="font-size:9px;color:var(--text3)">' + (m.country || '') + (m.date ? ' | ' + m.date : '') + (sevText ? ' | <span style="color:' + sevClr + ';font-weight:600">' + sevText + '</span>' : '') + '</div>';
        html += '</div>';
        html += '<button class="btn sm danger" style="font-size:9px;padding:1px 6px;min-width:auto" onclick="AIREPORT.removeMaterial(' + i + ')">✕</button>';
        html += '</div>';
      });
      html += '</div>';
      html += '<div style="display:flex;gap:8px">';
      html += '<button class="btn primary sm" onclick="AIREPORT.createFromCart()">🤖 基于收集素材创建报告</button>';
      html += '<button class="btn sm" onclick="AIREPORT.clearCart()">🗑️ 清空收集篮</button>';
      html += '</div>';
    } else {
      html += '<div style="text-align:center;padding:16px;color:var(--text3);font-size:12px">';
      html += '收集篮为空。请在预警中心、案例分析、事件追踪等页面点击"🤖 加入情报分析"按钮收集素材，';
      html += '也可直接点击下方"新建情报分析报告"在表单中选择素材。';
      html += '</div>';
    }
    html += '</div>';

    /* 统计概览 */
    var stCritical = reports.filter(function (r) { return r.threatLevel === 'critical'; }).length;
    var stHigh = reports.filter(function (r) { return r.threatLevel === 'high'; }).length;
    var now = new Date();
    var stMonth = reports.filter(function (r) {
      var d = new Date(r.createTime);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;

    html += '<div class="stat-grid">';
    var stats = [
      { ic: '📋', c: 'var(--cyan)', l: '报告总数', v: reports.length },
      { ic: '🔴', c: 'var(--red)', l: '紧急报告', v: stCritical },
      { ic: '🟠', c: 'var(--orange)', l: '高危报告', v: stHigh },
      { ic: '📅', c: 'var(--green)', l: '本月报告', v: stMonth }
    ];
    stats.forEach(function (s) {
      html += '<div class="stat-card"><div class="stat-ic" style="background:rgba(0,212,255,0.08);color:' + s.c + '">' + s.ic + '</div><div class="stat-info"><div class="stat-label">' + s.l + '</div><div class="stat-val" style="color:' + s.c + '">' + s.v + '</div></div></div>';
    });
    html += '</div>';

    /* 报告列表 */
    html += '<div class="card mt-12"><div class="card-tt"><span class="ic">🤖</span>AI情报分析报告';
    html += '<span style="font-size:10px;color:var(--text3);font-weight:400;margin-left:6px">— 现状分析(六要素) + 对华威胁 + 对策建议</span>';
    html += '</div>';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">';
    html += '<span style="font-size:12px;color:var(--text3)">共 ' + reports.length + ' 份报告 | 管理员和注册用户均可使用</span>';
    html += '<button class="btn primary sm" onclick="INTELCENTER.showAiReportForm()">➕ 新建情报分析报告</button>';
    html += '</div>';

    if (reports.length === 0) {
      html += '<div class="empty"><div class="ic">📝</div>';
      html += '<div style="font-size:13px;margin-bottom:4px">暂无情报分析报告</div>';
      html += '<div style="font-size:11px">点击"新建情报分析报告"，或从预警中心、案例分析等页面收集素材后创建报告</div></div>';
    } else {
      html += '<div style="display:grid;gap:8px;max-height:500px;overflow-y:auto">';
      reports.forEach(function (r) {
        var lvClr = r.threatLevel === 'critical' ? 'var(--red)' :
                    r.threatLevel === 'high' ? 'var(--orange)' :
                    r.threatLevel === 'medium' ? 'var(--yellow)' : 'var(--green)';
        var lvLabel = r.threatLevel === 'critical' ? '🔴 紧急' :
                      r.threatLevel === 'high' ? '🟠 高危' :
                      r.threatLevel === 'medium' ? '🟡 中危' : '🟢 低危';
        var summary = (r.summary || '').substring(0, 120);
        if (r.summary && r.summary.length > 120) summary += '...';

        html += '<div style="padding:12px;background:var(--panel2);border-radius:8px;border-left:3px solid ' + lvClr + ';transition:.2s;cursor:pointer" onclick="INTELCENTER.showAiReportDetail(\'' + r.id + '\')">';
        html += '<div style="display:flex;justify-content:space-between;align-items:start">';
        html += '<div style="flex:1">';
        html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">';
        html += '<span style="font-size:10px;font-weight:700;color:' + lvClr + '">' + lvLabel + '</span>';
        html += '<span style="font-size:12px;font-weight:700">[' + r.id + '] ' + r.title + '</span>';
        html += '</div>';
        html += '<div style="font-size:11px;color:var(--text2);margin-bottom:4px">' + summary + '</div>';
        html += '<div style="display:flex;gap:10px;font-size:9px;color:var(--text3);flex-wrap:wrap">';
        html += '<span>📅 ' + (r.createTime || '') + '</span>';
        html += '<span>👤 ' + (r.author || '') + '</span>';
        html += '<span>🎯 ' + (r.country || '') + '</span>';
        html += '<span>📌 ' + (r.materials ? r.materials.length : 0) + '个素材</span>';
        html += '<span>🏷️ ' + (r.reportType || '') + '</span>';
        html += '</div></div>';
        html += '<div style="display:flex;flex-direction:column;gap:4px;margin-left:8px" onclick="event.stopPropagation()">';
        html += '<button class="btn sm" style="font-size:9px;padding:2px 8px;min-width:auto" onclick="INTELCENTER.exportAiReport(\'' + r.id + '\')">📥</button>';
        html += '<button class="btn sm" style="font-size:9px;padding:2px 8px;min-width:auto;color:var(--cyan)" onclick="INTELCENTER.showAiReportForm(\'' + r.id + '\')">✏️</button>';
        html += '<button class="btn sm danger" style="font-size:9px;padding:2px 8px;min-width:auto" onclick="AIREPORT.deleteReport(\'' + r.id + '\')">🗑️</button>';
        html += '</div></div></div>';
      });
      html += '</div>';
    }
    html += '</div>';

    el.innerHTML = html;
    this._updateBadge();
  },

  /* ===== 删除报告 ===== */
  deleteReport(id) {
    if (!PERM.canUpload()) { showToast('权限不足'); return; }
    showConfirm('确定删除该情报分析报告？', function () {
      if (typeof INTELCENTER !== 'undefined') {
        INTELCENTER._aiReports = INTELCENTER._aiReports.filter(function (r) { return r.id !== id; });
        INTELCENTER._aiReportSave();
      }
      AIREPORT.render();
      showToast('已删除报告');
    });
  },

  /* ===== 预填充测试数据 (仅首次加载时执行) ===== */
  seedTestData() {
    var existingReports = null;
    try {
      var saved = localStorage.getItem('orps_ai_reports');
      existingReports = saved ? JSON.parse(saved) : [];
    } catch (e) {
      existingReports = [];
    }
    if (existingReports && existingReports.length > 0) return;

    var now = new Date().toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-').substring(0, 16);
    var lastWeek = new Date(Date.now() - 7 * 86400000).toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-').substring(0, 16);
    var lastMonth = new Date(Date.now() - 30 * 86400000).toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-').substring(0, 16);

    var sampleReports = [
      {
        id: 'AIR-100001',
        title: '红海航运安全形势分析及中资企业应对策略',
        country: '也门、红海沿岸',
        threatLevel: 'critical',
        reportType: '安全风险',
        summary: '胡塞武装自2023年11月起持续袭击红海商船，全球主要航运公司被迫改道好望角，亚欧航线运价上涨256%。中远海运已暂停红海航线，招商局吉布提港运营受波及。本报告综合分析红海安全形势、对华威胁及应对建议。',
        elements: {
          time: '2023年11月19日至今，持续进行中',
          place: '也门西部、红海海域、曼德海峡',
          person: '胡塞武装（安萨尔阿拉运动）、中远海运、招商局、各国商船船员',
          cause: '巴以冲突升级后，胡塞武装以"支援加沙"为由，宣布对以色列关联船只实施封锁，随后扩大至对所有经红海航行的商船发动导弹和无人机袭击',
          process: '2023年11月19日劫持"银河领袖"号货轮，随后使用反舰导弹、无人机和无人艇对红海商船发动持续袭击。2024年1月起美英发动"繁荣卫士行动"进行空袭，但未能完全遏制袭击。全球主要航运公司陆续暂停红海航线',
          result: '亚欧航线运价上涨256%，航行周期延长7-14天。中远海运于2023年12月18日暂停红海航行，招商局吉布提港物流量下降。全球供应链受冲击，保险费率大幅上涨'
        },
        threatAnalysis: '【对华威胁评估】\n1. 航运安全威胁：中国约60%的进出口贸易经海路运输，红海是连接亚欧的关键通道。航线中断直接导致运输成本上升30-40%。\n2. 企业经济损失：中远海运、招商局在红海-印度洋航线运营受直接影响，运力调度被迫调整。\n3. 能源安全风险：中东原油运输通道安全恶化，影响中国能源进口稳定性。\n4. 人员安全风险：航行于红海的中国籍船员面临被袭击风险。\n5. 供应链风险：欧洲方向的电子产品、汽车零部件等供应链交期延长。',
        advice: '【对策建议】\n1. 短期措施：维持红海航线暂停状态，改道好望角，加强船员安保培训，购买战争险。\n2. 中期策略：评估吉布提港替代方案，加强与非洲东海岸港口合作。\n3. 长期布局：推动"一带一路"陆路通道建设，分散海上运输风险。加快中欧班列运力扩容。\n4. 外交协调：通过联合国安理会等多边机制推动红海航行自由，与沙特、阿联酋等地区国家加强安全合作。\n5. 应急准备：建立航运安全预警机制，为途经高风险海域的中资船只提供实时情报支持。\n6. 风险融合：将红海航运风险纳入中东地缘风险融合评估体系，动态调整企业风险等级。',
        materials: [
          { id: 'CART-alert-001', source: '预警中心', title: '胡塞武装扩大红海袭击，中远海运暂停红海航线', country: '也门', date: '2023-12-18 09:00', severity: 'red', desc: '胡塞武装持续袭击红海商船，中远海运暂停红海航线', type: 'alert' },
          { id: 'CART-event-001', source: '事件追踪', title: '胡塞武装开始袭击红海商船', country: '也门', date: '2023-11-19', severity: 'critical', desc: '2023年11月19日胡塞武装劫持"银河领袖"号货轮', type: 'event' },
          { id: 'CART-country-001', source: '国家风险', title: '也门 风险评估', country: '也门', date: '', severity: '极高', desc: '内战持续，胡塞武装控制北部', type: 'country' }
        ],
        createTime: lastWeek,
        author: '系统预置',
        updateTime: now
      },
      {
        id: 'AIR-100002',
        title: '巴基斯坦中巴经济走廊安全威胁综合评估',
        country: '巴基斯坦',
        threatLevel: 'high',
        reportType: '安全风险',
        summary: '巴基斯坦近期发生多起针对中方人员的恐怖袭击事件，从2021年达苏9人遇难到2024年达苏5人遇难、瓜达尔2人遇难，安全形势持续恶化。本报告分析俾路支分离主义和TTP对中巴经济走廊项目的威胁，提出应对建议。',
        elements: {
          time: '2021年7月14日 — 2024年10月6日，持续多发',
          place: '巴基斯坦开伯尔-普什图省、俾路支省、卡拉奇市',
          person: '俾路支解放解放军(BLA)、巴基斯坦塔利班(TTP)、中铁建、中交建、中核集团、中国建筑等中方项目人员',
          cause: '中巴经济走廊(CPEC)建设引发当地分离主义势力不满，认为资源被掠夺。同时TTP在阿富汗境内有庇护所，巴方反恐能力不足',
          process: '2021年7月14日达苏班车爆炸9人遇难；2022年4月26日卡拉奇孔院自杀袭击3人遇难；2024年3月26日达苏项目再遭自杀式袭击5人遇难；2024年10月6日瓜达尔港附近车队遭袭2人遇难',
          result: '共计19名中方人员遇难，多人受伤。项目多次暂停施工，安保投入大幅增加。巴基斯坦军方加强了对CPEC项目的安保力量部署'
        },
        threatAnalysis: '【对华威胁评估】\n1. 人员安全威胁：巴已成为中国公民在海外遇袭最多的国家。针对中方人员的恐怖袭击呈上升趋势，且袭击方式从路边炸弹升级为自杀式袭击。\n2. 项目安全威胁：中巴经济走廊投资规模超620亿美元，瓜达尔港、达苏水电站等核心项目均位于高风险区域。\n3. 战略通道风险：中巴经济走廊是中国绕开马六甲海峡的重要陆路能源通道，其安全直接关系能源安全。\n4. 外交形象风险：中方人员频繁遇袭影响中巴"铁杆"友谊的民意基础。',
        advice: '【对策建议】\n1. 人员安全：建立中方人员出行安保规程，强制配备武装护卫，限制非必要外出。推动巴方建立CPEC特别安保部队。\n2. 项目保护：对高风险项目实施分区管理，高风险区项目暂停非必要施工。加强施工现场物理防护。\n3. 情报监测：建立与巴三军情报局(ISI)的情报共享机制，获取预警信息。利用卫星遥感监测项目周边异常活动。\n4. 外交协调：推动巴方从根源治理恐怖主义，加强中阿巴三方反恐合作。\n5. 应急准备：完善撤离预案，储备应急物资，建立24小时应急响应中心。\n6. 风险融合：将巴基斯坦安全风险与CPEC项目投资风险评估融合，动态调整投资优先级。',
        materials: [
          { id: 'CART-alert-002', source: '预警中心', title: '瓜达尔港附近中方人员遭袭击', country: '巴基斯坦', date: '2024-10-06 23:15', severity: 'red', desc: '俾路支分离主义武装袭击中方人员车队', type: 'alert' },
          { id: 'CART-alert-003', source: '预警中心', title: '达苏水电站项目遭恐怖袭击，5名中方人员遇难', country: '巴基斯坦', date: '2024-03-26 13:00', severity: 'red', desc: '自杀式炸弹袭击', type: 'alert' },
          { id: 'CART-event-002', source: '事件追踪', title: '达苏水电站项目中方人员遭自杀式袭击', country: '巴基斯坦', date: '2024-03-26', severity: 'critical', desc: '5名中方工程师遇难', type: 'event' },
          { id: 'CART-country-002', source: '国家风险', title: '巴基斯坦 风险评估', country: '巴基斯坦', date: '', severity: '高', desc: '中巴经济走廊核心区域', type: 'country' },
          { id: 'CART-enterprise-001', source: '企业资产', title: '中国交通建设', country: '巴基斯坦、缅甸、肯尼亚...', date: '', severity: '', desc: '建筑工程 | 总部:北京 | 投资:52亿$', type: 'enterprise' }
        ],
        createTime: lastMonth,
        author: '系统预置',
        updateTime: lastWeek
      },
      {
        id: 'AIR-100003',
        title: '刚果(金)M23武装冲突与中资矿业资产安全评估',
        country: '刚果(金)',
        threatLevel: 'high',
        reportType: '安全风险',
        summary: '2025年2月M23武装连续攻占北基伍和南基伍省，为近年来最大规模军事进攻。紫金矿业卡莫阿铜矿位于南部卢阿拉巴省，距战区约1500公里，但供应链和人员流动受影响。刚果(金)是中国钴铜矿资源重要来源国，安全形势恶化直接影响新能源产业链。',
        elements: {
          time: '2025年2月起，冲突持续升级中',
          place: '刚果(金)北基伍省（戈马）、南基伍省（布卡武）、卢阿拉巴省（科卢韦齐）',
          person: 'M23武装（"3月23日运动"）、刚果(金)政府军(FARDC)、联合国维和部队(MONUSCO)、紫金矿业、中铝等中资矿企人员',
          cause: 'M23武装与刚果政府长期政治矛盾，叠加卢旺达大屠杀后地区族群冲突外溢，以及钴铜矿产资源争夺',
          process: '2025年1月底M23从北基伍省向南部推进，2月初攻占省会戈马，2月中旬攻占南基伍首府布卡武。政府军溃退，联合国维和部队未有效干预。矿区虽距战区较远但交通线受威胁',
          result: '数千人伤亡，超百万人流离失所。紫金矿业卡莫阿铜矿未直接受攻击但供应链中断、人员撤离成本上升。钴矿价格波动影响全球新能源供应链'
        },
        threatAnalysis: '【对华威胁评估】\n1. 矿业资产安全：中国企业在刚果(金)矿业投资超100亿美元，其中钴矿占全球储量70%。冲突区域虽距主要矿区较远，但交通线和供应链受影响。\n2. 供应链风险：刚果(金)钴矿供应全球70%的钴原料，冲突导致钴价波动，直接影响中国新能源汽车产业链。\n3. 人员安全风险：约500名中方矿业人员在刚果(金)，安全撤离和日常运营受到威胁。\n4. 政治风险：冲突可能引发政权更迭，新政权对华态度不确定。\n5. 国际博弈：卢旺达被指控支持M23，西方势力在刚果(金)影响力上升。',
        advice: '【对策建议】\n1. 人员安全：对东部高风险区域中方人员进行预防性撤离，南部矿区人员保持高度警戒。建立矿区安全缓冲区。\n2. 项目保护：卡莫阿铜矿等南部矿区维持运营但缩减非必要活动，加强矿区物理防护和安保力量。\n3. 情报监测：利用卫星遥感监测冲突走向和矿区周边安全态势，建立与刚果军方和联合国维和部队的情报共享。\n4. 供应链备份：加快印尼镍钴资源开发，分散供应链风险。储备战略钴库存。\n5. 外交协调：通过联合国和非盟平台推动冲突政治解决，支持刚果(金)主权和领土完整。\n6. 风险融合：将刚果(金)安全风险与全球钴供应链风险评估融合，建立钴资源供应预警机制。',
        materials: [
          { id: 'CART-alert-004', source: '预警中心', title: 'M23武装攻占布卡武，东部安全形势急剧恶化', country: '刚果(金)', date: '2025-02-16 14:30', severity: 'red', desc: 'M23武装攻占南基伍省首府布卡武', type: 'alert' },
          { id: 'CART-event-003', source: '事件追踪', title: 'M23武装攻占布卡武，东部局势急剧恶化', country: '刚果(金)', date: '2025-02-16', severity: 'critical', desc: '近年来最大规模军事进攻', type: 'event' },
          { id: 'CART-enterprise-002', source: '企业资产', title: '紫金矿业', country: '塞尔维亚、刚果(金)、哥伦比亚...', date: '', severity: '', desc: '矿业资源 | 总部:龙岩 | 投资:38亿$', type: 'enterprise' },
          { id: 'CART-country-003', source: '国家风险', title: '刚果(金) 风险评估', country: '刚果(金)', date: '', severity: '高', desc: 'M23武装攻占东部，矿区安全受影响', type: 'country' }
        ],
        createTime: now,
        author: '系统预置',
        updateTime: now
      }
    ];

    try {
      localStorage.setItem('orps_ai_reports', JSON.stringify(sampleReports));
    } catch (e) {}

    var sampleCart = [
      { id: 'CART-seed-alert-1', source: '预警中心', title: 'M23武装攻占布卡武，东部安全形势急剧恶化', country: '刚果(金)', date: '2025-02-16 14:30', severity: 'red', desc: 'M23武装攻占南基伍省首府布卡武，向矿区方向推进', type: 'alert' },
      { id: 'CART-seed-alert-2', source: '预警中心', title: '达苏水电站项目遭恐怖袭击，5名中方人员遇难', country: '巴基斯坦', date: '2024-03-26 13:00', severity: 'red', desc: '自杀式炸弹袭击，5名中方工程师遇难', type: 'alert' },
      { id: 'CART-seed-event-1', source: '事件追踪', title: '胡塞武装开始袭击红海商船', country: '也门', date: '2023-11-19', severity: 'critical', desc: '胡塞武装劫持"银河领袖"号货轮，持续袭击红海商船', type: 'event' },
      { id: 'CART-seed-country-1', source: '国家风险', title: '苏丹 风险评估', country: '苏丹', date: '', severity: '极高', desc: '武装部队与快速支援部队爆发全面冲突', type: 'country' },
      { id: 'CART-seed-enterprise-1', source: '企业资产', title: '中国石油天然气集团', country: '伊拉克、哈萨克斯坦、苏丹...', date: '', severity: '', desc: '能源石化 | 总部:北京 | 投资:850亿$', type: 'enterprise' },
      { id: 'CART-seed-threat-1', source: '威胁组织', title: '胡塞武装（安萨尔阿拉运动）', country: '也门', date: '2004', severity: '高', desc: '也门什叶派武装组织，控制也门北部，持续袭击红海航运', type: 'threat' }
    ];
    try {
      localStorage.setItem('orps_aireport_cart', JSON.stringify(sampleCart));
    } catch (e) {}
  }
};
