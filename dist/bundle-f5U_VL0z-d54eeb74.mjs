import { V as g2 } from "./index-8536146e.mjs";
import "react";
import "react-dom";
function Mt(H) {
  return new Int16Array(H);
}
function wt(H) {
  return new Int32Array(H);
}
function Bt(H) {
  return new Float32Array(H);
}
var S2 = { fill: function(H, x, O, e1) {
  if (arguments.length == 2)
    for (var l1 = 0; l1 < H.length; l1++)
      H[l1] = arguments[1];
  else
    for (l1 = x; l1 < O; l1++)
      H[l1] = e1;
} }, pt = { arraycopy: function(H, x, O, e1, l1) {
  for (var J = x + l1; x < J; )
    O[e1++] = H[x++];
}, out: {} };
pt.out.println = function(H) {
  console.log(H);
}, pt.out.printf = function() {
  console.log.apply(console, arguments);
};
var _t = {};
function A0(H) {
  this.ordinal = H;
}
_t.SQRT2 = 1.4142135623730951, _t.FAST_LOG10 = function(H) {
  return Math.log10(H);
}, _t.FAST_LOG10_X = function(H, x) {
  return Math.log10(H) * x;
}, A0.short_block_allowed = new A0(0), A0.short_block_coupled = new A0(1), A0.short_block_dispensed = new A0(2), A0.short_block_forced = new A0(3);
var e2 = {};
function n0(H) {
  this.ordinal = H;
}
e2.MAX_VALUE = 34028235e31, n0.vbr_off = new n0(0), n0.vbr_mt = new n0(1), n0.vbr_rh = new n0(2), n0.vbr_abr = new n0(3), n0.vbr_mtrh = new n0(4), n0.vbr_default = n0.vbr_mtrh;
var Tt, Et, xt, yt, kt, Pt, C1 = { System: pt, VbrMode: n0, Float: e2, ShortBlock: A0, Util: _t, Arrays: S2, new_array_n: function H(x) {
  if (x.length == 1)
    return new Array(x[0]);
  var O = x[0];
  x = x.slice(1);
  for (var e1 = [], l1 = 0; l1 < O; l1++)
    e1.push(H(x));
  return e1;
}, new_byte: function(H) {
  return new Int8Array(H);
}, new_double: function(H) {
  return new Float64Array(H);
}, new_float: Bt, new_float_n: function H(x) {
  if (x.length == 1)
    return Bt(x[0]);
  var O = x[0];
  x = x.slice(1);
  for (var e1 = [], l1 = 0; l1 < O; l1++)
    e1.push(H(x));
  return e1;
}, new_int: wt, new_int_n: function H(x) {
  if (x.length == 1)
    return wt(x[0]);
  var O = x[0];
  x = x.slice(1);
  for (var e1 = [], l1 = 0; l1 < O; l1++)
    e1.push(H(x));
  return e1;
}, new_short: Mt, new_short_n: function H(x) {
  if (x.length == 1)
    return Mt(x[0]);
  var O = x[0];
  x = x.slice(1);
  for (var e1 = [], l1 = 0; l1 < O; l1++)
    e1.push(H(x));
  return e1;
}, assert: function(H) {
} };
function n2() {
  if (yt)
    return xt;
  yt = 1;
  var H = z1(), x = C1, O = x.System, e1 = x.new_float, l1 = x.new_float_n;
  return xt = function() {
    this.l = e1(H.SBMAX_l), this.s = l1([H.SBMAX_s, 3]);
    var J = this;
    this.assign = function(j) {
      O.arraycopy(j.l, 0, J.l, 0, H.SBMAX_l);
      for (var p = 0; p < H.SBMAX_s; p++)
        for (var q = 0; q < 3; q++)
          J.s[p][q] = j.s[p][q];
    };
  };
}
function f0(H) {
  var x = H;
  this.ordinal = function() {
    return x;
  };
}
f0.STEREO = new f0(0), f0.JOINT_STEREO = new f0(1), f0.DUAL_CHANNEL = new f0(2), f0.MONO = new f0(3), f0.NOT_SET = new f0(4);
var It, Vt, W0 = f0;
function z1() {
  if (Vt)
    return It;
  Vt = 1;
  var H = C1, x = H.System, O = H.VbrMode, e1 = H.new_array_n, l1 = H.new_float, J = H.new_float_n, j = H.new_int, p = H.assert;
  function q() {
    var o = function() {
      if (Et)
        return Tt;
      Et = 1;
      var g = C1, W = g.System, Y = g.Util, i1 = g.Arrays, t1 = g.new_float, n1 = z1();
      return Tt = function() {
        var r1 = [-0.1482523854003001, 32.308141959636465, 296.40344946382766, 883.1344870032432, 11113.947376231741, 1057.2713659324597, 305.7402417275812, 30.825928907280012, 3.8533188138216365, 59.42900443849514, 709.5899960123345, 5281.91112291017, -5829.66483675846, -817.6293103748613, -76.91656988279972, -4.594269939176596, 0.9063471690191471, 0.1960342806591213, -0.15466694054279598, 34.324387823855965, 301.8067566458425, 817.599602898885, 11573.795901679885, 1181.2520595540152, 321.59731579894424, 31.232021761053772, 3.7107095756221318, 53.650946155329365, 684.167428119626, 5224.56624370173, -6366.391851890084, -908.9766368219582, -89.83068876699639, -5.411397422890401, 0.8206787908286602, 0.3901806440322567, -0.16070888947830023, 36.147034243915876, 304.11815768187864, 732.7429163887613, 11989.60988270091, 1300.012278487897, 335.28490093152146, 31.48816102859945, 3.373875931311736, 47.232241542899175, 652.7371796173471, 5132.414255594984, -6909.087078780055, -1001.9990371107289, -103.62185754286375, -6.104916304710272, 0.7416505462720353, 0.5805693545089249, -0.16636367662261495, 37.751650073343995, 303.01103387567713, 627.9747488785183, 12358.763425278165, 1412.2779918482834, 346.7496836825721, 31.598286663170416, 3.1598635433980946, 40.57878626349686, 616.1671130880391, 5007.833007176154, -7454.040671756168, -1095.7960341867115, -118.24411666465777, -6.818469345853504, 0.6681786379192989, 0.7653668647301797, -0.1716176790982088, 39.11551877123304, 298.3413246578966, 503.5259106886539, 12679.589408408976, 1516.5821921214542, 355.9850766329023, 31.395241710249053, 2.9164211881972335, 33.79716964664243, 574.8943997801362, 4853.234992253242, -7997.57021486075, -1189.7624067269965, -133.6444792601766, -7.7202770609839915, 0.5993769336819237, 0.9427934736519954, -0.17645823955292173, 40.21879108166477, 289.9982036694474, 359.3226160751053, 12950.259102786438, 1612.1013903507662, 362.85067106591504, 31.045922092242872, 2.822222032597987, 26.988862316190684, 529.8996541764288, 4671.371946949588, -8535.899136645805, -1282.5898586244496, -149.58553632943463, -8.643494270763135, 0.5345111359507916, 1.111140466039205, -0.36174739330527045, 41.04429910497807, 277.5463268268618, 195.6386023135583, 13169.43812144731, 1697.6433561479398, 367.40983966190305, 30.557037410382826, 2.531473372857427, 20.070154905927314, 481.50208566532336, 4464.970341588308, -9065.36882077239, -1373.62841526722, -166.1660487028118, -9.58289321133207, 0.4729647758913199, 1.268786568327291, -0.36970682634889585, 41.393213350082036, 261.2935935556502, 12.935476055240873, 13336.131683328815, 1772.508612059496, 369.76534388639965, 29.751323653701338, 2.4023193045459172, 13.304795348228817, 430.5615775526625, 4237.0568611071185, -9581.931701634761, -1461.6913552409758, -183.12733958476446, -10.718010163869403, 0.41421356237309503, 1.414213562373095, -0.37677560326535325, 41.619486213528496, 241.05423794991074, -187.94665032361226, 13450.063605744153, 1836.153896465782, 369.4908799925761, 29.001847876923147, 2.0714759319987186, 6.779591200894186, 377.7767837205709, 3990.386575512536, -10081.709459700915, -1545.947424837898, -200.3762958015653, -11.864482073055006, 0.3578057213145241, 1.546020906725474, -0.3829366947518991, 41.1516456456653, 216.47684307105183, -406.1569483347166, 13511.136535077321, 1887.8076599260432, 367.3025214564151, 28.136213436723654, 1.913880671464418, 0.3829366947518991, 323.85365704338597, 3728.1472257487526, -10561.233882199509, -1625.2025997821418, -217.62525175416, -13.015432208941645, 0.3033466836073424, 1.66293922460509, -0.5822628872992417, 40.35639251440489, 188.20071124269245, -640.2706748618148, 13519.21490106562, 1927.6022433578062, 362.8197642637487, 26.968821921868447, 1.7463817695935329, -5.62650678237171, 269.3016715297017, 3453.386536448852, -11016.145278780888, -1698.6569643425091, -234.7658734267683, -14.16351421663124, 0.2504869601913055, 1.76384252869671, -0.5887180101749253, 39.23429103868072, 155.76096234403798, -889.2492977967378, 13475.470561874661, 1955.0535223723712, 356.4450994756727, 25.894952980042156, 1.5695032905781554, -11.181939564328772, 214.80884394039484, 3169.1640829158237, -11443.321309975563, -1765.1588461316153, -251.68908574481912, -15.49755935939164, 0.198912367379658, 1.847759065022573, -0.7912582233652842, 37.39369355329111, 119.699486012458, -1151.0956593239027, 13380.446257078214, 1970.3952110853447, 348.01959814116185, 24.731487364283044, 1.3850130831637748, -16.421408865300393, 161.05030052864092, 2878.3322807850063, -11838.991423510031, -1823.985884688674, -268.2854986386903, -16.81724543849939, 0.1483359875383474, 1.913880671464418, -0.7960642926861912, 35.2322109610459, 80.01928065061526, -1424.0212633405113, 13235.794061869668, 1973.804052543835, 337.9908651258184, 23.289159354463873, 1.3934255946442087, -21.099669467133474, 108.48348407242611, 2583.700758091299, -12199.726194855148, -1874.2780658979746, -284.2467154529415, -18.11369784385905, 0.09849140335716425, 1.961570560806461, -0.998795456205172, 32.56307803611191, 36.958364584370486, -1706.075448829146, 13043.287458812016, 1965.3831106103316, 326.43182772364605, 22.175018750622293, 1.198638339011324, -25.371248002043963, 57.53505923036915, 2288.41886619975, -12522.674544337233, -1914.8400385312243, -299.26241273417224, -19.37805630698734, 0.04912684976946725, 1.990369453344394, 0.035780907 * Y.SQRT2 * 0.5 / 2384e-9, 0.017876148 * Y.SQRT2 * 0.5 / 2384e-9, 3134727e-9 * Y.SQRT2 * 0.5 / 2384e-9, 2457142e-9 * Y.SQRT2 * 0.5 / 2384e-9, 971317e-9 * Y.SQRT2 * 0.5 / 2384e-9, 218868e-9 * Y.SQRT2 * 0.5 / 2384e-9, 101566e-9 * Y.SQRT2 * 0.5 / 2384e-9, 13828e-9 * Y.SQRT2 * 0.5 / 2384e-9, 12804.797818791945, 1945.5515939597317, 313.4244966442953, 20.801593959731544, 1995.1556208053692, 9.000838926174497, -29.20218120805369], G = [[2382191739347913e-28, 6423305872147834e-28, 9400849094049688e-28, 1122435026096556e-27, 1183840321267481e-27, 1122435026096556e-27, 940084909404969e-27, 6423305872147839e-28, 2382191739347918e-28, 5456116108943412e-27, 4878985199565852e-27, 4240448995017367e-27, 3559909094758252e-27, 2858043359288075e-27, 2156177623817898e-27, 1475637723558783e-27, 8371015190102974e-28, 2599706096327376e-28, -5456116108943412e-27, -4878985199565852e-27, -4240448995017367e-27, -3559909094758252e-27, -2858043359288076e-27, -2156177623817898e-27, -1475637723558783e-27, -8371015190102975e-28, -2599706096327376e-28, -2382191739347923e-28, -6423305872147843e-28, -9400849094049696e-28, -1122435026096556e-27, -1183840321267481e-27, -1122435026096556e-27, -9400849094049694e-28, -642330587214784e-27, -2382191739347918e-28], [2382191739347913e-28, 6423305872147834e-28, 9400849094049688e-28, 1122435026096556e-27, 1183840321267481e-27, 1122435026096556e-27, 9400849094049688e-28, 6423305872147841e-28, 2382191739347918e-28, 5456116108943413e-27, 4878985199565852e-27, 4240448995017367e-27, 3559909094758253e-27, 2858043359288075e-27, 2156177623817898e-27, 1475637723558782e-27, 8371015190102975e-28, 2599706096327376e-28, -5461314069809755e-27, -4921085770524055e-27, -4343405037091838e-27, -3732668368707687e-27, -3093523840190885e-27, -2430835727329465e-27, -1734679010007751e-27, -974825365660928e-27, -2797435120168326e-28, 0, 0, 0, 0, 0, 0, -2283748241799531e-28, -4037858874020686e-28, -2146547464825323e-28], [0.1316524975873958, 0.414213562373095, 0.7673269879789602, 1.091308501069271, 1.303225372841206, 1.56968557711749, 1.920982126971166, 2.414213562373094, 3.171594802363212, 4.510708503662055, 7.595754112725146, 22.90376554843115, 0.984807753012208, 0.6427876096865394, 0.3420201433256688, 0.9396926207859084, -0.1736481776669303, -0.7660444431189779, 0.8660254037844387, 0.5, -0.5144957554275265, -0.4717319685649723, -0.3133774542039019, -0.1819131996109812, -0.09457419252642064, -0.04096558288530405, -0.01419856857247115, -0.003699974673760037, 0.8574929257125442, 0.8817419973177052, 0.9496286491027329, 0.9833145924917901, 0.9955178160675857, 0.9991605581781475, 0.999899195244447, 0.9999931550702802], [0, 0, 0, 0, 0, 0, 2283748241799531e-28, 4037858874020686e-28, 2146547464825323e-28, 5461314069809755e-27, 4921085770524055e-27, 4343405037091838e-27, 3732668368707687e-27, 3093523840190885e-27, 2430835727329466e-27, 1734679010007751e-27, 974825365660928e-27, 2797435120168326e-28, -5456116108943413e-27, -4878985199565852e-27, -4240448995017367e-27, -3559909094758253e-27, -2858043359288075e-27, -2156177623817898e-27, -1475637723558782e-27, -8371015190102975e-28, -2599706096327376e-28, -2382191739347913e-28, -6423305872147834e-28, -9400849094049688e-28, -1122435026096556e-27, -1183840321267481e-27, -1122435026096556e-27, -9400849094049688e-28, -6423305872147841e-28, -2382191739347918e-28]], _1 = G[n1.SHORT_TYPE], c = G[n1.SHORT_TYPE], S = G[n1.SHORT_TYPE], E = G[n1.SHORT_TYPE], h = [0, 1, 16, 17, 8, 9, 24, 25, 4, 5, 20, 21, 12, 13, 28, 29, 2, 3, 18, 19, 10, 11, 26, 27, 6, 7, 22, 23, 14, 15, 30, 31];
        function U(u, i, a) {
          for (var B, X, n, I = 10, L = i + 238 - 14 - 286, Q = -15; Q < 0; Q++) {
            var $, y, D;
            $ = r1[I + -10], y = u[L + -224] * $, D = u[i + 224] * $, $ = r1[I + -9], y += u[L + -160] * $, D += u[i + 160] * $, $ = r1[I + -8], y += u[L + -96] * $, D += u[i + 96] * $, $ = r1[I + -7], y += u[L + -32] * $, D += u[i + 32] * $, $ = r1[I + -6], y += u[L + 32] * $, D += u[i + -32] * $, $ = r1[I + -5], y += u[L + 96] * $, D += u[i + -96] * $, $ = r1[I + -4], y += u[L + 160] * $, D += u[i + -160] * $, $ = r1[I + -3], y += u[L + 224] * $, D += u[i + -224] * $, $ = r1[I + -2], y += u[i + -256] * $, D -= u[L + 256] * $, $ = r1[I + -1], y += u[i + -192] * $, D -= u[L + 192] * $, $ = r1[I + 0], y += u[i + -128] * $, D -= u[L + 128] * $, $ = r1[I + 1], y += u[i + -64] * $, D -= u[L + 64] * $, $ = r1[I + 2], y += u[i + 0] * $, D -= u[L + 0] * $, $ = r1[I + 3], y += u[i + 64] * $, D -= u[L + -64] * $, $ = r1[I + 4], y += u[i + 128] * $, D -= u[L + -128] * $, $ = r1[I + 5], y += u[i + 192] * $, $ = (D -= u[L + -192] * $) - (y *= r1[I + 6]), a[30 + 2 * Q] = D + y, a[31 + 2 * Q] = r1[I + 7] * $, I += 18, i--, L++;
          }
          D = u[i + -16] * r1[I + -10], y = u[i + -32] * r1[I + -2], D += (u[i + -48] - u[i + 16]) * r1[I + -9], y += u[i + -96] * r1[I + -1], D += (u[i + -80] + u[i + 48]) * r1[I + -8], y += u[i + -160] * r1[I + 0], D += (u[i + -112] - u[i + 80]) * r1[I + -7], y += u[i + -224] * r1[I + 1], D += (u[i + -144] + u[i + 112]) * r1[I + -6], y -= u[i + 32] * r1[I + 2], D += (u[i + -176] - u[i + 144]) * r1[I + -5], y -= u[i + 96] * r1[I + 3], D += (u[i + -208] + u[i + 176]) * r1[I + -4], y -= u[i + 160] * r1[I + 4], D += (u[i + -240] - u[i + 208]) * r1[I + -3], B = (y -= u[i + 224]) - D, X = y + D, D = a[14], y = a[15] - D, a[31] = X + D, a[30] = B + y, a[15] = B - y, a[14] = X - D, n = a[28] - a[0], a[0] += a[28], a[28] = n * r1[I + -36 + 7], n = a[29] - a[1], a[1] += a[29], a[29] = n * r1[I + -36 + 7], n = a[26] - a[2], a[2] += a[26], a[26] = n * r1[I + -72 + 7], n = a[27] - a[3], a[3] += a[27], a[27] = n * r1[I + -72 + 7], n = a[24] - a[4], a[4] += a[24], a[24] = n * r1[I + -108 + 7], n = a[25] - a[5], a[5] += a[25], a[25] = n * r1[I + -108 + 7], n = a[22] - a[6], a[6] += a[22], a[22] = n * Y.SQRT2, n = a[23] - a[7], a[7] += a[23], a[23] = n * Y.SQRT2 - a[7], a[7] -= a[6], a[22] -= a[7], a[23] -= a[22], n = a[6], a[6] = a[31] - n, a[31] = a[31] + n, n = a[7], a[7] = a[30] - n, a[30] = a[30] + n, n = a[22], a[22] = a[15] - n, a[15] = a[15] + n, n = a[23], a[23] = a[14] - n, a[14] = a[14] + n, n = a[20] - a[8], a[8] += a[20], a[20] = n * r1[I + -180 + 7], n = a[21] - a[9], a[9] += a[21], a[21] = n * r1[I + -180 + 7], n = a[18] - a[10], a[10] += a[18], a[18] = n * r1[I + -216 + 7], n = a[19] - a[11], a[11] += a[19], a[19] = n * r1[I + -216 + 7], n = a[16] - a[12], a[12] += a[16], a[16] = n * r1[I + -252 + 7], n = a[17] - a[13], a[13] += a[17], a[17] = n * r1[I + -252 + 7], n = -a[20] + a[24], a[20] += a[24], a[24] = n * r1[I + -216 + 7], n = -a[21] + a[25], a[21] += a[25], a[25] = n * r1[I + -216 + 7], n = a[4] - a[8], a[4] += a[8], a[8] = n * r1[I + -216 + 7], n = a[5] - a[9], a[5] += a[9], a[9] = n * r1[I + -216 + 7], n = a[0] - a[12], a[0] += a[12], a[12] = n * r1[I + -72 + 7], n = a[1] - a[13], a[1] += a[13], a[13] = n * r1[I + -72 + 7], n = a[16] - a[28], a[16] += a[28], a[28] = n * r1[I + -72 + 7], n = -a[17] + a[29], a[17] += a[29], a[29] = n * r1[I + -72 + 7], n = Y.SQRT2 * (a[2] - a[10]), a[2] += a[10], a[10] = n, n = Y.SQRT2 * (a[3] - a[11]), a[3] += a[11], a[11] = n, n = Y.SQRT2 * (-a[18] + a[26]), a[18] += a[26], a[26] = n - a[18], n = Y.SQRT2 * (-a[19] + a[27]), a[19] += a[27], a[27] = n - a[19], n = a[2], a[19] -= a[3], a[3] -= n, a[2] = a[31] - n, a[31] += n, n = a[3], a[11] -= a[19], a[18] -= n, a[3] = a[30] - n, a[30] += n, n = a[18], a[27] -= a[11], a[19] -= n, a[18] = a[15] - n, a[15] += n, n = a[19], a[10] -= n, a[19] = a[14] - n, a[14] += n, n = a[10], a[11] -= n, a[10] = a[23] - n, a[23] += n, n = a[11], a[26] -= n, a[11] = a[22] - n, a[22] += n, n = a[26], a[27] -= n, a[26] = a[7] - n, a[7] += n, n = a[27], a[27] = a[6] - n, a[6] += n, n = Y.SQRT2 * (a[0] - a[4]), a[0] += a[4], a[4] = n, n = Y.SQRT2 * (a[1] - a[5]), a[1] += a[5], a[5] = n, n = Y.SQRT2 * (a[16] - a[20]), a[16] += a[20], a[20] = n, n = Y.SQRT2 * (a[17] - a[21]), a[17] += a[21], a[21] = n, n = -Y.SQRT2 * (a[8] - a[12]), a[8] += a[12], a[12] = n - a[8], n = -Y.SQRT2 * (a[9] - a[13]), a[9] += a[13], a[13] = n - a[9], n = -Y.SQRT2 * (a[25] - a[29]), a[25] += a[29], a[29] = n - a[25], n = -Y.SQRT2 * (a[24] + a[28]), a[24] -= a[28], a[28] = n - a[24], n = a[24] - a[16], a[24] = n, n = a[20] - n, a[20] = n, n = a[28] - n, a[28] = n, n = a[25] - a[17], a[25] = n, n = a[21] - n, a[21] = n, n = a[29] - n, a[29] = n, n = a[17] - a[1], a[17] = n, n = a[9] - n, a[9] = n, n = a[25] - n, a[25] = n, n = a[5] - n, a[5] = n, n = a[21] - n, a[21] = n, n = a[13] - n, a[13] = n, n = a[29] - n, a[29] = n, n = a[1] - a[0], a[1] = n, n = a[16] - n, a[16] = n, n = a[17] - n, a[17] = n, n = a[8] - n, a[8] = n, n = a[9] - n, a[9] = n, n = a[24] - n, a[24] = n, n = a[25] - n, a[25] = n, n = a[4] - n, a[4] = n, n = a[5] - n, a[5] = n, n = a[20] - n, a[20] = n, n = a[21] - n, a[21] = n, n = a[12] - n, a[12] = n, n = a[13] - n, a[13] = n, n = a[28] - n, a[28] = n, n = a[29] - n, a[29] = n, n = a[0], a[0] += a[31], a[31] -= n, n = a[1], a[1] += a[30], a[30] -= n, n = a[16], a[16] += a[15], a[15] -= n, n = a[17], a[17] += a[14], a[14] -= n, n = a[8], a[8] += a[23], a[23] -= n, n = a[9], a[9] += a[22], a[22] -= n, n = a[24], a[24] += a[7], a[7] -= n, n = a[25], a[25] += a[6], a[6] -= n, n = a[4], a[4] += a[27], a[27] -= n, n = a[5], a[5] += a[26], a[26] -= n, n = a[20], a[20] += a[11], a[11] -= n, n = a[21], a[21] += a[10], a[10] -= n, n = a[12], a[12] += a[19], a[19] -= n, n = a[13], a[13] += a[18], a[18] -= n, n = a[28], a[28] += a[3], a[3] -= n, n = a[29], a[29] += a[2], a[2] -= n;
        }
        function v(u, i) {
          for (var a = 0; a < 3; a++) {
            var B, X, n, I, L, Q;
            X = (I = u[i + 6] * G[n1.SHORT_TYPE][0] - u[i + 15]) + (B = u[i + 0] * G[n1.SHORT_TYPE][2] - u[i + 9]), n = I - B, L = (I = u[i + 15] * G[n1.SHORT_TYPE][0] + u[i + 6]) + (B = u[i + 9] * G[n1.SHORT_TYPE][2] + u[i + 0]), Q = -I + B, B = 2069978111953089e-26 * (u[i + 3] * G[n1.SHORT_TYPE][1] - u[i + 12]), I = 2069978111953089e-26 * (u[i + 12] * G[n1.SHORT_TYPE][1] + u[i + 3]), u[i + 0] = 190752519173728e-25 * X + B, u[i + 15] = 190752519173728e-25 * -L + I, n = 0.8660254037844387 * n * 1907525191737281e-26, L = 0.5 * L * 1907525191737281e-26 + I, u[i + 3] = n - L, u[i + 6] = n + L, X = 0.5 * X * 1907525191737281e-26 - B, Q = 0.8660254037844387 * Q * 1907525191737281e-26, u[i + 9] = X + Q, u[i + 12] = X - Q, i++;
          }
        }
        this.mdct_sub48 = function(u, i, a) {
          for (var B, X, n, I, L, Q, $, y, D, t, s, r, l, f, b, A, T, M, k, K, N, a1 = i, C = 286, f1 = 0; f1 < u.channels_out; f1++) {
            for (var m1 = 0; m1 < u.mode_gr; m1++) {
              for (var u1, h1 = u.l3_side.tt[m1][f1], F = h1.xr, b1 = 0, o1 = u.sb_sample[f1][1 - m1], c1 = 0, Z = 0; Z < 9; Z++)
                for (U(a1, C, o1[c1]), U(a1, C + 32, o1[c1 + 1]), c1 += 2, C += 64, u1 = 1; u1 < 32; u1 += 2)
                  o1[c1 - 1][u1] *= -1;
              for (u1 = 0; u1 < 32; u1++, b1 += 18) {
                var T1 = h1.block_type, A1 = u.sb_sample[f1][m1], R1 = u.sb_sample[f1][1 - m1];
                if (h1.mixed_block_flag != 0 && u1 < 2 && (T1 = 0), u.amp_filter[u1] < 1e-12)
                  i1.fill(F, b1 + 0, b1 + 18, 0);
                else {
                  if (u.amp_filter[u1] < 1)
                    for (Z = 0; Z < 18; Z++)
                      R1[Z][h[u1]] *= u.amp_filter[u1];
                  if (T1 == n1.SHORT_TYPE) {
                    for (Z = -3; Z < 0; Z++) {
                      var B1 = G[n1.SHORT_TYPE][Z + 3];
                      F[b1 + 3 * Z + 9] = A1[9 + Z][h[u1]] * B1 - A1[8 - Z][h[u1]], F[b1 + 3 * Z + 18] = A1[14 - Z][h[u1]] * B1 + A1[15 + Z][h[u1]], F[b1 + 3 * Z + 10] = A1[15 + Z][h[u1]] * B1 - A1[14 - Z][h[u1]], F[b1 + 3 * Z + 19] = R1[2 - Z][h[u1]] * B1 + R1[3 + Z][h[u1]], F[b1 + 3 * Z + 11] = R1[3 + Z][h[u1]] * B1 - R1[2 - Z][h[u1]], F[b1 + 3 * Z + 20] = R1[8 - Z][h[u1]] * B1 + R1[9 + Z][h[u1]];
                    }
                    v(F, b1);
                  } else {
                    var P1 = t1(18);
                    for (Z = -9; Z < 0; Z++) {
                      var I1, d1;
                      I1 = G[T1][Z + 27] * R1[Z + 9][h[u1]] + G[T1][Z + 36] * R1[8 - Z][h[u1]], d1 = G[T1][Z + 9] * A1[Z + 9][h[u1]] - G[T1][Z + 18] * A1[8 - Z][h[u1]], P1[Z + 9] = I1 - d1 * _1[3 + Z + 9], P1[Z + 18] = I1 * _1[3 + Z + 9] + d1;
                    }
                    B = F, X = b1, I = void 0, L = void 0, Q = void 0, $ = void 0, y = void 0, D = void 0, t = void 0, s = void 0, r = void 0, l = void 0, f = void 0, b = void 0, A = void 0, T = void 0, M = void 0, k = void 0, K = void 0, N = void 0, Q = (n = P1)[17] - n[9], y = n[15] - n[11], D = n[14] - n[12], t = n[0] + n[8], s = n[1] + n[7], r = n[2] + n[6], l = n[3] + n[5], B[X + 17] = t + r - l - (s - n[4]), L = (t + r - l) * c[19] + (s - n[4]), I = (Q - y - D) * c[18], B[X + 5] = I + L, B[X + 6] = I - L, $ = (n[16] - n[10]) * c[18], s = s * c[19] + n[4], I = Q * c[12] + $ + y * c[13] + D * c[14], L = -t * c[16] + s - r * c[17] + l * c[15], B[X + 1] = I + L, B[X + 2] = I - L, I = Q * c[13] - $ - y * c[14] + D * c[12], L = -t * c[17] + s - r * c[15] + l * c[16], B[X + 9] = I + L, B[X + 10] = I - L, I = Q * c[14] - $ + y * c[12] - D * c[13], L = t * c[15] - s + r * c[16] - l * c[17], B[X + 13] = I + L, B[X + 14] = I - L, f = n[8] - n[0], A = n[6] - n[2], T = n[5] - n[3], M = n[17] + n[9], k = n[16] + n[10], K = n[15] + n[11], N = n[14] + n[12], B[X + 0] = M + K + N + (k + n[13]), I = (M + K + N) * c[19] - (k + n[13]), L = (f - A + T) * c[18], B[X + 11] = I + L, B[X + 12] = I - L, b = (n[7] - n[1]) * c[18], k = n[13] - k * c[19], I = M * c[15] - k + K * c[16] + N * c[17], L = f * c[14] + b + A * c[12] + T * c[13], B[X + 3] = I + L, B[X + 4] = I - L, I = -M * c[17] + k - K * c[15] - N * c[16], L = f * c[13] + b - A * c[14] - T * c[12], B[X + 7] = I + L, B[X + 8] = I - L, I = -M * c[16] + k - K * c[17] - N * c[15], L = f * c[12] - b + A * c[13] - T * c[14], B[X + 15] = I + L, B[X + 16] = I - L;
                  }
                }
                if (T1 != n1.SHORT_TYPE && u1 != 0)
                  for (Z = 7; Z >= 0; --Z) {
                    var O1, L1;
                    O1 = F[b1 + Z] * S[20 + Z] + F[b1 + -1 - Z] * E[28 + Z], L1 = F[b1 + Z] * E[28 + Z] - F[b1 + -1 - Z] * S[20 + Z], F[b1 + -1 - Z] = O1, F[b1 + Z] = L1;
                  }
              }
            }
            if (a1 = a, C = 286, u.mode_gr == 1)
              for (var X1 = 0; X1 < 18; X1++)
                W.arraycopy(u.sb_sample[f1][1][X1], 0, u.sb_sample[f1][0][X1], 0, 32);
          }
        };
      };
    }(), e = function() {
      if (Pt)
        return kt;
      Pt = 1;
      var g = n2();
      return kt = function() {
        this.thm = new g(), this.en = new g();
      };
    }(), d = W0, w = q.FFTOFFSET, z = q.MPG_MD_MS_LR, P = null;
    this.psy = null;
    var R = null, _ = null, m = null;
    this.setModules = function(g, W, Y, i1) {
      P = g, this.psy = W, R = W, _ = i1, m = Y;
    };
    var V = new o();
    this.lame_encode_mp3_frame = function(g, W, Y, i1, t1, n1) {
      var r1, G = e1([2, 2]);
      G[0][0] = new e(), G[0][1] = new e(), G[1][0] = new e(), G[1][1] = new e();
      var _1, c = e1([2, 2]);
      c[0][0] = new e(), c[0][1] = new e(), c[1][0] = new e(), c[1][1] = new e();
      var S, E, h, U = [null, null], v = g.internal_flags, u = J([2, 4]), i = [0.5, 0.5], a = [[0, 0], [0, 0]], B = [[0, 0], [0, 0]];
      if (U[0] = W, U[1] = Y, v.lame_encode_frame_init == 0 && function(l, f) {
        var b, A, T = l.internal_flags;
        if (T.lame_encode_frame_init == 0) {
          var M, k, K = l1(2014), N = l1(2014);
          for (T.lame_encode_frame_init = 1, M = 0, k = 0; M < 286 + 576 * (1 + T.mode_gr); ++M)
            M < 576 * T.mode_gr ? (K[M] = 0, T.channels_out == 2 && (N[M] = 0)) : (K[M] = f[0][k], T.channels_out == 2 && (N[M] = f[1][k]), ++k);
          for (A = 0; A < T.mode_gr; A++)
            for (b = 0; b < T.channels_out; b++)
              T.l3_side.tt[A][b].block_type = q.SHORT_TYPE;
          V.mdct_sub48(T, K, N), p(576 >= q.FFTOFFSET), p(T.mf_size >= q.BLKSIZE + l.framesize - q.FFTOFFSET), p(T.mf_size >= 512 + l.framesize - 32);
        }
      }(g, U), v.padding = 0, (v.slot_lag -= v.frac_SpF) < 0 && (v.slot_lag += g.out_samplerate, v.padding = 1), v.psymodel != 0) {
        var X = [null, null], n = 0, I = j(2);
        for (h = 0; h < v.mode_gr; h++) {
          for (E = 0; E < v.channels_out; E++)
            X[E] = U[E], n = 576 + 576 * h - q.FFTOFFSET;
          if ((g.VBR == O.vbr_mtrh || g.VBR == O.vbr_mt ? R.L3psycho_anal_vbr(g, X, n, h, G, c, a[h], B[h], u[h], I) : R.L3psycho_anal_ns(g, X, n, h, G, c, a[h], B[h], u[h], I)) != 0)
            return -4;
          for (g.mode == d.JOINT_STEREO && (i[h] = u[h][2] + u[h][3], i[h] > 0 && (i[h] = u[h][3] / i[h])), E = 0; E < v.channels_out; E++) {
            var L = v.l3_side.tt[h][E];
            L.block_type = I[E], L.mixed_block_flag = 0;
          }
        }
      } else
        for (h = 0; h < v.mode_gr; h++)
          for (E = 0; E < v.channels_out; E++)
            v.l3_side.tt[h][E].block_type = q.NORM_TYPE, v.l3_side.tt[h][E].mixed_block_flag = 0, B[h][E] = a[h][E] = 700;
      if (function(l) {
        var f, b;
        if (l.ATH.useAdjust != 0)
          if (b = l.loudness_sq[0][0], f = l.loudness_sq[1][0], l.channels_out == 2 ? (b += l.loudness_sq[0][1], f += l.loudness_sq[1][1]) : (b += b, f += f), l.mode_gr == 2 && (b = Math.max(b, f)), b *= 0.5, (b *= l.ATH.aaSensitivityP) > 0.03125)
            l.ATH.adjust >= 1 ? l.ATH.adjust = 1 : l.ATH.adjust < l.ATH.adjustLimit && (l.ATH.adjust = l.ATH.adjustLimit), l.ATH.adjustLimit = 1;
          else {
            var A = 31.98 * b + 625e-6;
            l.ATH.adjust >= A ? (l.ATH.adjust *= 0.075 * A + 0.925, l.ATH.adjust < A && (l.ATH.adjust = A)) : l.ATH.adjustLimit >= A ? l.ATH.adjust = A : l.ATH.adjust < l.ATH.adjustLimit && (l.ATH.adjust = l.ATH.adjustLimit), l.ATH.adjustLimit = A;
          }
        else
          l.ATH.adjust = 1;
      }(v), V.mdct_sub48(v, U[0], U[1]), v.mode_ext = q.MPG_MD_LR_LR, g.force_ms)
        v.mode_ext = q.MPG_MD_MS_LR;
      else if (g.mode == d.JOINT_STEREO) {
        var Q = 0, $ = 0;
        for (h = 0; h < v.mode_gr; h++)
          for (E = 0; E < v.channels_out; E++)
            Q += B[h][E], $ += a[h][E];
        if (Q <= 1 * $) {
          var y = v.l3_side.tt[0], D = v.l3_side.tt[v.mode_gr - 1];
          y[0].block_type == y[1].block_type && D[0].block_type == D[1].block_type && (v.mode_ext = q.MPG_MD_MS_LR);
        }
      }
      if (v.mode_ext == z ? (_1 = c, S = B) : (_1 = G, S = a), g.analysis && v.pinfo != null)
        for (h = 0; h < v.mode_gr; h++)
          for (E = 0; E < v.channels_out; E++)
            v.pinfo.ms_ratio[h] = v.ms_ratio[h], v.pinfo.ms_ener_ratio[h] = i[h], v.pinfo.blocktype[h][E] = v.l3_side.tt[h][E].block_type, v.pinfo.pe[h][E] = S[h][E], x.arraycopy(v.l3_side.tt[h][E].xr, 0, v.pinfo.xr[h][E], 0, 576), v.mode_ext == z && (v.pinfo.ers[h][E] = v.pinfo.ers[h][E + 2], x.arraycopy(v.pinfo.energy[h][E + 2], 0, v.pinfo.energy[h][E], 0, v.pinfo.energy[h][E].length));
      if (g.VBR == O.vbr_off || g.VBR == O.vbr_abr) {
        var t, s;
        for (t = 0; t < 18; t++)
          v.nsPsy.pefirbuf[t] = v.nsPsy.pefirbuf[t + 1];
        for (s = 0, h = 0; h < v.mode_gr; h++)
          for (E = 0; E < v.channels_out; E++)
            s += S[h][E];
        for (v.nsPsy.pefirbuf[18] = s, s = v.nsPsy.pefirbuf[9], t = 0; t < 9; t++)
          s += (v.nsPsy.pefirbuf[t] + v.nsPsy.pefirbuf[18 - t]) * q.fircoef[t];
        for (s = 3350 * v.mode_gr * v.channels_out / s, h = 0; h < v.mode_gr; h++)
          for (E = 0; E < v.channels_out; E++)
            S[h][E] *= s;
      }
      if (v.iteration_loop.iteration_loop(g, S, i, _1), P.format_bitstream(g), r1 = P.copy_buffer(v, i1, t1, n1, 1), g.bWriteVbrTag && _.addVbrFrame(g), g.analysis && v.pinfo != null) {
        for (E = 0; E < v.channels_out; E++) {
          var r;
          for (r = 0; r < w; r++)
            v.pinfo.pcmdata[E][r] = v.pinfo.pcmdata[E][r + g.framesize];
          for (r = w; r < 1600; r++)
            v.pinfo.pcmdata[E][r] = U[E][r - w];
        }
        m.set_frame_pinfo(g, _1);
      }
      return function(l) {
        var f, b;
        for (p(0 <= l.bitrate_index && l.bitrate_index < 16), p(0 <= l.mode_ext && l.mode_ext < 4), l.bitrate_stereoMode_Hist[l.bitrate_index][4]++, l.bitrate_stereoMode_Hist[15][4]++, l.channels_out == 2 && (l.bitrate_stereoMode_Hist[l.bitrate_index][l.mode_ext]++, l.bitrate_stereoMode_Hist[15][l.mode_ext]++), f = 0; f < l.mode_gr; ++f)
          for (b = 0; b < l.channels_out; ++b) {
            var A = 0 | l.l3_side.tt[f][b].block_type;
            l.l3_side.tt[f][b].mixed_block_flag != 0 && (A = 4), l.bitrate_blockType_Hist[l.bitrate_index][A]++, l.bitrate_blockType_Hist[l.bitrate_index][5]++, l.bitrate_blockType_Hist[15][A]++, l.bitrate_blockType_Hist[15][5]++;
          }
      }(v), r1;
    };
  }
  return q.ENCDELAY = 576, q.POSTDELAY = 1152, q.MDCTDELAY = 48, q.FFTOFFSET = 224 + q.MDCTDELAY, q.DECDELAY = 528, q.SBLIMIT = 32, q.CBANDS = 64, q.SBPSY_l = 21, q.SBPSY_s = 12, q.SBMAX_l = 22, q.SBMAX_s = 13, q.PSFB21 = 6, q.PSFB12 = 6, q.BLKSIZE = 1024, q.HBLKSIZE = q.BLKSIZE / 2 + 1, q.BLKSIZE_s = 256, q.HBLKSIZE_s = q.BLKSIZE_s / 2 + 1, q.NORM_TYPE = 0, q.START_TYPE = 1, q.SHORT_TYPE = 2, q.STOP_TYPE = 3, q.MPG_MD_LR_LR = 0, q.MPG_MD_LR_I = 1, q.MPG_MD_MS_LR = 2, q.MPG_MD_MS_I = 3, q.fircoef = [-0.1039435, -0.1892065, 5 * -0.0432472, -0.155915, 3898045e-23, 0.0467745 * 5, 0.50455, 0.756825, 0.187098 * 5], It = q;
}
var _2 = C1, Ht = _2.Util, Ot = _2.new_float, K1 = z1(), A2 = function() {
  var H = Ot(K1.BLKSIZE), x = Ot(K1.BLKSIZE_s / 2), O = [0.9238795325112867, 0.3826834323650898, 0.9951847266721969, 0.0980171403295606, 0.9996988186962042, 0.02454122852291229, 0.9999811752826011, 0.006135884649154475];
  function e1(J, j, p) {
    var q, o, e, d = 0, w = j + (p <<= 1);
    q = 4;
    do {
      var z, P, R, _, m, V, g;
      g = q >> 1, V = (m = q << 1) + (_ = q), q = m << 1, e = (o = j) + g;
      do
        G = J[o + 0] - J[o + _], r1 = J[o + 0] + J[o + _], E = J[o + m] - J[o + V], c = J[o + m] + J[o + V], J[o + m] = r1 - c, J[o + 0] = r1 + c, J[o + V] = G - E, J[o + _] = G + E, G = J[e + 0] - J[e + _], r1 = J[e + 0] + J[e + _], E = Ht.SQRT2 * J[e + V], c = Ht.SQRT2 * J[e + m], J[e + m] = r1 - c, J[e + 0] = r1 + c, J[e + V] = G - E, J[e + _] = G + E, e += q, o += q;
      while (o < w);
      for (P = O[d + 0], z = O[d + 1], R = 1; R < g; R++) {
        var W, Y;
        W = 1 - 2 * z * z, Y = 2 * z * P, o = j + R, e = j + _ - R;
        do {
          var i1, t1, n1, r1, G, _1, c, S, E, h;
          t1 = Y * J[o + _] - W * J[e + _], i1 = W * J[o + _] + Y * J[e + _], G = J[o + 0] - i1, r1 = J[o + 0] + i1, _1 = J[e + 0] - t1, n1 = J[e + 0] + t1, t1 = Y * J[o + V] - W * J[e + V], i1 = W * J[o + V] + Y * J[e + V], E = J[o + m] - i1, c = J[o + m] + i1, h = J[e + m] - t1, S = J[e + m] + t1, t1 = z * c - P * h, i1 = P * c + z * h, J[o + m] = r1 - i1, J[o + 0] = r1 + i1, J[e + V] = _1 - t1, J[e + _] = _1 + t1, t1 = P * S - z * E, i1 = z * S + P * E, J[e + m] = n1 - i1, J[e + 0] = n1 + i1, J[o + V] = G - t1, J[o + _] = G + t1, e += q, o += q;
        } while (o < w);
        P = (W = P) * O[d + 0] - z * O[d + 1], z = W * O[d + 1] + z * O[d + 0];
      }
      d += 2;
    } while (q < p);
  }
  var l1 = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254];
  this.fft_short = function(J, j, p, q, o) {
    for (var e = 0; e < 3; e++) {
      var d = K1.BLKSIZE_s / 2, w = 65535 & 192 * (e + 1), z = K1.BLKSIZE_s / 8 - 1;
      do {
        var P, R, _, m, V, g = 255 & l1[z << 2];
        R = (P = x[g] * q[p][o + g + w]) - (V = x[127 - g] * q[p][o + g + w + 128]), P += V, m = (_ = x[g + 64] * q[p][o + g + w + 64]) - (V = x[63 - g] * q[p][o + g + w + 192]), _ += V, d -= 4, j[e][d + 0] = P + _, j[e][d + 2] = P - _, j[e][d + 1] = R + m, j[e][d + 3] = R - m, R = (P = x[g + 1] * q[p][o + g + w + 1]) - (V = x[126 - g] * q[p][o + g + w + 129]), P += V, m = (_ = x[g + 65] * q[p][o + g + w + 65]) - (V = x[62 - g] * q[p][o + g + w + 193]), _ += V, j[e][d + K1.BLKSIZE_s / 2 + 0] = P + _, j[e][d + K1.BLKSIZE_s / 2 + 2] = P - _, j[e][d + K1.BLKSIZE_s / 2 + 1] = R + m, j[e][d + K1.BLKSIZE_s / 2 + 3] = R - m;
      } while (--z >= 0);
      e1(j[e], d, K1.BLKSIZE_s / 2);
    }
  }, this.fft_long = function(J, j, p, q, o) {
    var e = K1.BLKSIZE / 8 - 1, d = K1.BLKSIZE / 2;
    do {
      var w, z, P, R, _, m = 255 & l1[e];
      z = (w = H[m] * q[p][o + m]) - (_ = H[m + 512] * q[p][o + m + 512]), w += _, R = (P = H[m + 256] * q[p][o + m + 256]) - (_ = H[m + 768] * q[p][o + m + 768]), P += _, j[(d -= 4) + 0] = w + P, j[d + 2] = w - P, j[d + 1] = z + R, j[d + 3] = z - R, z = (w = H[m + 1] * q[p][o + m + 1]) - (_ = H[m + 513] * q[p][o + m + 513]), w += _, R = (P = H[m + 257] * q[p][o + m + 257]) - (_ = H[m + 769] * q[p][o + m + 769]), P += _, j[d + K1.BLKSIZE / 2 + 0] = w + P, j[d + K1.BLKSIZE / 2 + 2] = w - P, j[d + K1.BLKSIZE / 2 + 1] = z + R, j[d + K1.BLKSIZE / 2 + 3] = z - R;
    } while (--e >= 0);
    e1(j, d, K1.BLKSIZE / 2);
  }, this.init_fft = function(J) {
    for (var j = 0; j < K1.BLKSIZE; j++)
      H[j] = 0.42 - 0.5 * Math.cos(2 * Math.PI * (j + 0.5) / K1.BLKSIZE) + 0.08 * Math.cos(4 * Math.PI * (j + 0.5) / K1.BLKSIZE);
    for (j = 0; j < K1.BLKSIZE_s / 2; j++)
      x[j] = 0.5 * (1 - Math.cos(2 * Math.PI * (j + 0.5) / K1.BLKSIZE_s));
  };
}, M0 = C1, X0 = M0.VbrMode, Lt = M0.Float, q0 = M0.ShortBlock, a0 = M0.Util, R2 = M0.Arrays, Q1 = M0.new_float, _0 = M0.new_float_n, I0 = M0.new_int, E1 = M0.assert, M2 = A2, s1 = z1(), w2 = function() {
  var H = W0, x = new M2(), O = 2.302585092994046, e1 = 1 / 217621504 / (s1.BLKSIZE / 2), l1 = 0.3, J = 21, j = 0.2302585093;
  function p(t, s) {
    for (var r = 0, l = 0; l < s1.BLKSIZE / 2; ++l)
      r += t[l] * s.ATH.eql_w[l];
    return r *= e1;
  }
  function q(t, s, r, l, f, b, A, T, M, k, K) {
    var N = t.internal_flags;
    if (M < 2)
      x.fft_long(N, l[f], M, k, K), x.fft_short(N, b[A], M, k, K);
    else if (M == 2) {
      for (var a1 = s1.BLKSIZE - 1; a1 >= 0; --a1) {
        var C = l[f + 0][a1], f1 = l[f + 1][a1];
        l[f + 0][a1] = (C + f1) * a0.SQRT2 * 0.5, l[f + 1][a1] = (C - f1) * a0.SQRT2 * 0.5;
      }
      for (var m1 = 2; m1 >= 0; --m1)
        for (a1 = s1.BLKSIZE_s - 1; a1 >= 0; --a1)
          C = b[A + 0][m1][a1], f1 = b[A + 1][m1][a1], b[A + 0][m1][a1] = (C + f1) * a0.SQRT2 * 0.5, b[A + 1][m1][a1] = (C - f1) * a0.SQRT2 * 0.5;
    }
    for (s[0] = l[f + 0][0], s[0] *= s[0], a1 = s1.BLKSIZE / 2 - 1; a1 >= 0; --a1) {
      var u1 = l[f + 0][s1.BLKSIZE / 2 - a1], h1 = l[f + 0][s1.BLKSIZE / 2 + a1];
      s[s1.BLKSIZE / 2 - a1] = 0.5 * (u1 * u1 + h1 * h1);
    }
    for (m1 = 2; m1 >= 0; --m1)
      for (r[m1][0] = b[A + 0][m1][0], r[m1][0] *= r[m1][0], a1 = s1.BLKSIZE_s / 2 - 1; a1 >= 0; --a1)
        u1 = b[A + 0][m1][s1.BLKSIZE_s / 2 - a1], h1 = b[A + 0][m1][s1.BLKSIZE_s / 2 + a1], r[m1][s1.BLKSIZE_s / 2 - a1] = 0.5 * (u1 * u1 + h1 * h1);
    var F = 0;
    for (a1 = 11; a1 < s1.HBLKSIZE; a1++)
      F += s[a1];
    if (N.tot_ener[M] = F, t.analysis) {
      for (a1 = 0; a1 < s1.HBLKSIZE; a1++)
        N.pinfo.energy[T][M][a1] = N.pinfo.energy_save[M][a1], N.pinfo.energy_save[M][a1] = s[a1];
      N.pinfo.pe[T][M] = N.pe[M];
    }
    t.athaa_loudapprox == 2 && M < 2 && (N.loudness_sq[T][M] = N.loudness_sq_save[M], N.loudness_sq_save[M] = p(s, N));
  }
  var o, e, d, w = [1, 0.79433, 0.63096, 0.63096, 0.63096, 0.63096, 0.63096, 0.25119, 0.11749], z = [3.3246 * 3.3246, 3.23837 * 3.23837, 9.9500500969, 9.0247369744, 8.1854926609, 7.0440875649, 2.46209 * 2.46209, 2.284 * 2.284, 4.4892710641, 1.96552 * 1.96552, 1.82335 * 1.82335, 1.69146 * 1.69146, 2.4621061921, 2.1508568964, 1.37074 * 1.37074, 1.31036 * 1.31036, 1.5691069696, 1.4555939904, 1.16203 * 1.16203, 1.2715945225, 1.09428 * 1.09428, 1.0659 * 1.0659, 1.0779838276, 1.0382591025, 1], P = [1.7782755904, 1.35879 * 1.35879, 1.38454 * 1.38454, 1.39497 * 1.39497, 1.40548 * 1.40548, 1.3537 * 1.3537, 1.6999465924, 1.22321 * 1.22321, 1.3169398564, 1], R = [5.5396212496, 2.29259 * 2.29259, 4.9868695969, 2.12675 * 2.12675, 2.02545 * 2.02545, 1.87894 * 1.87894, 1.74303 * 1.74303, 1.61695 * 1.61695, 2.2499700001, 1.39148 * 1.39148, 1.29083 * 1.29083, 1.19746 * 1.19746, 1.2339655056, 1.0779838276];
  function _(t, s, r, l, f, b) {
    var A;
    if (s > t) {
      if (!(s < t * e))
        return t + s;
      A = s / t;
    } else {
      if (t >= s * e)
        return t + s;
      A = t / s;
    }
    if (t += s, l + 3 <= 6) {
      if (A >= o)
        return t;
      var T = 0 | a0.FAST_LOG10_X(A, 16);
      return t * P[T];
    }
    var M, k;
    return T = 0 | a0.FAST_LOG10_X(A, 16), s = b != 0 ? f.ATH.cb_s[r] * f.ATH.adjust : f.ATH.cb_l[r] * f.ATH.adjust, t < d * s ? t > s ? (M = 1, T <= 13 && (M = R[T]), k = a0.FAST_LOG10_X(t / s, 10 / 15), t * ((z[T] - M) * k + M)) : T > 13 ? t : t * R[T] : t * z[T];
  }
  var m = [1.7782755904, 1.35879 * 1.35879, 1.38454 * 1.38454, 1.39497 * 1.39497, 1.40548 * 1.40548, 1.3537 * 1.3537, 1.6999465924, 1.22321 * 1.22321, 1.3169398564, 1];
  function V(t, s, r) {
    var l;
    if (t < 0 && (t = 0), s < 0 && (s = 0), t <= 0)
      return s;
    if (s <= 0)
      return t;
    if (l = s > t ? s / t : t / s, -2 <= r && r <= 2) {
      if (l >= o)
        return t + s;
      var f = 0 | a0.FAST_LOG10_X(l, 16);
      return (t + s) * m[f];
    }
    return l < e ? t + s : (t < s && (t = s), t);
  }
  function g(t, s, r, l, f) {
    var b, A, T = 0, M = 0;
    for (b = A = 0; b < s1.SBMAX_s; ++A, ++b) {
      for (var k = t.bo_s[b], K = t.npart_s, N = k < K ? k : K; A < N; )
        E1(s[A] >= 0), E1(r[A] >= 0), T += s[A], M += r[A], A++;
      if (t.en[l].s[b][f] = T, t.thm[l].s[b][f] = M, A >= K) {
        ++b;
        break;
      }
      E1(s[A] >= 0), E1(r[A] >= 0);
      var a1 = t.PSY.bo_s_weight[b], C = 1 - a1;
      T = a1 * s[A], M = a1 * r[A], t.en[l].s[b][f] += T, t.thm[l].s[b][f] += M, T = C * s[A], M = C * r[A];
    }
    for (; b < s1.SBMAX_s; ++b)
      t.en[l].s[b][f] = 0, t.thm[l].s[b][f] = 0;
  }
  function W(t, s, r, l) {
    var f, b, A = 0, T = 0;
    for (f = b = 0; f < s1.SBMAX_l; ++b, ++f) {
      for (var M = t.bo_l[f], k = t.npart_l, K = M < k ? M : k; b < K; )
        E1(s[b] >= 0), E1(r[b] >= 0), A += s[b], T += r[b], b++;
      if (t.en[l].l[f] = A, t.thm[l].l[f] = T, b >= k) {
        ++f;
        break;
      }
      E1(s[b] >= 0), E1(r[b] >= 0);
      var N = t.PSY.bo_l_weight[f], a1 = 1 - N;
      A = N * s[b], T = N * r[b], t.en[l].l[f] += A, t.thm[l].l[f] += T, A = a1 * s[b], T = a1 * r[b];
    }
    for (; f < s1.SBMAX_l; ++f)
      t.en[l].l[f] = 0, t.thm[l].l[f] = 0;
  }
  function Y(t, s, r, l, f, b) {
    var A, T, M = t.internal_flags;
    for (T = A = 0; T < M.npart_s; ++T) {
      for (var k = 0, K = M.numlines_s[T], N = 0; N < K; ++N, ++A)
        k += s[b][A];
      r[T] = k;
    }
    for (E1(T == M.npart_s), A = T = 0; T < M.npart_s; T++) {
      var a1 = M.s3ind_s[T][0], C = M.s3_ss[A++] * r[a1];
      for (++a1; a1 <= M.s3ind_s[T][1]; )
        C += M.s3_ss[A] * r[a1], ++A, ++a1;
      var f1 = 2 * M.nb_s1[f][T];
      if (l[T] = Math.min(C, f1), M.blocktype_old[1 & f] == s1.SHORT_TYPE) {
        f1 = 16 * M.nb_s2[f][T];
        var m1 = l[T];
        l[T] = Math.min(f1, m1);
      }
      M.nb_s2[f][T] = M.nb_s1[f][T], M.nb_s1[f][T] = C, E1(l[T] >= 0);
    }
    for (; T <= s1.CBANDS; ++T)
      r[T] = 0, l[T] = 0;
  }
  function i1(t, s, r) {
    return r >= 1 ? t : r <= 0 ? s : s > 0 ? Math.pow(t / s, r) * s : 0;
  }
  var t1 = [11.8, 13.6, 17.2, 32, 46.5, 51.3, 57.5, 67.1, 71.5, 84.6, 97.6, 130];
  function n1(t, s) {
    for (var r = 309.07, l = 0; l < s1.SBMAX_s - 1; l++)
      for (var f = 0; f < 3; f++) {
        var b = t.thm.s[l][f];
        if (b > 0) {
          var A = b * s, T = t.en.s[l][f];
          T > A && (r += T > 1e10 * A ? t1[l] * (10 * O) : t1[l] * a0.FAST_LOG10(T / A));
        }
      }
    return r;
  }
  var r1 = [6.8, 5.8, 5.8, 6.4, 6.5, 9.9, 12.1, 14.4, 15, 18.9, 21.6, 26.9, 34.2, 40.2, 46.8, 56.5, 60.7, 73.9, 85.7, 93.4, 126.1];
  function G(t, s) {
    for (var r = 281.0575, l = 0; l < s1.SBMAX_l - 1; l++) {
      var f = t.thm.l[l];
      if (f > 0) {
        var b = f * s, A = t.en.l[l];
        A > b && (r += A > 1e10 * b ? r1[l] * (10 * O) : r1[l] * a0.FAST_LOG10(A / b));
      }
    }
    return r;
  }
  function _1(t, s, r, l, f) {
    var b, A;
    for (b = A = 0; b < t.npart_l; ++b) {
      var T, M = 0, k = 0;
      for (T = 0; T < t.numlines_l[b]; ++T, ++A) {
        var K = s[A];
        M += K, k < K && (k = K);
      }
      r[b] = M, l[b] = k, f[b] = M * t.rnumlines_l[b], E1(t.rnumlines_l[b] >= 0), E1(r[b] >= 0), E1(l[b] >= 0), E1(f[b] >= 0);
    }
  }
  function c(t, s, r, l) {
    var f = w.length - 1, b = 0, A = r[b] + r[b + 1];
    for (A > 0 ? ((T = s[b]) < s[b + 1] && (T = s[b + 1]), E1(t.numlines_l[b] + t.numlines_l[b + 1] - 1 > 0), (M = 0 | (A = 20 * (2 * T - A) / (A * (t.numlines_l[b] + t.numlines_l[b + 1] - 1)))) > f && (M = f), l[b] = M) : l[b] = 0, b = 1; b < t.npart_l - 1; b++) {
      var T, M;
      (A = r[b - 1] + r[b] + r[b + 1]) > 0 ? ((T = s[b - 1]) < s[b] && (T = s[b]), T < s[b + 1] && (T = s[b + 1]), E1(t.numlines_l[b - 1] + t.numlines_l[b] + t.numlines_l[b + 1] - 1 > 0), (M = 0 | (A = 20 * (3 * T - A) / (A * (t.numlines_l[b - 1] + t.numlines_l[b] + t.numlines_l[b + 1] - 1)))) > f && (M = f), l[b] = M) : l[b] = 0;
    }
    E1(b == t.npart_l - 1), (A = r[b - 1] + r[b]) > 0 ? ((T = s[b - 1]) < s[b] && (T = s[b]), E1(t.numlines_l[b - 1] + t.numlines_l[b] - 1 > 0), (M = 0 | (A = 20 * (2 * T - A) / (A * (t.numlines_l[b - 1] + t.numlines_l[b] - 1)))) > f && (M = f), l[b] = M) : l[b] = 0, E1(b == t.npart_l - 1);
  }
  var S = [-1730326e-23, -0.01703172, -1349528e-23, 0.0418072, -673278e-22, -0.0876324, -30835e-21, 0.1863476, -1104424e-22, -0.627638];
  function E(t, s, r, l, f, b, A, T) {
    var M = t.internal_flags;
    if (l < 2)
      x.fft_long(M, A[T], l, s, r);
    else if (l == 2)
      for (var k = s1.BLKSIZE - 1; k >= 0; --k) {
        var K = A[T + 0][k], N = A[T + 1][k];
        A[T + 0][k] = (K + N) * a0.SQRT2 * 0.5, A[T + 1][k] = (K - N) * a0.SQRT2 * 0.5;
      }
    for (b[0] = A[T + 0][0], b[0] *= b[0], k = s1.BLKSIZE / 2 - 1; k >= 0; --k) {
      var a1 = A[T + 0][s1.BLKSIZE / 2 - k], C = A[T + 0][s1.BLKSIZE / 2 + k];
      b[s1.BLKSIZE / 2 - k] = 0.5 * (a1 * a1 + C * C);
    }
    var f1 = 0;
    for (k = 11; k < s1.HBLKSIZE; k++)
      f1 += b[k];
    if (M.tot_ener[l] = f1, t.analysis) {
      for (k = 0; k < s1.HBLKSIZE; k++)
        M.pinfo.energy[f][l][k] = M.pinfo.energy_save[l][k], M.pinfo.energy_save[l][k] = b[k];
      M.pinfo.pe[f][l] = M.pe[l];
    }
  }
  function h(t, s, r, l, f, b, A, T) {
    var M = t.internal_flags;
    if (f == 0 && l < 2 && x.fft_short(M, A[T], l, s, r), l == 2)
      for (var k = s1.BLKSIZE_s - 1; k >= 0; --k) {
        var K = A[T + 0][f][k], N = A[T + 1][f][k];
        A[T + 0][f][k] = (K + N) * a0.SQRT2 * 0.5, A[T + 1][f][k] = (K - N) * a0.SQRT2 * 0.5;
      }
    for (b[f][0] = A[T + 0][f][0], b[f][0] *= b[f][0], k = s1.BLKSIZE_s / 2 - 1; k >= 0; --k) {
      var a1 = A[T + 0][f][s1.BLKSIZE_s / 2 - k], C = A[T + 0][f][s1.BLKSIZE_s / 2 + k];
      b[f][s1.BLKSIZE_s / 2 - k] = 0.5 * (a1 * a1 + C * C);
    }
  }
  function U(t, s, r, l) {
    var f = t.internal_flags;
    t.athaa_loudapprox == 2 && r < 2 && (f.loudness_sq[s][r] = f.loudness_sq_save[r], f.loudness_sq_save[r] = p(l, f));
  }
  this.L3psycho_anal_ns = function(t, s, r, l, f, b, A, T, M, k) {
    var K, N, a1, C, f1, m1, u1, h1, F, b1, o1 = t.internal_flags, c1 = _0([2, s1.BLKSIZE]), Z = _0([2, 3, s1.BLKSIZE_s]), T1 = Q1(s1.CBANDS + 1), A1 = Q1(s1.CBANDS + 1), R1 = Q1(s1.CBANDS + 2), B1 = I0(2), P1 = I0(2), I1 = _0([2, 576]), d1 = I0(s1.CBANDS + 2), O1 = I0(s1.CBANDS + 2);
    for (R2.fill(O1, 0), K = o1.channels_out, t.mode == H.JOINT_STEREO && (K = 4), F = t.VBR == X0.vbr_off ? o1.ResvMax == 0 ? 0 : o1.ResvSize / o1.ResvMax * 0.5 : t.VBR == X0.vbr_rh || t.VBR == X0.vbr_mtrh || t.VBR == X0.vbr_mt ? 0.6 : 1, N = 0; N < o1.channels_out; N++) {
      var L1 = s[N], X1 = r + 576 - 350 - J + 192;
      for (C = 0; C < 576; C++) {
        var $1, t0;
        for ($1 = L1[X1 + C + 10], t0 = 0, f1 = 0; f1 < 9; f1 += 2)
          $1 += S[f1] * (L1[X1 + C + f1] + L1[X1 + C + J - f1]), t0 += S[f1 + 1] * (L1[X1 + C + f1 + 1] + L1[X1 + C + J - f1 - 1]);
        I1[N][C] = $1 + t0;
      }
      f[l][N].en.assign(o1.en[N]), f[l][N].thm.assign(o1.thm[N]), K > 2 && (b[l][N].en.assign(o1.en[N + 2]), b[l][N].thm.assign(o1.thm[N + 2]));
    }
    for (N = 0; N < K; N++) {
      var w0, x1 = Q1(12), D1 = [0, 0, 0, 0], e0 = Q1(12), K0 = 1, z0 = Q1(s1.CBANDS), Y1 = Q1(s1.CBANDS), N1 = [0, 0, 0, 0], d0 = Q1(s1.HBLKSIZE), Z1 = _0([3, s1.HBLKSIZE_s]);
      for (E1(o1.npart_s <= s1.CBANDS), E1(o1.npart_l <= s1.CBANDS), C = 0; C < 3; C++)
        x1[C] = o1.nsPsy.last_en_subshort[N][C + 6], E1(o1.nsPsy.last_en_subshort[N][C + 4] > 0), e0[C] = x1[C] / o1.nsPsy.last_en_subshort[N][C + 4], D1[0] += x1[C];
      if (N == 2)
        for (C = 0; C < 576; C++) {
          var N0, D0;
          N0 = I1[0][C], D0 = I1[1][C], I1[0][C] = N0 + D0, I1[1][C] = N0 - D0;
        }
      var M1 = I1[1 & N], o0 = 0;
      for (C = 0; C < 9; C++) {
        for (var v1 = o0 + 64, U1 = 1; o0 < v1; o0++)
          U1 < Math.abs(M1[o0]) && (U1 = Math.abs(M1[o0]));
        o1.nsPsy.last_en_subshort[N][C] = x1[C + 3] = U1, D1[1 + C / 3] += U1, U1 > x1[C + 3 - 2] ? (E1(x1[C + 3 - 2] > 0), U1 /= x1[C + 3 - 2]) : U1 = x1[C + 3 - 2] > 10 * U1 ? x1[C + 3 - 2] / (10 * U1) : 0, e0[C + 3] = U1;
      }
      if (t.analysis) {
        var x0 = e0[0];
        for (C = 1; C < 12; C++)
          x0 < e0[C] && (x0 = e0[C]);
        o1.pinfo.ers[l][N] = o1.pinfo.ers_save[N], o1.pinfo.ers_save[N] = x0;
      }
      for (w0 = N == 3 ? o1.nsPsy.attackthre_s : o1.nsPsy.attackthre, C = 0; C < 12; C++)
        N1[C / 3] == 0 && e0[C] > w0 && (N1[C / 3] = C % 3 + 1);
      for (C = 1; C < 4; C++) {
        var J1;
        D1[C - 1] > D1[C] ? (E1(D1[C] > 0), J1 = D1[C - 1] / D1[C]) : (E1(D1[C - 1] > 0), J1 = D1[C] / D1[C - 1]), J1 < 1.7 && (N1[C] = 0, C == 1 && (N1[0] = 0));
      }
      for (N1[0] != 0 && o1.nsPsy.lastAttacks[N] != 0 && (N1[0] = 0), o1.nsPsy.lastAttacks[N] != 3 && N1[0] + N1[1] + N1[2] + N1[3] == 0 || (K0 = 0, N1[1] != 0 && N1[0] != 0 && (N1[1] = 0), N1[2] != 0 && N1[1] != 0 && (N1[2] = 0), N1[3] != 0 && N1[2] != 0 && (N1[3] = 0)), N < 2 ? P1[N] = K0 : K0 == 0 && (P1[0] = P1[1] = 0), M[N] = o1.tot_ener[N], q(t, d0, Z1, c1, 1 & N, Z, 1 & N, l, N, s, r), _1(o1, d0, T1, z0, Y1), c(o1, z0, Y1, d1), h1 = 0; h1 < 3; h1++) {
        var c0, V1;
        for (Y(t, Z1, A1, R1, N, h1), g(o1, A1, R1, N, h1), u1 = 0; u1 < s1.SBMAX_s; u1++) {
          if (V1 = o1.thm[N].s[u1][h1], V1 *= 0.8, N1[h1] >= 2 || N1[h1 + 1] == 1) {
            var h0 = h1 != 0 ? h1 - 1 : 2;
            U1 = i1(o1.thm[N].s[u1][h0], V1, 0.6 * F), V1 = Math.min(V1, U1);
          }
          N1[h1] == 1 ? (h0 = h1 != 0 ? h1 - 1 : 2, U1 = i1(o1.thm[N].s[u1][h0], V1, l1 * F), V1 = Math.min(V1, U1)) : (h1 != 0 && N1[h1 - 1] == 3 || h1 == 0 && o1.nsPsy.lastAttacks[N] == 3) && (h0 = h1 != 2 ? h1 + 1 : 0, U1 = i1(o1.thm[N].s[u1][h0], V1, l1 * F), V1 = Math.min(V1, U1)), c0 = x1[3 * h1 + 3] + x1[3 * h1 + 4] + x1[3 * h1 + 5], 6 * x1[3 * h1 + 5] < c0 && (V1 *= 0.5, 6 * x1[3 * h1 + 4] < c0 && (V1 *= 0.5)), o1.thm[N].s[u1][h1] = V1;
        }
      }
      for (o1.nsPsy.lastAttacks[N] = N1[2], m1 = 0, a1 = 0; a1 < o1.npart_l; a1++) {
        for (var b0 = o1.s3ind[a1][0], v0 = T1[b0] * w[d1[b0]], g0 = o1.s3_ll[m1++] * v0; ++b0 <= o1.s3ind[a1][1]; )
          v0 = T1[b0] * w[d1[b0]], g0 = _(g0, o1.s3_ll[m1++] * v0, b0, b0 - a1, o1, 0);
        g0 *= 0.158489319246111, o1.blocktype_old[1 & N] == s1.SHORT_TYPE ? R1[a1] = g0 : R1[a1] = i1(Math.min(g0, Math.min(2 * o1.nb_1[N][a1], 16 * o1.nb_2[N][a1])), g0, F), o1.nb_2[N][a1] = o1.nb_1[N][a1], o1.nb_1[N][a1] = g0;
      }
      for (; a1 <= s1.CBANDS; ++a1)
        T1[a1] = 0, R1[a1] = 0;
      W(o1, T1, R1, N);
    }
    for (t.mode != H.STEREO && t.mode != H.JOINT_STEREO || t.interChRatio > 0 && function(g1, w1) {
      var q1 = g1.internal_flags;
      if (q1.channels_out > 1) {
        for (var H1 = 0; H1 < s1.SBMAX_l; H1++) {
          var F1 = q1.thm[0].l[H1], S1 = q1.thm[1].l[H1];
          q1.thm[0].l[H1] += S1 * w1, q1.thm[1].l[H1] += F1 * w1;
        }
        for (H1 = 0; H1 < s1.SBMAX_s; H1++)
          for (var W1 = 0; W1 < 3; W1++)
            F1 = q1.thm[0].s[H1][W1], S1 = q1.thm[1].s[H1][W1], q1.thm[0].s[H1][W1] += S1 * w1, q1.thm[1].s[H1][W1] += F1 * w1;
      }
    }(t, t.interChRatio), t.mode == H.JOINT_STEREO && (function(g1) {
      for (var w1 = 0; w1 < s1.SBMAX_l; w1++)
        if (!(g1.thm[0].l[w1] > 1.58 * g1.thm[1].l[w1] || g1.thm[1].l[w1] > 1.58 * g1.thm[0].l[w1])) {
          var q1 = g1.mld_l[w1] * g1.en[3].l[w1], H1 = Math.max(g1.thm[2].l[w1], Math.min(g1.thm[3].l[w1], q1));
          q1 = g1.mld_l[w1] * g1.en[2].l[w1];
          var F1 = Math.max(g1.thm[3].l[w1], Math.min(g1.thm[2].l[w1], q1));
          g1.thm[2].l[w1] = H1, g1.thm[3].l[w1] = F1;
        }
      for (w1 = 0; w1 < s1.SBMAX_s; w1++)
        for (var S1 = 0; S1 < 3; S1++)
          g1.thm[0].s[w1][S1] > 1.58 * g1.thm[1].s[w1][S1] || g1.thm[1].s[w1][S1] > 1.58 * g1.thm[0].s[w1][S1] || (q1 = g1.mld_s[w1] * g1.en[3].s[w1][S1], H1 = Math.max(g1.thm[2].s[w1][S1], Math.min(g1.thm[3].s[w1][S1], q1)), q1 = g1.mld_s[w1] * g1.en[2].s[w1][S1], F1 = Math.max(g1.thm[3].s[w1][S1], Math.min(g1.thm[2].s[w1][S1], q1)), g1.thm[2].s[w1][S1] = H1, g1.thm[3].s[w1][S1] = F1);
    }(o1), b1 = t.msfix, Math.abs(b1) > 0 && function(g1, w1, q1) {
      var H1 = w1, F1 = Math.pow(10, q1);
      w1 *= 2, H1 *= 2;
      for (var S1 = 0; S1 < s1.SBMAX_l; S1++)
        m0 = g1.ATH.cb_l[g1.bm_l[S1]] * F1, (J0 = Math.min(Math.max(g1.thm[0].l[S1], m0), Math.max(g1.thm[1].l[S1], m0))) * w1 < (B0 = Math.max(g1.thm[2].l[S1], m0)) + (T0 = Math.max(g1.thm[3].l[S1], m0)) && (B0 *= $0 = J0 * H1 / (B0 + T0), T0 *= $0), g1.thm[2].l[S1] = Math.min(B0, g1.thm[2].l[S1]), g1.thm[3].l[S1] = Math.min(T0, g1.thm[3].l[S1]);
      for (F1 *= s1.BLKSIZE_s / s1.BLKSIZE, S1 = 0; S1 < s1.SBMAX_s; S1++)
        for (var W1 = 0; W1 < 3; W1++) {
          var J0, B0, T0, m0, $0;
          m0 = g1.ATH.cb_s[g1.bm_s[S1]] * F1, (J0 = Math.min(Math.max(g1.thm[0].s[S1][W1], m0), Math.max(g1.thm[1].s[S1][W1], m0))) * w1 < (B0 = Math.max(g1.thm[2].s[S1][W1], m0)) + (T0 = Math.max(g1.thm[3].s[S1][W1], m0)) && (B0 *= $0 = J0 * w1 / (B0 + T0), T0 *= $0), g1.thm[2].s[S1][W1] = Math.min(g1.thm[2].s[S1][W1], B0), g1.thm[3].s[S1][W1] = Math.min(g1.thm[3].s[S1][W1], T0);
        }
    }(o1, b1, t.ATHlower * o1.ATH.adjust)), function(g1, w1, q1, H1) {
      var F1 = g1.internal_flags;
      g1.short_blocks != q0.short_block_coupled || w1[0] != 0 && w1[1] != 0 || (w1[0] = w1[1] = 0);
      for (var S1 = 0; S1 < F1.channels_out; S1++)
        H1[S1] = s1.NORM_TYPE, g1.short_blocks == q0.short_block_dispensed && (w1[S1] = 1), g1.short_blocks == q0.short_block_forced && (w1[S1] = 0), w1[S1] != 0 ? (E1(F1.blocktype_old[S1] != s1.START_TYPE), F1.blocktype_old[S1] == s1.SHORT_TYPE && (H1[S1] = s1.STOP_TYPE)) : (H1[S1] = s1.SHORT_TYPE, F1.blocktype_old[S1] == s1.NORM_TYPE && (F1.blocktype_old[S1] = s1.START_TYPE), F1.blocktype_old[S1] == s1.STOP_TYPE && (F1.blocktype_old[S1] = s1.SHORT_TYPE)), q1[S1] = F1.blocktype_old[S1], F1.blocktype_old[S1] = H1[S1];
    }(t, P1, k, B1), N = 0; N < K; N++) {
      var S0, y0, k0, P0 = 0;
      N > 1 ? (S0 = T, P0 = -2, y0 = s1.NORM_TYPE, k[0] != s1.SHORT_TYPE && k[1] != s1.SHORT_TYPE || (y0 = s1.SHORT_TYPE), k0 = b[l][N - 2]) : (S0 = A, P0 = 0, y0 = k[N], k0 = f[l][N]), y0 == s1.SHORT_TYPE ? S0[P0 + N] = n1(k0, o1.masking_lower) : S0[P0 + N] = G(k0, o1.masking_lower), t.analysis && (o1.pinfo.pe[l][N] = S0[P0 + N]);
    }
    return 0;
  };
  var v = [-1730326e-23, -0.01703172, -1349528e-23, 0.0418072, -673278e-22, -0.0876324, -30835e-21, 0.1863476, -1104424e-22, -0.627638];
  function u(t, s, r) {
    if (r == 0)
      for (var l = 0; l < t.npart_s; l++)
        t.nb_s2[s][l] = t.nb_s1[s][l], t.nb_s1[s][l] = 0;
  }
  function i(t, s) {
    for (var r = 0; r < t.npart_l; r++)
      t.nb_2[s][r] = t.nb_1[s][r], t.nb_1[s][r] = 0;
  }
  function a(t, s, r, l, f, b) {
    var A, T, M, k = t.internal_flags, K = new float[s1.CBANDS](), N = Q1(s1.CBANDS), a1 = new int[s1.CBANDS]();
    for (M = T = 0; M < k.npart_s; ++M) {
      var C = 0, f1 = 0, m1 = k.numlines_s[M];
      for (A = 0; A < m1; ++A, ++T) {
        var u1 = s[b][T];
        C += u1, f1 < u1 && (f1 = u1);
      }
      r[M] = C, K[M] = f1, N[M] = C / m1, E1(N[M] >= 0);
    }
    for (E1(M == k.npart_s); M < s1.CBANDS; ++M)
      K[M] = 0, N[M] = 0;
    for (function(A1, R1, B1, P1) {
      var I1 = w.length - 1, d1 = 0, O1 = B1[d1] + B1[d1 + 1];
      for (O1 > 0 ? ((L1 = R1[d1]) < R1[d1 + 1] && (L1 = R1[d1 + 1]), E1(A1.numlines_s[d1] + A1.numlines_s[d1 + 1] - 1 > 0), (X1 = 0 | (O1 = 20 * (2 * L1 - O1) / (O1 * (A1.numlines_s[d1] + A1.numlines_s[d1 + 1] - 1)))) > I1 && (X1 = I1), P1[d1] = X1) : P1[d1] = 0, d1 = 1; d1 < A1.npart_s - 1; d1++) {
        var L1, X1;
        O1 = B1[d1 - 1] + B1[d1] + B1[d1 + 1], E1(d1 + 1 < A1.npart_s), O1 > 0 ? ((L1 = R1[d1 - 1]) < R1[d1] && (L1 = R1[d1]), L1 < R1[d1 + 1] && (L1 = R1[d1 + 1]), E1(A1.numlines_s[d1 - 1] + A1.numlines_s[d1] + A1.numlines_s[d1 + 1] - 1 > 0), (X1 = 0 | (O1 = 20 * (3 * L1 - O1) / (O1 * (A1.numlines_s[d1 - 1] + A1.numlines_s[d1] + A1.numlines_s[d1 + 1] - 1)))) > I1 && (X1 = I1), P1[d1] = X1) : P1[d1] = 0;
      }
      E1(d1 == A1.npart_s - 1), (O1 = B1[d1 - 1] + B1[d1]) > 0 ? ((L1 = R1[d1 - 1]) < R1[d1] && (L1 = R1[d1]), E1(A1.numlines_s[d1 - 1] + A1.numlines_s[d1] - 1 > 0), (X1 = 0 | (O1 = 20 * (2 * L1 - O1) / (O1 * (A1.numlines_s[d1 - 1] + A1.numlines_s[d1] - 1)))) > I1 && (X1 = I1), P1[d1] = X1) : P1[d1] = 0, E1(d1 == A1.npart_s - 1);
    }(k, K, N, a1), T = M = 0; M < k.npart_s; M++) {
      var h1, F, b1, o1, c1, Z = k.s3ind_s[M][0], T1 = k.s3ind_s[M][1];
      for (h1 = a1[Z], F = 1, o1 = k.s3_ss[T] * r[Z] * w[a1[Z]], ++T, ++Z; Z <= T1; )
        h1 += a1[Z], F += 1, o1 = V(o1, b1 = k.s3_ss[T] * r[Z] * w[a1[Z]], Z - M), ++T, ++Z;
      o1 *= c1 = 0.5 * w[h1 = (1 + 2 * h1) / (2 * F)], l[M] = o1, k.nb_s2[f][M] = k.nb_s1[f][M], k.nb_s1[f][M] = o1, b1 = K[M], b1 *= k.minval_s[M], b1 *= c1, l[M] > b1 && (l[M] = b1), k.masking_lower > 1 && (l[M] *= k.masking_lower), l[M] > r[M] && (l[M] = r[M]), k.masking_lower < 1 && (l[M] *= k.masking_lower), E1(l[M] >= 0);
    }
    for (; M < s1.CBANDS; ++M)
      r[M] = 0, l[M] = 0;
  }
  function B(t, s, r, l, f) {
    var b, A = Q1(s1.CBANDS), T = Q1(s1.CBANDS), M = I0(s1.CBANDS + 2);
    _1(t, s, r, A, T), c(t, A, T, M);
    var k = 0;
    for (b = 0; b < t.npart_l; b++) {
      var K, N, a1, C = t.s3ind[b][0], f1 = t.s3ind[b][1], m1 = 0, u1 = 0;
      for (m1 = M[C], u1 += 1, N = t.s3_ll[k] * r[C] * w[M[C]], ++k, ++C; C <= f1; )
        m1 += M[C], u1 += 1, N = V(N, K = t.s3_ll[k] * r[C] * w[M[C]], C - b), ++k, ++C;
      if (N *= a1 = 0.5 * w[m1 = (1 + 2 * m1) / (2 * u1)], t.blocktype_old[1 & f] == s1.SHORT_TYPE) {
        var h1 = 2 * t.nb_1[f][b];
        l[b] = h1 > 0 ? Math.min(N, h1) : Math.min(N, r[b] * l1);
      } else {
        var F = 16 * t.nb_2[f][b], b1 = 2 * t.nb_1[f][b];
        F <= 0 && (F = N), b1 <= 0 && (b1 = N), h1 = t.blocktype_old[1 & f] == s1.NORM_TYPE ? Math.min(b1, F) : b1, l[b] = Math.min(N, h1);
      }
      t.nb_2[f][b] = t.nb_1[f][b], t.nb_1[f][b] = N, K = A[b], K *= t.minval_l[b], K *= a1, l[b] > K && (l[b] = K), t.masking_lower > 1 && (l[b] *= t.masking_lower), l[b] > r[b] && (l[b] = r[b]), t.masking_lower < 1 && (l[b] *= t.masking_lower), E1(l[b] >= 0);
    }
    for (; b < s1.CBANDS; ++b)
      r[b] = 0, l[b] = 0;
  }
  function X(t, s, r, l, f, b, A) {
    for (var T, M, k = 2 * b, K = b > 0 ? Math.pow(10, f) : 1, N = 0; N < A; ++N) {
      var a1 = t[2][N], C = t[3][N], f1 = s[0][N], m1 = s[1][N], u1 = s[2][N], h1 = s[3][N];
      if (f1 <= 1.58 * m1 && m1 <= 1.58 * f1) {
        var F = r[N] * C, b1 = r[N] * a1;
        M = Math.max(u1, Math.min(h1, F)), T = Math.max(h1, Math.min(u1, b1));
      } else
        M = u1, T = h1;
      if (b > 0) {
        var o1, c1, Z = l[N] * K;
        if (o1 = Math.min(Math.max(f1, Z), Math.max(m1, Z)), (c1 = (u1 = Math.max(M, Z)) + (h1 = Math.max(T, Z))) > 0 && o1 * k < c1) {
          var T1 = o1 * k / c1;
          u1 *= T1, h1 *= T1;
        }
        M = Math.min(u1, M), T = Math.min(h1, T);
      }
      M > a1 && (M = a1), T > C && (T = C), s[2][N] = M, s[3][N] = T;
    }
  }
  function n(t, s) {
    var r;
    return (r = t >= 0 ? 27 * -t : t * s) <= -72 ? 0 : Math.exp(r * j);
  }
  function I(t) {
    var s, r, l = 0;
    for (l = 0; n(l, t) > 1e-20; l -= 1)
      ;
    for (f = l, b = 0; Math.abs(b - f) > 1e-12; )
      n(l = (b + f) / 2, t) > 0 ? b = l : f = l;
    s = f;
    var f, b;
    for (l = 0, l = 0; n(l, t) > 1e-20; l += 1)
      ;
    for (f = 0, b = l; Math.abs(b - f) > 1e-12; )
      n(l = (b + f) / 2, t) > 0 ? f = l : b = l;
    r = b;
    var A, T = 0, M = 1e3;
    for (A = 0; A <= M; ++A)
      T += n(l = s + A * (r - s) / M, t);
    return (M + 1) / (T * (r - s));
  }
  function L(t) {
    return t < 0 && (t = 0), t *= 1e-3, 13 * Math.atan(0.76 * t) + 3.5 * Math.atan(t * t / 56.25);
  }
  function Q(t, s, r, l, f, b, A, T, M, k, K, N) {
    var a1, C = Q1(s1.CBANDS + 1), f1 = T / (N > 15 ? 1152 : 384), m1 = I0(s1.HBLKSIZE);
    T /= M;
    var u1 = 0, h1 = 0;
    for (a1 = 0; a1 < s1.CBANDS; a1++) {
      var F;
      for (P1 = L(T * u1), C[a1] = T * u1, F = u1; L(T * F) - P1 < 0.34 && F <= M / 2; F++)
        ;
      for (t[a1] = F - u1, h1 = a1 + 1; u1 < F; )
        E1(u1 < s1.HBLKSIZE), m1[u1++] = a1;
      if (u1 > M / 2) {
        u1 = M / 2, ++a1;
        break;
      }
    }
    E1(a1 < s1.CBANDS), C[a1] = T * u1;
    for (var b1 = 0; b1 < N; b1++) {
      var o1, c1, Z, T1, A1;
      Z = k[b1], T1 = k[b1 + 1], (o1 = 0 | Math.floor(0.5 + K * (Z - 0.5))) < 0 && (o1 = 0), (c1 = 0 | Math.floor(0.5 + K * (T1 - 0.5))) > M / 2 && (c1 = M / 2), r[b1] = (m1[o1] + m1[c1]) / 2, s[b1] = m1[c1];
      var R1 = f1 * T1;
      A[b1] = (R1 - C[s[b1]]) / (C[s[b1] + 1] - C[s[b1]]), A[b1] < 0 ? A[b1] = 0 : A[b1] > 1 && (A[b1] = 1), A1 = L(T * k[b1] * K), A1 = Math.min(A1, 15.5) / 15.5, b[b1] = Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * A1)) - 2.5);
    }
    u1 = 0;
    for (var B1 = 0; B1 < h1; B1++) {
      var P1, I1, d1 = t[B1];
      P1 = L(T * u1), I1 = L(T * (u1 + d1 - 1)), l[B1] = 0.5 * (P1 + I1), P1 = L(T * (u1 - 0.5)), I1 = L(T * (u1 + d1 - 0.5)), f[B1] = I1 - P1, u1 += d1;
    }
    return h1;
  }
  function $(t, s, r, l, f, b) {
    var A, T, M, k, K, N, a1 = _0([s1.CBANDS, s1.CBANDS]), C = 0;
    if (b)
      for (var f1 = 0; f1 < s; f1++)
        for (A = 0; A < s; A++) {
          var m1 = (T = r[f1] - r[A], M = void 0, k = void 0, K = void 0, N = void 0, M = T, k = (M *= M >= 0 ? 3 : 1.5) >= 0.5 && M <= 2.5 ? 8 * ((N = M - 0.5) * N - 2 * N) : 0, ((K = 15.811389 + 7.5 * (M += 0.474) - 17.5 * Math.sqrt(1 + M * M)) <= -60 ? 0 : (M = Math.exp((k + K) * j), M /= 0.6609193)) * l[A]);
          a1[f1][A] = m1 * f[f1];
        }
    else
      for (A = 0; A < s; A++) {
        var u1 = 15 + Math.min(21 / r[A], 12), h1 = I(u1);
        for (f1 = 0; f1 < s; f1++)
          m1 = h1 * n(r[f1] - r[A], u1) * l[A], a1[f1][A] = m1 * f[f1];
      }
    for (f1 = 0; f1 < s; f1++) {
      for (A = 0; A < s && !(a1[f1][A] > 0); A++)
        ;
      for (t[f1][0] = A, A = s - 1; A > 0 && !(a1[f1][A] > 0); A--)
        ;
      t[f1][1] = A, C += t[f1][1] - t[f1][0] + 1;
    }
    var F = Q1(C), b1 = 0;
    for (f1 = 0; f1 < s; f1++)
      for (A = t[f1][0]; A <= t[f1][1]; A++)
        F[b1++] = a1[f1][A];
    return F;
  }
  function y(t) {
    var s = L(t);
    return s = Math.min(s, 15.5) / 15.5, Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * s)) - 2.5);
  }
  function D(t, s) {
    return t < -0.3 && (t = 3410), t /= 1e3, t = Math.max(0.1, t), 3.64 * Math.pow(t, -0.8) - 6.8 * Math.exp(-0.6 * Math.pow(t - 3.4, 2)) + 6 * Math.exp(-0.15 * Math.pow(t - 8.7, 2)) + 1e-3 * (0.6 + 0.04 * s) * Math.pow(t, 4);
  }
  this.L3psycho_anal_vbr = function(t, s, r, l, f, b, A, T, M, k) {
    var K = t.internal_flags, N = Q1(s1.HBLKSIZE), a1 = _0([3, s1.HBLKSIZE_s]), C = _0([2, s1.BLKSIZE]), f1 = _0([2, 3, s1.BLKSIZE_s]), m1 = _0([4, s1.CBANDS]), u1 = _0([4, s1.CBANDS]), h1 = _0([4, 3]), F = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], b1 = I0(2), o1 = t.mode == H.JOINT_STEREO ? 4 : K.channels_out;
    (function($1, t0, w0, x1, D1, e0, K0, z0, Y1, N1) {
      for (var d0 = _0([2, 576]), Z1 = $1.internal_flags, N0 = Z1.channels_out, D0 = $1.mode == H.JOINT_STEREO ? 4 : N0, M1 = 0; M1 < N0; M1++) {
        firbuf = t0[M1];
        for (var o0 = w0 + 576 - 350 - J + 192, v1 = 0; v1 < 576; v1++) {
          var U1, x0;
          U1 = firbuf[o0 + v1 + 10], x0 = 0;
          for (var J1 = 0; J1 < 9; J1 += 2)
            U1 += v[J1] * (firbuf[o0 + v1 + J1] + firbuf[o0 + v1 + J - J1]), x0 += v[J1 + 1] * (firbuf[o0 + v1 + J1 + 1] + firbuf[o0 + v1 + J - J1 - 1]);
          d0[M1][v1] = U1 + x0;
        }
        D1[x1][M1].en.assign(Z1.en[M1]), D1[x1][M1].thm.assign(Z1.thm[M1]), D0 > 2 && (e0[x1][M1].en.assign(Z1.en[M1 + 2]), e0[x1][M1].thm.assign(Z1.thm[M1 + 2]));
      }
      for (M1 = 0; M1 < D0; M1++) {
        var c0 = Q1(12), V1 = Q1(12), h0 = [0, 0, 0, 0], b0 = d0[1 & M1], v0 = 0, g0 = M1 == 3 ? Z1.nsPsy.attackthre_s : Z1.nsPsy.attackthre, S0 = 1;
        if (M1 == 2)
          for (v1 = 0, J1 = 576; J1 > 0; ++v1, --J1) {
            var y0 = d0[0][v1], k0 = d0[1][v1];
            d0[0][v1] = y0 + k0, d0[1][v1] = y0 - k0;
          }
        for (v1 = 0; v1 < 3; v1++)
          V1[v1] = Z1.nsPsy.last_en_subshort[M1][v1 + 6], E1(Z1.nsPsy.last_en_subshort[M1][v1 + 4] > 0), c0[v1] = V1[v1] / Z1.nsPsy.last_en_subshort[M1][v1 + 4], h0[0] += V1[v1];
        for (v1 = 0; v1 < 9; v1++) {
          for (var P0 = v0 + 64, g1 = 1; v0 < P0; v0++)
            g1 < Math.abs(b0[v0]) && (g1 = Math.abs(b0[v0]));
          Z1.nsPsy.last_en_subshort[M1][v1] = V1[v1 + 3] = g1, h0[1 + v1 / 3] += g1, g1 > V1[v1 + 3 - 2] ? (E1(V1[v1 + 3 - 2] > 0), g1 /= V1[v1 + 3 - 2]) : g1 = V1[v1 + 3 - 2] > 10 * g1 ? V1[v1 + 3 - 2] / (10 * g1) : 0, c0[v1 + 3] = g1;
        }
        for (v1 = 0; v1 < 3; ++v1) {
          var w1 = V1[3 * v1 + 3] + V1[3 * v1 + 4] + V1[3 * v1 + 5], q1 = 1;
          6 * V1[3 * v1 + 5] < w1 && (q1 *= 0.5, 6 * V1[3 * v1 + 4] < w1 && (q1 *= 0.5)), z0[M1][v1] = q1;
        }
        if ($1.analysis) {
          var H1 = c0[0];
          for (v1 = 1; v1 < 12; v1++)
            H1 < c0[v1] && (H1 = c0[v1]);
          Z1.pinfo.ers[x1][M1] = Z1.pinfo.ers_save[M1], Z1.pinfo.ers_save[M1] = H1;
        }
        for (v1 = 0; v1 < 12; v1++)
          Y1[M1][v1 / 3] == 0 && c0[v1] > g0 && (Y1[M1][v1 / 3] = v1 % 3 + 1);
        for (v1 = 1; v1 < 4; v1++) {
          var F1 = h0[v1 - 1], S1 = h0[v1];
          Math.max(F1, S1) < 4e4 && F1 < 1.7 * S1 && S1 < 1.7 * F1 && (v1 == 1 && Y1[M1][0] <= Y1[M1][v1] && (Y1[M1][0] = 0), Y1[M1][v1] = 0);
        }
        Y1[M1][0] <= Z1.nsPsy.lastAttacks[M1] && (Y1[M1][0] = 0), Z1.nsPsy.lastAttacks[M1] != 3 && Y1[M1][0] + Y1[M1][1] + Y1[M1][2] + Y1[M1][3] == 0 || (S0 = 0, Y1[M1][1] != 0 && Y1[M1][0] != 0 && (Y1[M1][1] = 0), Y1[M1][2] != 0 && Y1[M1][1] != 0 && (Y1[M1][2] = 0), Y1[M1][3] != 0 && Y1[M1][2] != 0 && (Y1[M1][3] = 0)), M1 < 2 ? N1[M1] = S0 : S0 == 0 && (N1[0] = N1[1] = 0), K0[M1] = Z1.tot_ener[M1];
      }
    })(t, s, r, l, f, b, M, h1, F, b1), function($1, t0) {
      var w0 = $1.internal_flags;
      $1.short_blocks != q0.short_block_coupled || t0[0] != 0 && t0[1] != 0 || (t0[0] = t0[1] = 0);
      for (var x1 = 0; x1 < w0.channels_out; x1++)
        $1.short_blocks == q0.short_block_dispensed && (t0[x1] = 1), $1.short_blocks == q0.short_block_forced && (t0[x1] = 0);
    }(t, b1);
    for (var c1 = 0; c1 < o1; c1++)
      E(t, s, r, c1, l, N, C, T1 = 1 & c1), U(t, l, c1, N), b1[T1] != 0 ? B(K, N, m1[c1], u1[c1], c1) : i(K, c1);
    for (b1[0] + b1[1] == 2 && t.mode == H.JOINT_STEREO && X(m1, u1, K.mld_cb_l, K.ATH.cb_l, t.ATHlower * K.ATH.adjust, t.msfix, K.npart_l), c1 = 0; c1 < o1; c1++)
      b1[T1 = 1 & c1] != 0 && W(K, m1[c1], u1[c1], c1);
    for (var Z = 0; Z < 3; Z++) {
      for (c1 = 0; c1 < o1; ++c1)
        b1[T1 = 1 & c1] != 0 ? u(K, c1, Z) : (h(t, s, r, c1, Z, a1, f1, T1), a(t, a1, m1[c1], u1[c1], c1, Z));
      for (b1[0] + b1[1] == 0 && t.mode == H.JOINT_STEREO && X(m1, u1, K.mld_cb_s, K.ATH.cb_s, t.ATHlower * K.ATH.adjust, t.msfix, K.npart_s), c1 = 0; c1 < o1; ++c1)
        b1[T1 = 1 & c1] == 0 && g(K, m1[c1], u1[c1], c1, Z);
    }
    for (c1 = 0; c1 < o1; c1++) {
      var T1;
      if (b1[T1 = 1 & c1] == 0)
        for (var A1 = 0; A1 < s1.SBMAX_s; A1++) {
          var R1 = Q1(3);
          for (Z = 0; Z < 3; Z++) {
            var B1 = K.thm[c1].s[A1][Z];
            if (B1 *= 0.8, F[c1][Z] >= 2 || F[c1][Z + 1] == 1) {
              var P1 = Z != 0 ? Z - 1 : 2, I1 = i1(K.thm[c1].s[A1][P1], B1, 0.36);
              B1 = Math.min(B1, I1);
            } else
              F[c1][Z] == 1 ? (P1 = Z != 0 ? Z - 1 : 2, I1 = i1(K.thm[c1].s[A1][P1], B1, 0.18), B1 = Math.min(B1, I1)) : (Z != 0 && F[c1][Z - 1] == 3 || Z == 0 && K.nsPsy.lastAttacks[c1] == 3) && (P1 = Z != 2 ? Z + 1 : 0, I1 = i1(K.thm[c1].s[A1][P1], B1, 0.18), B1 = Math.min(B1, I1));
            B1 *= h1[c1][Z], R1[Z] = B1;
          }
          for (Z = 0; Z < 3; Z++)
            K.thm[c1].s[A1][Z] = R1[Z];
        }
    }
    for (c1 = 0; c1 < o1; c1++)
      K.nsPsy.lastAttacks[c1] = F[c1][2];
    for (function($1, t0, w0) {
      for (var x1 = $1.internal_flags, D1 = 0; D1 < x1.channels_out; D1++) {
        var e0 = s1.NORM_TYPE;
        t0[D1] != 0 ? (E1(x1.blocktype_old[D1] != s1.START_TYPE), x1.blocktype_old[D1] == s1.SHORT_TYPE && (e0 = s1.STOP_TYPE)) : (e0 = s1.SHORT_TYPE, x1.blocktype_old[D1] == s1.NORM_TYPE && (x1.blocktype_old[D1] = s1.START_TYPE), x1.blocktype_old[D1] == s1.STOP_TYPE && (x1.blocktype_old[D1] = s1.SHORT_TYPE)), w0[D1] = x1.blocktype_old[D1], x1.blocktype_old[D1] = e0;
      }
    }(t, b1, k), c1 = 0; c1 < o1; c1++) {
      var d1, O1, L1, X1;
      c1 > 1 ? (d1 = T, O1 = -2, L1 = s1.NORM_TYPE, k[0] != s1.SHORT_TYPE && k[1] != s1.SHORT_TYPE || (L1 = s1.SHORT_TYPE), X1 = b[l][c1 - 2]) : (d1 = A, O1 = 0, L1 = k[c1], X1 = f[l][c1]), L1 == s1.SHORT_TYPE ? d1[O1 + c1] = n1(X1, K.masking_lower) : d1[O1 + c1] = G(X1, K.masking_lower), t.analysis && (K.pinfo.pe[l][c1] = d1[O1 + c1]);
    }
    return 0;
  }, this.psymodel_init = function(t) {
    var s, r = t.internal_flags, l = !0, f = 13, b = 24, A = 0, T = 0, M = -8.25, k = -4.5, K = Q1(s1.CBANDS), N = Q1(s1.CBANDS), a1 = Q1(s1.CBANDS), C = t.out_samplerate;
    switch (t.experimentalZ) {
      default:
      case 0:
        l = !0;
        break;
      case 1:
        l = t.VBR != X0.vbr_mtrh && t.VBR != X0.vbr_mt;
        break;
      case 2:
        l = !1;
        break;
      case 3:
        f = 8, A = -1.75, T = -0.0125, M = -8.25, k = -2.25;
    }
    for (r.ms_ener_ratio_old = 0.25, r.blocktype_old[0] = r.blocktype_old[1] = s1.NORM_TYPE, s = 0; s < 4; ++s) {
      for (var f1 = 0; f1 < s1.CBANDS; ++f1)
        r.nb_1[s][f1] = 1e20, r.nb_2[s][f1] = 1e20, r.nb_s1[s][f1] = r.nb_s2[s][f1] = 1;
      for (var m1 = 0; m1 < s1.SBMAX_l; m1++)
        r.en[s].l[m1] = 1e20, r.thm[s].l[m1] = 1e20;
      for (f1 = 0; f1 < 3; ++f1) {
        for (m1 = 0; m1 < s1.SBMAX_s; m1++)
          r.en[s].s[m1][f1] = 1e20, r.thm[s].s[m1][f1] = 1e20;
        r.nsPsy.lastAttacks[s] = 0;
      }
      for (f1 = 0; f1 < 9; f1++)
        r.nsPsy.last_en_subshort[s][f1] = 10;
    }
    for (r.loudness_sq_save[0] = r.loudness_sq_save[1] = 0, r.npart_l = Q(r.numlines_l, r.bo_l, r.bm_l, K, N, r.mld_l, r.PSY.bo_l_weight, C, s1.BLKSIZE, r.scalefac_band.l, s1.BLKSIZE / 1152, s1.SBMAX_l), E1(r.npart_l < s1.CBANDS), s = 0; s < r.npart_l; s++) {
      var u1 = A;
      K[s] >= f && (u1 = T * (K[s] - f) / (b - f) + A * (b - K[s]) / (b - f)), a1[s] = Math.pow(10, u1 / 10), r.numlines_l[s] > 0 ? r.rnumlines_l[s] = 1 / r.numlines_l[s] : r.rnumlines_l[s] = 0;
    }
    r.s3_ll = $(r.s3ind, r.npart_l, K, N, a1, l);
    var h1;
    for (f1 = 0, s = 0; s < r.npart_l; s++) {
      o1 = Lt.MAX_VALUE;
      for (var F = 0; F < r.numlines_l[s]; F++, f1++) {
        var b1 = C * f1 / (1e3 * s1.BLKSIZE);
        c1 = this.ATHformula(1e3 * b1, t) - 20, c1 = Math.pow(10, 0.1 * c1), o1 > (c1 *= r.numlines_l[s]) && (o1 = c1);
      }
      r.ATH.cb_l[s] = o1, (o1 = 20 * K[s] / 10 - 20) > 6 && (o1 = 100), o1 < -15 && (o1 = -15), o1 -= 8, r.minval_l[s] = Math.pow(10, o1 / 10) * r.numlines_l[s];
    }
    for (r.npart_s = Q(r.numlines_s, r.bo_s, r.bm_s, K, N, r.mld_s, r.PSY.bo_s_weight, C, s1.BLKSIZE_s, r.scalefac_band.s, s1.BLKSIZE_s / 384, s1.SBMAX_s), E1(r.npart_s < s1.CBANDS), f1 = 0, s = 0; s < r.npart_s; s++) {
      var o1;
      for (u1 = M, K[s] >= f && (u1 = k * (K[s] - f) / (b - f) + M * (b - K[s]) / (b - f)), a1[s] = Math.pow(10, u1 / 10), o1 = Lt.MAX_VALUE, F = 0; F < r.numlines_s[s]; F++, f1++) {
        var c1;
        b1 = C * f1 / (1e3 * s1.BLKSIZE_s), c1 = this.ATHformula(1e3 * b1, t) - 20, c1 = Math.pow(10, 0.1 * c1), o1 > (c1 *= r.numlines_s[s]) && (o1 = c1);
      }
      r.ATH.cb_s[s] = o1, o1 = 7 * K[s] / 12 - 7, K[s] > 12 && (o1 *= 1 + 3.1 * Math.log(1 + o1)), K[s] < 12 && (o1 *= 1 + 2.3 * Math.log(1 - o1)), o1 < -15 && (o1 = -15), o1 -= 8, r.minval_s[s] = Math.pow(10, o1 / 10) * r.numlines_s[s];
    }
    r.s3_ss = $(r.s3ind_s, r.npart_s, K, N, a1, l), o = Math.pow(10, 9 / 16), e = Math.pow(10, 1.5), d = Math.pow(10, 1.5), x.init_fft(r), r.decay = Math.exp(-1 * O / (0.01 * C / 192)), h1 = 3.5, 2 & t.exp_nspsytune && (h1 = 1), Math.abs(t.msfix) > 0 && (h1 = t.msfix), t.msfix = h1;
    for (var Z = 0; Z < r.npart_l; Z++)
      r.s3ind[Z][1] > r.npart_l - 1 && (r.s3ind[Z][1] = r.npart_l - 1);
    var T1 = 576 * r.mode_gr / C;
    if (r.ATH.decay = Math.pow(10, -1.2 * T1), r.ATH.adjust = 0.01, r.ATH.adjustLimit = 1, E1(r.bo_l[s1.SBMAX_l - 1] <= r.npart_l), E1(r.bo_s[s1.SBMAX_s - 1] <= r.npart_s), t.ATHtype != -1) {
      var A1 = t.out_samplerate / s1.BLKSIZE, R1 = 0;
      for (b1 = 0, s = 0; s < s1.BLKSIZE / 2; ++s)
        b1 += A1, r.ATH.eql_w[s] = 1 / Math.pow(10, this.ATHformula(b1, t) / 10), R1 += r.ATH.eql_w[s];
      for (R1 = 1 / R1, s = s1.BLKSIZE / 2; --s >= 0; )
        r.ATH.eql_w[s] *= R1;
    }
    for (Z = f1 = 0; Z < r.npart_s; ++Z)
      for (s = 0; s < r.numlines_s[Z]; ++s)
        ++f1;
    for (Z = f1 = 0; Z < r.npart_l; ++Z)
      for (s = 0; s < r.numlines_l[Z]; ++s)
        ++f1;
    for (f1 = 0, s = 0; s < r.npart_l; s++)
      b1 = C * (f1 + r.numlines_l[s] / 2) / (1 * s1.BLKSIZE), r.mld_cb_l[s] = y(b1), f1 += r.numlines_l[s];
    for (; s < s1.CBANDS; ++s)
      r.mld_cb_l[s] = 1;
    for (f1 = 0, s = 0; s < r.npart_s; s++)
      b1 = C * (f1 + r.numlines_s[s] / 2) / (1 * s1.BLKSIZE_s), r.mld_cb_s[s] = y(b1), f1 += r.numlines_s[s];
    for (; s < s1.CBANDS; ++s)
      r.mld_cb_s[s] = 1;
    return 0;
  }, this.ATHformula = function(t, s) {
    var r;
    switch (s.ATHtype) {
      case 0:
        r = D(t, 9);
        break;
      case 1:
        r = D(t, -1);
        break;
      case 2:
      default:
        r = D(t, 0);
        break;
      case 3:
        r = D(t, 1) + 6;
        break;
      case 4:
        r = D(t, s.ATHcurve);
    }
    return r;
  };
}, B2 = W0, T2 = function() {
  this.class_id = 0, this.num_samples = 0, this.num_channels = 0, this.in_samplerate = 0, this.out_samplerate = 0, this.scale = 0, this.scale_left = 0, this.scale_right = 0, this.analysis = !1, this.bWriteVbrTag = !1, this.decode_only = !1, this.quality = 0, this.mode = B2.STEREO, this.force_ms = !1, this.free_format = !1, this.findReplayGain = !1, this.decode_on_the_fly = !1, this.write_id3tag_automatic = !1, this.brate = 0, this.compression_ratio = 0, this.copyright = 0, this.original = 0, this.extension = 0, this.emphasis = 0, this.error_protection = 0, this.strict_ISO = !1, this.disable_reservoir = !1, this.quant_comp = 0, this.quant_comp_short = 0, this.experimentalY = !1, this.experimentalZ = 0, this.exp_nspsytune = 0, this.preset = 0, this.VBR = null, this.VBR_q_frac = 0, this.VBR_q = 0, this.VBR_mean_bitrate_kbps = 0, this.VBR_min_bitrate_kbps = 0, this.VBR_max_bitrate_kbps = 0, this.VBR_hard_min = 0, this.lowpassfreq = 0, this.highpassfreq = 0, this.lowpasswidth = 0, this.highpasswidth = 0, this.maskingadjust = 0, this.maskingadjust_short = 0, this.ATHonly = !1, this.ATHshort = !1, this.noATH = !1, this.ATHtype = 0, this.ATHcurve = 0, this.ATHlower = 0, this.athaa_type = 0, this.athaa_loudapprox = 0, this.athaa_sensitivity = 0, this.short_blocks = null, this.useTemporal = !1, this.interChRatio = 0, this.msfix = 0, this.tune = !1, this.tune_value_a = 0, this.version = 0, this.encoder_delay = 0, this.encoder_padding = 0, this.framesize = 0, this.frameNum = 0, this.lame_allocated_gfp = 0, this.internal_flags = null;
}, E2 = z1(), i2 = {};
i2.SFBMAX = 3 * E2.SBMAX_s;
var it = i2, o2 = C1, x2 = o2.new_float, V0 = o2.new_int, lt = it, dt = function() {
  this.xr = x2(576), this.l3_enc = V0(576), this.scalefac = V0(lt.SFBMAX), this.xrpow_max = 0, this.part2_3_length = 0, this.big_values = 0, this.count1 = 0, this.global_gain = 0, this.scalefac_compress = 0, this.block_type = 0, this.mixed_block_flag = 0, this.table_select = V0(3), this.subblock_gain = V0(4), this.region0_count = 0, this.region1_count = 0, this.preflag = 0, this.scalefac_scale = 0, this.count1table_select = 0, this.part2_length = 0, this.sfb_lmax = 0, this.sfb_smin = 0, this.psy_lmax = 0, this.sfbmax = 0, this.psymax = 0, this.sfbdivide = 0, this.width = V0(lt.SFBMAX), this.window = V0(lt.SFBMAX), this.count1bits = 0, this.sfb_partition_table = null, this.slen = V0(4), this.max_nonzero_coeff = 0;
  var H = this;
  function x(O) {
    return new Int32Array(O);
  }
  this.assign = function(O) {
    var e1;
    H.xr = (e1 = O.xr, new Float32Array(e1)), H.l3_enc = x(O.l3_enc), H.scalefac = x(O.scalefac), H.xrpow_max = O.xrpow_max, H.part2_3_length = O.part2_3_length, H.big_values = O.big_values, H.count1 = O.count1, H.global_gain = O.global_gain, H.scalefac_compress = O.scalefac_compress, H.block_type = O.block_type, H.mixed_block_flag = O.mixed_block_flag, H.table_select = x(O.table_select), H.subblock_gain = x(O.subblock_gain), H.region0_count = O.region0_count, H.region1_count = O.region1_count, H.preflag = O.preflag, H.scalefac_scale = O.scalefac_scale, H.count1table_select = O.count1table_select, H.part2_length = O.part2_length, H.sfb_lmax = O.sfb_lmax, H.sfb_smin = O.sfb_smin, H.psy_lmax = O.psy_lmax, H.sfbmax = O.sfbmax, H.psymax = O.psymax, H.sfbdivide = O.sfbdivide, H.width = x(O.width), H.window = x(O.window), H.count1bits = O.count1bits, H.sfb_partition_table = O.sfb_partition_table.slice(0), H.slen = x(O.slen), H.max_nonzero_coeff = O.max_nonzero_coeff;
  };
}, Nt = C1.new_int, y2 = dt, k2 = function() {
  this.tt = [[null, null], [null, null]], this.main_data_begin = 0, this.private_bits = 0, this.resvDrain_pre = 0, this.resvDrain_post = 0, this.scfsi = [Nt(4), Nt(4)];
  for (var H = 0; H < 2; H++)
    for (var x = 0; x < 2; x++)
      this.tt[H][x] = new y2();
}, l2 = C1, tt = l2.System, at = l2.new_int, st = z1(), f2 = function(H, x, O, e1) {
  this.l = at(1 + st.SBMAX_l), this.s = at(1 + st.SBMAX_s), this.psfb21 = at(1 + st.PSFB21), this.psfb12 = at(1 + st.PSFB12);
  var l1 = this.l, J = this.s;
  arguments.length == 4 && (this.arrL = arguments[0], this.arrS = arguments[1], this.arr21 = arguments[2], this.arr12 = arguments[3], tt.arraycopy(this.arrL, 0, l1, 0, Math.min(this.arrL.length, this.l.length)), tt.arraycopy(this.arrS, 0, J, 0, Math.min(this.arrS.length, this.s.length)), tt.arraycopy(this.arr21, 0, this.psfb21, 0, Math.min(this.arr21.length, this.psfb21.length)), tt.arraycopy(this.arr12, 0, this.psfb12, 0, Math.min(this.arr12.length, this.psfb12.length)));
}, vt = C1, ft = vt.new_float, P2 = vt.new_float_n, I2 = vt.new_int, Dt = z1(), V2 = function() {
  this.last_en_subshort = P2([4, 9]), this.lastAttacks = I2(4), this.pefirbuf = ft(19), this.longfact = ft(Dt.SBMAX_l), this.shortfact = ft(Dt.SBMAX_s), this.attackthre = 0, this.attackthre_s = 0;
}, H2 = function() {
  this.sum = 0, this.seen = 0, this.want = 0, this.pos = 0, this.size = 0, this.bag = null, this.nVbrNumFrames = 0, this.nBytesWritten = 0, this.TotalFrameSize = 0;
}, C0 = C1, O2 = C0.new_byte, L2 = C0.new_double, i0 = C0.new_float, H0 = C0.new_float_n, l0 = C0.new_int, rt = C0.new_int_n, N2 = k2, D2 = f2, X2 = V2, q2 = H2, Xt = n2(), j1 = z1(), F2 = it;
function R0() {
  function H() {
    this.write_timing = 0, this.ptr = 0, this.buf = O2(40);
  }
  this.Class_ID = 0, this.lame_encode_frame_init = 0, this.iteration_init_init = 0, this.fill_buffer_resample_init = 0, this.mfbuf = H0([2, R0.MFSIZE]), this.mode_gr = 0, this.channels_in = 0, this.channels_out = 0, this.resample_ratio = 0, this.mf_samples_to_encode = 0, this.mf_size = 0, this.VBR_min_bitrate = 0, this.VBR_max_bitrate = 0, this.bitrate_index = 0, this.samplerate_index = 0, this.mode_ext = 0, this.lowpass1 = 0, this.lowpass2 = 0, this.highpass1 = 0, this.highpass2 = 0, this.noise_shaping = 0, this.noise_shaping_amp = 0, this.substep_shaping = 0, this.psymodel = 0, this.noise_shaping_stop = 0, this.subblock_gain = 0, this.use_best_huffman = 0, this.full_outer_loop = 0, this.l3_side = new N2(), this.ms_ratio = i0(2), this.padding = 0, this.frac_SpF = 0, this.slot_lag = 0, this.tag_spec = null, this.nMusicCRC = 0, this.OldValue = l0(2), this.CurrentStep = l0(2), this.masking_lower = 0, this.bv_scf = l0(576), this.pseudohalf = l0(F2.SFBMAX), this.sfb21_extra = !1, this.inbuf_old = new Array(2), this.blackfilt = new Array(2 * R0.BPC + 1), this.itime = L2(2), this.sideinfo_len = 0, this.sb_sample = H0([2, 2, 18, j1.SBLIMIT]), this.amp_filter = i0(32), this.header = new Array(R0.MAX_HEADER_BUF), this.h_ptr = 0, this.w_ptr = 0, this.ancillary_flag = 0, this.ResvSize = 0, this.ResvMax = 0, this.scalefac_band = new D2(), this.minval_l = i0(j1.CBANDS), this.minval_s = i0(j1.CBANDS), this.nb_1 = H0([4, j1.CBANDS]), this.nb_2 = H0([4, j1.CBANDS]), this.nb_s1 = H0([4, j1.CBANDS]), this.nb_s2 = H0([4, j1.CBANDS]), this.s3_ss = null, this.s3_ll = null, this.decay = 0, this.thm = new Array(4), this.en = new Array(4), this.tot_ener = i0(4), this.loudness_sq = H0([2, 2]), this.loudness_sq_save = i0(2), this.mld_l = i0(j1.SBMAX_l), this.mld_s = i0(j1.SBMAX_s), this.bm_l = l0(j1.SBMAX_l), this.bo_l = l0(j1.SBMAX_l), this.bm_s = l0(j1.SBMAX_s), this.bo_s = l0(j1.SBMAX_s), this.npart_l = 0, this.npart_s = 0, this.s3ind = rt([j1.CBANDS, 2]), this.s3ind_s = rt([j1.CBANDS, 2]), this.numlines_s = l0(j1.CBANDS), this.numlines_l = l0(j1.CBANDS), this.rnumlines_l = i0(j1.CBANDS), this.mld_cb_l = i0(j1.CBANDS), this.mld_cb_s = i0(j1.CBANDS), this.numlines_s_num1 = 0, this.numlines_l_num1 = 0, this.pe = i0(4), this.ms_ratio_s_old = 0, this.ms_ratio_l_old = 0, this.ms_ener_ratio_old = 0, this.blocktype_old = l0(2), this.nsPsy = new X2(), this.VBR_seek_table = new q2(), this.ATH = null, this.PSY = null, this.nogap_total = 0, this.nogap_current = 0, this.decode_on_the_fly = !0, this.findReplayGain = !0, this.findPeakSample = !0, this.PeakSample = 0, this.RadioGain = 0, this.AudiophileGain = 0, this.rgdata = null, this.noclipGainChange = 0, this.noclipScale = 0, this.bitrate_stereoMode_Hist = rt([16, 5]), this.bitrate_blockType_Hist = rt([16, 6]), this.pinfo = null, this.hip = null, this.in_buffer_nsamples = 0, this.in_buffer_0 = null, this.in_buffer_1 = null, this.iteration_loop = null;
  for (var x = 0; x < this.en.length; x++)
    this.en[x] = new Xt();
  for (x = 0; x < this.thm.length; x++)
    this.thm[x] = new Xt();
  for (x = 0; x < this.header.length; x++)
    this.header[x] = new H();
}
R0.MFSIZE = 3456 + j1.ENCDELAY - j1.MDCTDELAY, R0.MAX_HEADER_BUF = 256, R0.MAX_BITS_PER_CHANNEL = 4095, R0.MAX_BITS_PER_GRANULE = 7680, R0.BPC = 320;
var ot = R0, O0 = C1.new_float, L0 = z1(), Y2 = function() {
  this.useAdjust = 0, this.aaSensitivityP = 0, this.adjust = 0, this.adjustLimit = 0, this.decay = 0, this.floor = 0, this.l = O0(L0.SBMAX_l), this.s = O0(L0.SBMAX_s), this.psfb21 = O0(L0.PSFB21), this.psfb12 = O0(L0.PSFB12), this.cb_l = O0(L0.CBANDS), this.cb_s = O0(L0.CBANDS), this.eql_w = O0(L0.BLKSIZE / 2);
}, u2 = C1, s0 = u2.System, qt = u2.Arrays;
function G1() {
  var H = G1.RMS_WINDOW_TIME_NUMERATOR, x = G1.RMS_WINDOW_TIME_DENOMINATOR, O = [[0.038575994352, -3.84664617118067, -0.02160367184185, 7.81501653005538, -0.00123395316851, -11.34170355132042, -9291677959e-14, 13.05504219327545, -0.01655260341619, -12.28759895145294, 0.02161526843274, 9.4829380631979, -0.02074045215285, -5.87257861775999, 0.00594298065125, 2.75465861874613, 0.00306428023191, -0.86984376593551, 12025322027e-14, 0.13919314567432, 0.00288463683916], [0.0541865640643, -3.47845948550071, -0.02911007808948, 6.36317777566148, -0.00848709379851, -8.54751527471874, -0.00851165645469, 9.4769360780128, -0.00834990904936, -8.81498681370155, 0.02245293253339, 6.85401540936998, -0.02596338512915, -4.39470996079559, 0.01624864962975, 2.19611684890774, -0.00240879051584, -0.75104302451432, 0.00674613682247, 0.13149317958808, -0.00187763777362], [0.15457299681924, -2.37898834973084, -0.09331049056315, 2.84868151156327, -0.06247880153653, -2.64577170229825, 0.02163541888798, 2.23697657451713, -0.05588393329856, -1.67148153367602, 0.04781476674921, 1.00595954808547, 0.00222312597743, -0.45953458054983, 0.03174092540049, 0.16378164858596, -0.01390589421898, -0.05032077717131, 0.00651420667831, 0.0234789740702, -0.00881362733839], [0.30296907319327, -1.61273165137247, -0.22613988682123, 1.0797749225997, -0.08587323730772, -0.2565625775407, 0.03282930172664, -0.1627671912044, -0.00915702933434, -0.22638893773906, -0.02364141202522, 0.39120800788284, -0.00584456039913, -0.22138138954925, 0.06276101321749, 0.04500235387352, -828086748e-14, 0.02005851806501, 0.00205861885564, 0.00302439095741, -0.02950134983287], [0.33642304856132, -1.49858979367799, -0.2557224142557, 0.87350271418188, -0.11828570177555, 0.12205022308084, 0.11921148675203, -0.80774944671438, -0.07834489609479, 0.47854794562326, -0.0046997791438, -0.12453458140019, -0.0058950022444, -0.04067510197014, 0.05724228140351, 0.08333755284107, 0.00832043980773, -0.04237348025746, -0.0163538138454, 0.02977207319925, -0.0176017656815], [0.4491525660845, -0.62820619233671, -0.14351757464547, 0.29661783706366, -0.22784394429749, -0.372563729424, -0.01419140100551, 0.00213767857124, 0.04078262797139, -0.42029820170918, -0.12398163381748, 0.22199650564824, 0.04097565135648, 0.00613424350682, 0.10478503600251, 0.06747620744683, -0.01863887810927, 0.05784820375801, -0.03193428438915, 0.03222754072173, 0.00541907748707], [0.56619470757641, -1.04800335126349, -0.75464456939302, 0.29156311971249, 0.1624213774223, -0.26806001042947, 0.16744243493672, 0.00819999645858, -0.18901604199609, 0.45054734505008, 0.3093178284183, -0.33032403314006, -0.27562961986224, 0.0673936833311, 0.00647310677246, -0.04784254229033, 0.08647503780351, 0.01639907836189, -0.0378898455484, 0.01807364323573, -0.00588215443421], [0.58100494960553, -0.51035327095184, -0.53174909058578, -0.31863563325245, -0.14289799034253, -0.20256413484477, 0.17520704835522, 0.1472815413433, 0.02377945217615, 0.38952639978999, 0.15558449135573, -0.23313271880868, -0.25344790059353, -0.05246019024463, 0.01628462406333, -0.02505961724053, 0.06920467763959, 0.02442357316099, -0.03721611395801, 0.01818801111503, -0.00749618797172], [0.53648789255105, -0.2504987195602, -0.42163034350696, -0.43193942311114, -0.00275953611929, -0.03424681017675, 0.04267842219415, -0.04678328784242, -0.10214864179676, 0.26408300200955, 0.14590772289388, 0.15113130533216, -0.02459864859345, -0.17556493366449, -0.11202315195388, -0.18823009262115, -0.04060034127, 0.05477720428674, 0.0478866554818, 0.0470440968812, -0.02217936801134]], e1 = [[0.98621192462708, -1.97223372919527, -1.97242384925416, 0.97261396931306, 0.98621192462708], [0.98500175787242, -1.96977855582618, -1.97000351574484, 0.9702284756635, 0.98500175787242], [0.97938932735214, -1.95835380975398, -1.95877865470428, 0.95920349965459, 0.97938932735214], [0.97531843204928, -1.95002759149878, -1.95063686409857, 0.95124613669835, 0.97531843204928], [0.97316523498161, -1.94561023566527, -1.94633046996323, 0.94705070426118, 0.97316523498161], [0.96454515552826, -1.92783286977036, -1.92909031105652, 0.93034775234268, 0.96454515552826], [0.96009142950541, -1.91858953033784, -1.92018285901082, 0.92177618768381, 0.96009142950541], [0.95856916599601, -1.9154210807478, -1.91713833199203, 0.91885558323625, 0.95856916599601], [0.94597685600279, -1.88903307939452, -1.89195371200558, 0.89487434461664, 0.94597685600279]];
  function l1(p, q, o, e, d, w) {
    for (; d-- != 0; )
      o[e] = 1e-10 + p[q + 0] * w[0] - o[e - 1] * w[1] + p[q - 1] * w[2] - o[e - 2] * w[3] + p[q - 2] * w[4] - o[e - 3] * w[5] + p[q - 3] * w[6] - o[e - 4] * w[7] + p[q - 4] * w[8] - o[e - 5] * w[9] + p[q - 5] * w[10] - o[e - 6] * w[11] + p[q - 6] * w[12] - o[e - 7] * w[13] + p[q - 7] * w[14] - o[e - 8] * w[15] + p[q - 8] * w[16] - o[e - 9] * w[17] + p[q - 9] * w[18] - o[e - 10] * w[19] + p[q - 10] * w[20], ++e, ++q;
  }
  function J(p, q, o, e, d, w) {
    for (; d-- != 0; )
      o[e] = p[q + 0] * w[0] - o[e - 1] * w[1] + p[q - 1] * w[2] - o[e - 2] * w[3] + p[q - 2] * w[4], ++e, ++q;
  }
  function j(p) {
    return p * p;
  }
  this.InitGainAnalysis = function(p, q) {
    return function(o, e) {
      for (var d = 0; d < MAX_ORDER; d++)
        o.linprebuf[d] = o.lstepbuf[d] = o.loutbuf[d] = o.rinprebuf[d] = o.rstepbuf[d] = o.routbuf[d] = 0;
      switch (0 | e) {
        case 48e3:
          o.reqindex = 0;
          break;
        case 44100:
          o.reqindex = 1;
          break;
        case 32e3:
          o.reqindex = 2;
          break;
        case 24e3:
          o.reqindex = 3;
          break;
        case 22050:
          o.reqindex = 4;
          break;
        case 16e3:
          o.reqindex = 5;
          break;
        case 12e3:
          o.reqindex = 6;
          break;
        case 11025:
          o.reqindex = 7;
          break;
        case 8e3:
          o.reqindex = 8;
          break;
        default:
          return INIT_GAIN_ANALYSIS_ERROR;
      }
      return o.sampleWindow = 0 | (e * H + x - 1) / x, o.lsum = 0, o.rsum = 0, o.totsamp = 0, qt.ill(o.A, 0), INIT_GAIN_ANALYSIS_OK;
    }(p, q) != INIT_GAIN_ANALYSIS_OK ? INIT_GAIN_ANALYSIS_ERROR : (p.linpre = MAX_ORDER, p.rinpre = MAX_ORDER, p.lstep = MAX_ORDER, p.rstep = MAX_ORDER, p.lout = MAX_ORDER, p.rout = MAX_ORDER, qt.fill(p.B, 0), INIT_GAIN_ANALYSIS_OK);
  }, this.AnalyzeSamples = function(p, q, o, e, d, w, z) {
    var P, R, _, m, V, g, W;
    if (w == 0)
      return GAIN_ANALYSIS_OK;
    switch (W = 0, V = w, z) {
      case 1:
        e = q, d = o;
        break;
      case 2:
        break;
      default:
        return GAIN_ANALYSIS_ERROR;
    }
    for (w < MAX_ORDER ? (s0.arraycopy(q, o, p.linprebuf, MAX_ORDER, w), s0.arraycopy(e, d, p.rinprebuf, MAX_ORDER, w)) : (s0.arraycopy(q, o, p.linprebuf, MAX_ORDER, MAX_ORDER), s0.arraycopy(e, d, p.rinprebuf, MAX_ORDER, MAX_ORDER)); V > 0; ) {
      g = V > p.sampleWindow - p.totsamp ? p.sampleWindow - p.totsamp : V, W < MAX_ORDER ? (P = p.linpre + W, R = p.linprebuf, _ = p.rinpre + W, m = p.rinprebuf, g > MAX_ORDER - W && (g = MAX_ORDER - W)) : (P = o + W, R = q, _ = d + W, m = e), l1(R, P, p.lstepbuf, p.lstep + p.totsamp, g, O[p.reqindex]), l1(m, _, p.rstepbuf, p.rstep + p.totsamp, g, O[p.reqindex]), J(p.lstepbuf, p.lstep + p.totsamp, p.loutbuf, p.lout + p.totsamp, g, e1[p.reqindex]), J(p.rstepbuf, p.rstep + p.totsamp, p.routbuf, p.rout + p.totsamp, g, e1[p.reqindex]), P = p.lout + p.totsamp, R = p.loutbuf, _ = p.rout + p.totsamp, m = p.routbuf;
      for (var Y = g % 8; Y-- != 0; )
        p.lsum += j(R[P++]), p.rsum += j(m[_++]);
      for (Y = g / 8; Y-- != 0; )
        p.lsum += j(R[P + 0]) + j(R[P + 1]) + j(R[P + 2]) + j(R[P + 3]) + j(R[P + 4]) + j(R[P + 5]) + j(R[P + 6]) + j(R[P + 7]), P += 8, p.rsum += j(m[_ + 0]) + j(m[_ + 1]) + j(m[_ + 2]) + j(m[_ + 3]) + j(m[_ + 4]) + j(m[_ + 5]) + j(m[_ + 6]) + j(m[_ + 7]), _ += 8;
      if (V -= g, W += g, p.totsamp += g, p.totsamp == p.sampleWindow) {
        var i1 = 10 * G1.STEPS_per_dB * Math.log10((p.lsum + p.rsum) / p.totsamp * 0.5 + 1e-37), t1 = i1 <= 0 ? 0 : 0 | i1;
        t1 >= p.A.length && (t1 = p.A.length - 1), p.A[t1]++, p.lsum = p.rsum = 0, s0.arraycopy(p.loutbuf, p.totsamp, p.loutbuf, 0, MAX_ORDER), s0.arraycopy(p.routbuf, p.totsamp, p.routbuf, 0, MAX_ORDER), s0.arraycopy(p.lstepbuf, p.totsamp, p.lstepbuf, 0, MAX_ORDER), s0.arraycopy(p.rstepbuf, p.totsamp, p.rstepbuf, 0, MAX_ORDER), p.totsamp = 0;
      }
      if (p.totsamp > p.sampleWindow)
        return GAIN_ANALYSIS_ERROR;
    }
    return w < MAX_ORDER ? (s0.arraycopy(p.linprebuf, w, p.linprebuf, 0, MAX_ORDER - w), s0.arraycopy(p.rinprebuf, w, p.rinprebuf, 0, MAX_ORDER - w), s0.arraycopy(q, o, p.linprebuf, MAX_ORDER - w, w), s0.arraycopy(e, d, p.rinprebuf, MAX_ORDER - w, w)) : (s0.arraycopy(q, o + w - MAX_ORDER, p.linprebuf, 0, MAX_ORDER), s0.arraycopy(e, d + w - MAX_ORDER, p.rinprebuf, 0, MAX_ORDER)), GAIN_ANALYSIS_OK;
  }, this.GetTitleGain = function(p) {
    for (var q = function(e, d) {
      var w, z = 0;
      for (w = 0; w < d; w++)
        z += e[w];
      if (z == 0)
        return GAIN_NOT_ENOUGH_SAMPLES;
      var P = 0 | Math.ceil(z * (1 - 0.95));
      for (w = d; w-- > 0 && !((P -= e[w]) <= 0); )
        ;
      return 64.82 - w / G1.STEPS_per_dB;
    }(p.A, p.A.length), o = 0; o < p.A.length; o++)
      p.B[o] += p.A[o], p.A[o] = 0;
    for (o = 0; o < MAX_ORDER; o++)
      p.linprebuf[o] = p.lstepbuf[o] = p.loutbuf[o] = p.rinprebuf[o] = p.rstepbuf[o] = p.routbuf[o] = 0;
    return p.totsamp = 0, p.lsum = p.rsum = 0, q;
  };
}
G1.STEPS_per_dB = 100, G1.MAX_dB = 120, G1.GAIN_NOT_ENOUGH_SAMPLES = -24601, G1.GAIN_ANALYSIS_ERROR = 0, G1.GAIN_ANALYSIS_OK = 1, G1.INIT_GAIN_ANALYSIS_ERROR = 0, G1.INIT_GAIN_ANALYSIS_OK = 1, G1.YULE_ORDER = 10, G1.MAX_ORDER = G1.YULE_ORDER, G1.MAX_SAMP_FREQ = 48e3, G1.RMS_WINDOW_TIME_NUMERATOR = 1, G1.RMS_WINDOW_TIME_DENOMINATOR = 20, G1.MAX_SAMPLES_PER_WINDOW = G1.MAX_SAMP_FREQ * G1.RMS_WINDOW_TIME_NUMERATOR / G1.RMS_WINDOW_TIME_DENOMINATOR + 1;
var c2 = G1, h2 = C1, F0 = h2.new_float, Ft = h2.new_int, r0 = c2, C2 = function() {
  this.linprebuf = F0(2 * r0.MAX_ORDER), this.linpre = 0, this.lstepbuf = F0(r0.MAX_SAMPLES_PER_WINDOW + r0.MAX_ORDER), this.lstep = 0, this.loutbuf = F0(r0.MAX_SAMPLES_PER_WINDOW + r0.MAX_ORDER), this.lout = 0, this.rinprebuf = F0(2 * r0.MAX_ORDER), this.rinpre = 0, this.rstepbuf = F0(r0.MAX_SAMPLES_PER_WINDOW + r0.MAX_ORDER), this.rstep = 0, this.routbuf = F0(r0.MAX_SAMPLES_PER_WINDOW + r0.MAX_ORDER), this.rout = 0, this.sampleWindow = 0, this.totsamp = 0, this.lsum = 0, this.rsum = 0, this.freqindex = 0, this.first = 0, this.A = Ft(0 | r0.STEPS_per_dB * r0.MAX_dB), this.B = Ft(0 | r0.STEPS_per_dB * r0.MAX_dB);
}, b2 = function(H) {
  this.bits = H;
}, gt = C1, Yt = gt.new_float, j2 = gt.new_int, Ct = gt.assert, G2 = b2, jt = z1(), K2 = it, Z2 = ot, U2 = function(H) {
  var x = H;
  this.quantize = x, this.iteration_loop = function(O, e1, l1, J) {
    var j, p = O.internal_flags, q = Yt(K2.SFBMAX), o = Yt(576), e = j2(2), d = 0, w = p.l3_side, z = new G2(d);
    this.quantize.rv.ResvFrameBegin(O, z), d = z.bits;
    for (var P = 0; P < p.mode_gr; P++) {
      j = this.quantize.qupvt.on_pe(O, e1, e, d, P, P), p.mode_ext == jt.MPG_MD_MS_LR && (this.quantize.ms_convert(p.l3_side, P), this.quantize.qupvt.reduce_side(e, l1[P], d, j));
      for (var R = 0; R < p.channels_out; R++) {
        var _, m, V = w.tt[P][R];
        V.block_type != jt.SHORT_TYPE ? (_ = 0, m = p.PSY.mask_adjust - _) : (_ = 0, m = p.PSY.mask_adjust_short - _), p.masking_lower = Math.pow(10, 0.1 * m), this.quantize.init_outer_loop(p, V), this.quantize.init_xrpow(p, V, o) && (this.quantize.qupvt.calc_xmin(O, J[P][R], V, q), this.quantize.outer_loop(O, V, q, o, R, e[R])), this.quantize.iteration_finish_one(p, P, R), Ct(V.part2_3_length <= Z2.MAX_BITS_PER_CHANNEL), Ct(V.part2_3_length <= e[R]);
      }
    }
    this.quantize.rv.ResvFrameEnd(p, d);
  };
};
function y1(H, x, O, e1) {
  this.xlen = H, this.linmax = x, this.table = O, this.hlen = e1;
}
var p1 = { t1HB: [1, 1, 1, 0], t2HB: [1, 2, 1, 3, 1, 1, 3, 2, 0], t3HB: [3, 2, 1, 1, 1, 1, 3, 2, 0], t5HB: [1, 2, 6, 5, 3, 1, 4, 4, 7, 5, 7, 1, 6, 1, 1, 0], t6HB: [7, 3, 5, 1, 6, 2, 3, 2, 5, 4, 4, 1, 3, 3, 2, 0], t7HB: [1, 2, 10, 19, 16, 10, 3, 3, 7, 10, 5, 3, 11, 4, 13, 17, 8, 4, 12, 11, 18, 15, 11, 2, 7, 6, 9, 14, 3, 1, 6, 4, 5, 3, 2, 0], t8HB: [3, 4, 6, 18, 12, 5, 5, 1, 2, 16, 9, 3, 7, 3, 5, 14, 7, 3, 19, 17, 15, 13, 10, 4, 13, 5, 8, 11, 5, 1, 12, 4, 4, 1, 1, 0], t9HB: [7, 5, 9, 14, 15, 7, 6, 4, 5, 5, 6, 7, 7, 6, 8, 8, 8, 5, 15, 6, 9, 10, 5, 1, 11, 7, 9, 6, 4, 1, 14, 4, 6, 2, 6, 0], t10HB: [1, 2, 10, 23, 35, 30, 12, 17, 3, 3, 8, 12, 18, 21, 12, 7, 11, 9, 15, 21, 32, 40, 19, 6, 14, 13, 22, 34, 46, 23, 18, 7, 20, 19, 33, 47, 27, 22, 9, 3, 31, 22, 41, 26, 21, 20, 5, 3, 14, 13, 10, 11, 16, 6, 5, 1, 9, 8, 7, 8, 4, 4, 2, 0], t11HB: [3, 4, 10, 24, 34, 33, 21, 15, 5, 3, 4, 10, 32, 17, 11, 10, 11, 7, 13, 18, 30, 31, 20, 5, 25, 11, 19, 59, 27, 18, 12, 5, 35, 33, 31, 58, 30, 16, 7, 5, 28, 26, 32, 19, 17, 15, 8, 14, 14, 12, 9, 13, 14, 9, 4, 1, 11, 4, 6, 6, 6, 3, 2, 0], t12HB: [9, 6, 16, 33, 41, 39, 38, 26, 7, 5, 6, 9, 23, 16, 26, 11, 17, 7, 11, 14, 21, 30, 10, 7, 17, 10, 15, 12, 18, 28, 14, 5, 32, 13, 22, 19, 18, 16, 9, 5, 40, 17, 31, 29, 17, 13, 4, 2, 27, 12, 11, 15, 10, 7, 4, 1, 27, 12, 8, 12, 6, 3, 1, 0], t13HB: [1, 5, 14, 21, 34, 51, 46, 71, 42, 52, 68, 52, 67, 44, 43, 19, 3, 4, 12, 19, 31, 26, 44, 33, 31, 24, 32, 24, 31, 35, 22, 14, 15, 13, 23, 36, 59, 49, 77, 65, 29, 40, 30, 40, 27, 33, 42, 16, 22, 20, 37, 61, 56, 79, 73, 64, 43, 76, 56, 37, 26, 31, 25, 14, 35, 16, 60, 57, 97, 75, 114, 91, 54, 73, 55, 41, 48, 53, 23, 24, 58, 27, 50, 96, 76, 70, 93, 84, 77, 58, 79, 29, 74, 49, 41, 17, 47, 45, 78, 74, 115, 94, 90, 79, 69, 83, 71, 50, 59, 38, 36, 15, 72, 34, 56, 95, 92, 85, 91, 90, 86, 73, 77, 65, 51, 44, 43, 42, 43, 20, 30, 44, 55, 78, 72, 87, 78, 61, 46, 54, 37, 30, 20, 16, 53, 25, 41, 37, 44, 59, 54, 81, 66, 76, 57, 54, 37, 18, 39, 11, 35, 33, 31, 57, 42, 82, 72, 80, 47, 58, 55, 21, 22, 26, 38, 22, 53, 25, 23, 38, 70, 60, 51, 36, 55, 26, 34, 23, 27, 14, 9, 7, 34, 32, 28, 39, 49, 75, 30, 52, 48, 40, 52, 28, 18, 17, 9, 5, 45, 21, 34, 64, 56, 50, 49, 45, 31, 19, 12, 15, 10, 7, 6, 3, 48, 23, 20, 39, 36, 35, 53, 21, 16, 23, 13, 10, 6, 1, 4, 2, 16, 15, 17, 27, 25, 20, 29, 11, 17, 12, 16, 8, 1, 1, 0, 1], t15HB: [7, 12, 18, 53, 47, 76, 124, 108, 89, 123, 108, 119, 107, 81, 122, 63, 13, 5, 16, 27, 46, 36, 61, 51, 42, 70, 52, 83, 65, 41, 59, 36, 19, 17, 15, 24, 41, 34, 59, 48, 40, 64, 50, 78, 62, 80, 56, 33, 29, 28, 25, 43, 39, 63, 55, 93, 76, 59, 93, 72, 54, 75, 50, 29, 52, 22, 42, 40, 67, 57, 95, 79, 72, 57, 89, 69, 49, 66, 46, 27, 77, 37, 35, 66, 58, 52, 91, 74, 62, 48, 79, 63, 90, 62, 40, 38, 125, 32, 60, 56, 50, 92, 78, 65, 55, 87, 71, 51, 73, 51, 70, 30, 109, 53, 49, 94, 88, 75, 66, 122, 91, 73, 56, 42, 64, 44, 21, 25, 90, 43, 41, 77, 73, 63, 56, 92, 77, 66, 47, 67, 48, 53, 36, 20, 71, 34, 67, 60, 58, 49, 88, 76, 67, 106, 71, 54, 38, 39, 23, 15, 109, 53, 51, 47, 90, 82, 58, 57, 48, 72, 57, 41, 23, 27, 62, 9, 86, 42, 40, 37, 70, 64, 52, 43, 70, 55, 42, 25, 29, 18, 11, 11, 118, 68, 30, 55, 50, 46, 74, 65, 49, 39, 24, 16, 22, 13, 14, 7, 91, 44, 39, 38, 34, 63, 52, 45, 31, 52, 28, 19, 14, 8, 9, 3, 123, 60, 58, 53, 47, 43, 32, 22, 37, 24, 17, 12, 15, 10, 2, 1, 71, 37, 34, 30, 28, 20, 17, 26, 21, 16, 10, 6, 8, 6, 2, 0], t16HB: [1, 5, 14, 44, 74, 63, 110, 93, 172, 149, 138, 242, 225, 195, 376, 17, 3, 4, 12, 20, 35, 62, 53, 47, 83, 75, 68, 119, 201, 107, 207, 9, 15, 13, 23, 38, 67, 58, 103, 90, 161, 72, 127, 117, 110, 209, 206, 16, 45, 21, 39, 69, 64, 114, 99, 87, 158, 140, 252, 212, 199, 387, 365, 26, 75, 36, 68, 65, 115, 101, 179, 164, 155, 264, 246, 226, 395, 382, 362, 9, 66, 30, 59, 56, 102, 185, 173, 265, 142, 253, 232, 400, 388, 378, 445, 16, 111, 54, 52, 100, 184, 178, 160, 133, 257, 244, 228, 217, 385, 366, 715, 10, 98, 48, 91, 88, 165, 157, 148, 261, 248, 407, 397, 372, 380, 889, 884, 8, 85, 84, 81, 159, 156, 143, 260, 249, 427, 401, 392, 383, 727, 713, 708, 7, 154, 76, 73, 141, 131, 256, 245, 426, 406, 394, 384, 735, 359, 710, 352, 11, 139, 129, 67, 125, 247, 233, 229, 219, 393, 743, 737, 720, 885, 882, 439, 4, 243, 120, 118, 115, 227, 223, 396, 746, 742, 736, 721, 712, 706, 223, 436, 6, 202, 224, 222, 218, 216, 389, 386, 381, 364, 888, 443, 707, 440, 437, 1728, 4, 747, 211, 210, 208, 370, 379, 734, 723, 714, 1735, 883, 877, 876, 3459, 865, 2, 377, 369, 102, 187, 726, 722, 358, 711, 709, 866, 1734, 871, 3458, 870, 434, 0, 12, 10, 7, 11, 10, 17, 11, 9, 13, 12, 10, 7, 5, 3, 1, 3], t24HB: [15, 13, 46, 80, 146, 262, 248, 434, 426, 669, 653, 649, 621, 517, 1032, 88, 14, 12, 21, 38, 71, 130, 122, 216, 209, 198, 327, 345, 319, 297, 279, 42, 47, 22, 41, 74, 68, 128, 120, 221, 207, 194, 182, 340, 315, 295, 541, 18, 81, 39, 75, 70, 134, 125, 116, 220, 204, 190, 178, 325, 311, 293, 271, 16, 147, 72, 69, 135, 127, 118, 112, 210, 200, 188, 352, 323, 306, 285, 540, 14, 263, 66, 129, 126, 119, 114, 214, 202, 192, 180, 341, 317, 301, 281, 262, 12, 249, 123, 121, 117, 113, 215, 206, 195, 185, 347, 330, 308, 291, 272, 520, 10, 435, 115, 111, 109, 211, 203, 196, 187, 353, 332, 313, 298, 283, 531, 381, 17, 427, 212, 208, 205, 201, 193, 186, 177, 169, 320, 303, 286, 268, 514, 377, 16, 335, 199, 197, 191, 189, 181, 174, 333, 321, 305, 289, 275, 521, 379, 371, 11, 668, 184, 183, 179, 175, 344, 331, 314, 304, 290, 277, 530, 383, 373, 366, 10, 652, 346, 171, 168, 164, 318, 309, 299, 287, 276, 263, 513, 375, 368, 362, 6, 648, 322, 316, 312, 307, 302, 292, 284, 269, 261, 512, 376, 370, 364, 359, 4, 620, 300, 296, 294, 288, 282, 273, 266, 515, 380, 374, 369, 365, 361, 357, 2, 1033, 280, 278, 274, 267, 264, 259, 382, 378, 372, 367, 363, 360, 358, 356, 0, 43, 20, 19, 17, 15, 13, 11, 9, 7, 6, 4, 7, 5, 3, 1, 3], t32HB: [1, 10, 8, 20, 12, 20, 16, 32, 14, 12, 24, 0, 28, 16, 24, 16], t33HB: [15, 28, 26, 48, 22, 40, 36, 64, 14, 24, 20, 32, 12, 16, 8, 0], t1l: [1, 4, 3, 5], t2l: [1, 4, 7, 4, 5, 7, 6, 7, 8], t3l: [2, 3, 7, 4, 4, 7, 6, 7, 8], t5l: [1, 4, 7, 8, 4, 5, 8, 9, 7, 8, 9, 10, 8, 8, 9, 10], t6l: [3, 4, 6, 8, 4, 4, 6, 7, 5, 6, 7, 8, 7, 7, 8, 9], t7l: [1, 4, 7, 9, 9, 10, 4, 6, 8, 9, 9, 10, 7, 7, 9, 10, 10, 11, 8, 9, 10, 11, 11, 11, 8, 9, 10, 11, 11, 12, 9, 10, 11, 12, 12, 12], t8l: [2, 4, 7, 9, 9, 10, 4, 4, 6, 10, 10, 10, 7, 6, 8, 10, 10, 11, 9, 10, 10, 11, 11, 12, 9, 9, 10, 11, 12, 12, 10, 10, 11, 11, 13, 13], t9l: [3, 4, 6, 7, 9, 10, 4, 5, 6, 7, 8, 10, 5, 6, 7, 8, 9, 10, 7, 7, 8, 9, 9, 10, 8, 8, 9, 9, 10, 11, 9, 9, 10, 10, 11, 11], t10l: [1, 4, 7, 9, 10, 10, 10, 11, 4, 6, 8, 9, 10, 11, 10, 10, 7, 8, 9, 10, 11, 12, 11, 11, 8, 9, 10, 11, 12, 12, 11, 12, 9, 10, 11, 12, 12, 12, 12, 12, 10, 11, 12, 12, 13, 13, 12, 13, 9, 10, 11, 12, 12, 12, 13, 13, 10, 10, 11, 12, 12, 13, 13, 13], t11l: [2, 4, 6, 8, 9, 10, 9, 10, 4, 5, 6, 8, 10, 10, 9, 10, 6, 7, 8, 9, 10, 11, 10, 10, 8, 8, 9, 11, 10, 12, 10, 11, 9, 10, 10, 11, 11, 12, 11, 12, 9, 10, 11, 12, 12, 13, 12, 13, 9, 9, 9, 10, 11, 12, 12, 12, 9, 9, 10, 11, 12, 12, 12, 12], t12l: [4, 4, 6, 8, 9, 10, 10, 10, 4, 5, 6, 7, 9, 9, 10, 10, 6, 6, 7, 8, 9, 10, 9, 10, 7, 7, 8, 8, 9, 10, 10, 10, 8, 8, 9, 9, 10, 10, 10, 11, 9, 9, 10, 10, 10, 11, 10, 11, 9, 9, 9, 10, 10, 11, 11, 12, 10, 10, 10, 11, 11, 11, 11, 12], t13l: [1, 5, 7, 8, 9, 10, 10, 11, 10, 11, 12, 12, 13, 13, 14, 14, 4, 6, 8, 9, 10, 10, 11, 11, 11, 11, 12, 12, 13, 14, 14, 14, 7, 8, 9, 10, 11, 11, 12, 12, 11, 12, 12, 13, 13, 14, 15, 15, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 15, 15, 9, 9, 11, 11, 12, 12, 13, 13, 12, 13, 13, 14, 14, 15, 15, 16, 10, 10, 11, 12, 12, 12, 13, 13, 13, 13, 14, 13, 15, 15, 16, 16, 10, 11, 12, 12, 13, 13, 13, 13, 13, 14, 14, 14, 15, 15, 16, 16, 11, 11, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 16, 18, 18, 10, 10, 11, 12, 12, 13, 13, 14, 14, 14, 14, 15, 15, 16, 17, 17, 11, 11, 12, 12, 13, 13, 13, 15, 14, 15, 15, 16, 16, 16, 18, 17, 11, 12, 12, 13, 13, 14, 14, 15, 14, 15, 16, 15, 16, 17, 18, 19, 12, 12, 12, 13, 14, 14, 14, 14, 15, 15, 15, 16, 17, 17, 17, 18, 12, 13, 13, 14, 14, 15, 14, 15, 16, 16, 17, 17, 17, 18, 18, 18, 13, 13, 14, 15, 15, 15, 16, 16, 16, 16, 16, 17, 18, 17, 18, 18, 14, 14, 14, 15, 15, 15, 17, 16, 16, 19, 17, 17, 17, 19, 18, 18, 13, 14, 15, 16, 16, 16, 17, 16, 17, 17, 18, 18, 21, 20, 21, 18], t15l: [3, 5, 6, 8, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 14, 5, 5, 7, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 13, 6, 7, 7, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, 13, 13, 7, 8, 8, 9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 8, 8, 9, 9, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 13, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 13, 13, 13, 14, 10, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 14, 14, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 14, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 14, 14, 14, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14, 15, 14, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 15, 12, 12, 11, 12, 12, 12, 13, 13, 13, 13, 13, 13, 14, 14, 15, 15, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 15, 15, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 14, 15, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 15, 15, 15, 15], t16_5l: [1, 5, 7, 9, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 14, 11, 4, 6, 8, 9, 10, 11, 11, 11, 12, 12, 12, 13, 14, 13, 14, 11, 7, 8, 9, 10, 11, 11, 12, 12, 13, 12, 13, 13, 13, 14, 14, 12, 9, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 14, 15, 15, 13, 10, 10, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 12, 10, 10, 11, 11, 12, 13, 13, 14, 13, 14, 14, 15, 15, 15, 16, 13, 11, 11, 11, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 16, 13, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 17, 17, 13, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 13, 12, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 15, 16, 15, 14, 12, 13, 12, 13, 14, 14, 14, 14, 15, 16, 16, 16, 17, 17, 16, 13, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16, 16, 16, 16, 15, 16, 14, 13, 14, 14, 14, 14, 15, 15, 15, 15, 17, 16, 16, 16, 16, 18, 14, 15, 14, 14, 14, 15, 15, 16, 16, 16, 18, 17, 17, 17, 19, 17, 14, 14, 15, 13, 14, 16, 16, 15, 16, 16, 17, 18, 17, 19, 17, 16, 14, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 12], t16l: [1, 5, 7, 9, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 14, 10, 4, 6, 8, 9, 10, 11, 11, 11, 12, 12, 12, 13, 14, 13, 14, 10, 7, 8, 9, 10, 11, 11, 12, 12, 13, 12, 13, 13, 13, 14, 14, 11, 9, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 14, 15, 15, 12, 10, 10, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 11, 10, 10, 11, 11, 12, 13, 13, 14, 13, 14, 14, 15, 15, 15, 16, 12, 11, 11, 11, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 16, 12, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 17, 17, 12, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 12, 12, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 15, 16, 15, 13, 12, 13, 12, 13, 14, 14, 14, 14, 15, 16, 16, 16, 17, 17, 16, 12, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16, 16, 16, 16, 15, 16, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 17, 16, 16, 16, 16, 18, 13, 15, 14, 14, 14, 15, 15, 16, 16, 16, 18, 17, 17, 17, 19, 17, 13, 14, 15, 13, 14, 16, 16, 15, 16, 16, 17, 18, 17, 19, 17, 16, 13, 10, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 10], t24l: [4, 5, 7, 8, 9, 10, 10, 11, 11, 12, 12, 12, 12, 12, 13, 10, 5, 6, 7, 8, 9, 10, 10, 11, 11, 11, 12, 12, 12, 12, 12, 10, 7, 7, 8, 9, 9, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 9, 8, 8, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 12, 12, 12, 12, 13, 9, 10, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 9, 11, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 10, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 10, 12, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 10, 12, 12, 11, 11, 11, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 10, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 10, 13, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 6], t32l: [1, 5, 5, 7, 5, 8, 7, 9, 5, 7, 7, 9, 7, 9, 9, 10], t33l: [4, 5, 5, 6, 5, 6, 6, 7, 5, 6, 6, 7, 6, 7, 7, 8] };
p1.ht = [new y1(0, 0, null, null), new y1(2, 0, p1.t1HB, p1.t1l), new y1(3, 0, p1.t2HB, p1.t2l), new y1(3, 0, p1.t3HB, p1.t3l), new y1(0, 0, null, null), new y1(4, 0, p1.t5HB, p1.t5l), new y1(4, 0, p1.t6HB, p1.t6l), new y1(6, 0, p1.t7HB, p1.t7l), new y1(6, 0, p1.t8HB, p1.t8l), new y1(6, 0, p1.t9HB, p1.t9l), new y1(8, 0, p1.t10HB, p1.t10l), new y1(8, 0, p1.t11HB, p1.t11l), new y1(8, 0, p1.t12HB, p1.t12l), new y1(16, 0, p1.t13HB, p1.t13l), new y1(0, 0, null, p1.t16_5l), new y1(16, 0, p1.t15HB, p1.t15l), new y1(1, 1, p1.t16HB, p1.t16l), new y1(2, 3, p1.t16HB, p1.t16l), new y1(3, 7, p1.t16HB, p1.t16l), new y1(4, 15, p1.t16HB, p1.t16l), new y1(6, 63, p1.t16HB, p1.t16l), new y1(8, 255, p1.t16HB, p1.t16l), new y1(10, 1023, p1.t16HB, p1.t16l), new y1(13, 8191, p1.t16HB, p1.t16l), new y1(4, 15, p1.t24HB, p1.t24l), new y1(5, 31, p1.t24HB, p1.t24l), new y1(6, 63, p1.t24HB, p1.t24l), new y1(7, 127, p1.t24HB, p1.t24l), new y1(8, 255, p1.t24HB, p1.t24l), new y1(9, 511, p1.t24HB, p1.t24l), new y1(11, 2047, p1.t24HB, p1.t24l), new y1(13, 8191, p1.t24HB, p1.t24l), new y1(0, 0, p1.t32HB, p1.t32l), new y1(0, 0, p1.t33HB, p1.t33l)], p1.largetbl = [65540, 327685, 458759, 589832, 655369, 655370, 720906, 720907, 786443, 786444, 786444, 851980, 851980, 851980, 917517, 655370, 262149, 393222, 524295, 589832, 655369, 720906, 720906, 720907, 786443, 786443, 786444, 851980, 917516, 851980, 917516, 655370, 458759, 524295, 589832, 655369, 720905, 720906, 786442, 786443, 851979, 786443, 851979, 851980, 851980, 917516, 917517, 720905, 589832, 589832, 655369, 720905, 720906, 786442, 786442, 786443, 851979, 851979, 917515, 917516, 917516, 983052, 983052, 786441, 655369, 655369, 720905, 720906, 786442, 786442, 851978, 851979, 851979, 917515, 917516, 917516, 983052, 983052, 983053, 720905, 655370, 655369, 720906, 720906, 786442, 851978, 851979, 917515, 851979, 917515, 917516, 983052, 983052, 983052, 1048588, 786441, 720906, 720906, 720906, 786442, 851978, 851979, 851979, 851979, 917515, 917516, 917516, 917516, 983052, 983052, 1048589, 786441, 720907, 720906, 786442, 786442, 851979, 851979, 851979, 917515, 917516, 983052, 983052, 983052, 983052, 1114125, 1114125, 786442, 720907, 786443, 786443, 851979, 851979, 851979, 917515, 917515, 983051, 983052, 983052, 983052, 1048588, 1048589, 1048589, 786442, 786443, 786443, 786443, 851979, 851979, 917515, 917515, 983052, 983052, 983052, 983052, 1048588, 983053, 1048589, 983053, 851978, 786444, 851979, 786443, 851979, 917515, 917516, 917516, 917516, 983052, 1048588, 1048588, 1048589, 1114125, 1114125, 1048589, 786442, 851980, 851980, 851979, 851979, 917515, 917516, 983052, 1048588, 1048588, 1048588, 1048588, 1048589, 1048589, 983053, 1048589, 851978, 851980, 917516, 917516, 917516, 917516, 983052, 983052, 983052, 983052, 1114124, 1048589, 1048589, 1048589, 1048589, 1179661, 851978, 983052, 917516, 917516, 917516, 983052, 983052, 1048588, 1048588, 1048589, 1179661, 1114125, 1114125, 1114125, 1245197, 1114125, 851978, 917517, 983052, 851980, 917516, 1048588, 1048588, 983052, 1048589, 1048589, 1114125, 1179661, 1114125, 1245197, 1114125, 1048589, 851978, 655369, 655369, 655369, 720905, 720905, 786441, 786441, 786441, 851977, 851977, 851977, 851978, 851978, 851978, 851978, 655366], p1.table23 = [65538, 262147, 458759, 262148, 327684, 458759, 393222, 458759, 524296], p1.table56 = [65539, 262148, 458758, 524296, 262148, 327684, 524294, 589831, 458757, 524294, 589831, 655368, 524295, 524295, 589832, 655369], p1.bitrate_table = [[0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1], [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], [0, 8, 16, 24, 32, 40, 48, 56, 64, -1, -1, -1, -1, -1, -1, -1]], p1.samplerate_table = [[22050, 24e3, 16e3, -1], [44100, 48e3, 32e3, -1], [11025, 12e3, 8e3, -1]], p1.scfsi_band = [0, 6, 11, 16, 21];
var Gt, Kt, ut, Zt, Ut, Qt, ct, Wt, St = p1;
function m2() {
  if (Kt)
    return Gt;
  Kt = 1;
  var H = f2, x = C1, O = x.VbrMode, e1 = x.Float, l1 = x.Util, J = x.new_float, j = x.new_int, p = x.assert, q = z1(), o = b2, e = ot;
  function d() {
    var w = At(), z = null, P = null, R = null;
    this.setModules = function(c, S, E) {
      z = c, P = S, R = E;
    }, this.IPOW20 = function(c) {
      return p(0 <= c && c < d.Q_MAX), t1[c];
    };
    var _ = 2220446049250313e-31, m = d.IXMAX_VAL + 2, V = d.Q_MAX, g = d.Q_MAX2;
    d.LARGE_BITS;
    var W = 100;
    this.nr_of_sfb_block = [[[6, 5, 5, 5], [9, 9, 9, 9], [6, 9, 9, 9]], [[6, 5, 7, 3], [9, 9, 12, 6], [6, 9, 12, 6]], [[11, 10, 0, 0], [18, 18, 0, 0], [15, 18, 0, 0]], [[7, 7, 7, 0], [12, 12, 12, 0], [6, 15, 12, 0]], [[6, 6, 6, 3], [12, 9, 9, 6], [6, 12, 9, 6]], [[8, 8, 5, 0], [15, 12, 9, 0], [6, 18, 9, 0]]];
    var Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 2, 0];
    this.pretab = Y, this.sfBandIndex = [new H([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0, 4, 8, 12, 18, 24, 32, 42, 56, 74, 100, 132, 174, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new H([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 114, 136, 162, 194, 232, 278, 332, 394, 464, 540, 576], [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 136, 180, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new H([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new H([0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 52, 62, 74, 90, 110, 134, 162, 196, 238, 288, 342, 418, 576], [0, 4, 8, 12, 16, 22, 30, 40, 52, 66, 84, 106, 136, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new H([0, 4, 8, 12, 16, 20, 24, 30, 36, 42, 50, 60, 72, 88, 106, 128, 156, 190, 230, 276, 330, 384, 576], [0, 4, 8, 12, 16, 22, 28, 38, 50, 64, 80, 100, 126, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new H([0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 54, 66, 82, 102, 126, 156, 194, 240, 296, 364, 448, 550, 576], [0, 4, 8, 12, 16, 22, 30, 42, 58, 78, 104, 138, 180, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new H([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new H([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new H([0, 12, 24, 36, 48, 60, 72, 88, 108, 132, 160, 192, 232, 280, 336, 400, 476, 566, 568, 570, 572, 574, 576], [0, 8, 16, 24, 36, 52, 72, 96, 124, 160, 162, 164, 166, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0])];
    var i1 = J(V + g + 1), t1 = J(V), n1 = J(m), r1 = J(m);
    function G(c, S) {
      var E = R.ATHformula(S, c);
      return E -= W, E = Math.pow(10, E / 10 + c.ATHlower);
    }
    function _1(c) {
      this.s = c;
    }
    this.adj43 = r1, this.iteration_init = function(c) {
      var S, E = c.internal_flags, h = E.l3_side;
      if (E.iteration_init_init == 0) {
        for (E.iteration_init_init = 1, h.main_data_begin = 0, function(B) {
          for (var X = B.internal_flags.ATH.l, n = B.internal_flags.ATH.psfb21, I = B.internal_flags.ATH.s, L = B.internal_flags.ATH.psfb12, Q = B.internal_flags, $ = B.out_samplerate, y = 0; y < q.SBMAX_l; y++) {
            var D = Q.scalefac_band.l[y], t = Q.scalefac_band.l[y + 1];
            X[y] = e1.MAX_VALUE;
            for (var s = D; s < t; s++) {
              var r = G(B, s * $ / 1152);
              X[y] = Math.min(X[y], r);
            }
          }
          for (y = 0; y < q.PSFB21; y++)
            for (D = Q.scalefac_band.psfb21[y], t = Q.scalefac_band.psfb21[y + 1], n[y] = e1.MAX_VALUE, s = D; s < t; s++)
              r = G(B, s * $ / 1152), n[y] = Math.min(n[y], r);
          for (y = 0; y < q.SBMAX_s; y++) {
            for (D = Q.scalefac_band.s[y], t = Q.scalefac_band.s[y + 1], I[y] = e1.MAX_VALUE, s = D; s < t; s++)
              r = G(B, s * $ / 384), I[y] = Math.min(I[y], r);
            I[y] *= Q.scalefac_band.s[y + 1] - Q.scalefac_band.s[y];
          }
          for (y = 0; y < q.PSFB12; y++) {
            for (D = Q.scalefac_band.psfb12[y], t = Q.scalefac_band.psfb12[y + 1], L[y] = e1.MAX_VALUE, s = D; s < t; s++)
              r = G(B, s * $ / 384), L[y] = Math.min(L[y], r);
            L[y] *= Q.scalefac_band.s[13] - Q.scalefac_band.s[12];
          }
          if (B.noATH) {
            for (y = 0; y < q.SBMAX_l; y++)
              X[y] = 1e-20;
            for (y = 0; y < q.PSFB21; y++)
              n[y] = 1e-20;
            for (y = 0; y < q.SBMAX_s; y++)
              I[y] = 1e-20;
            for (y = 0; y < q.PSFB12; y++)
              L[y] = 1e-20;
          }
          Q.ATH.floor = 10 * Math.log10(G(B, -1));
        }(c), n1[0] = 0, S = 1; S < m; S++)
          n1[S] = Math.pow(S, 4 / 3);
        for (S = 0; S < m - 1; S++)
          r1[S] = S + 1 - Math.pow(0.5 * (n1[S] + n1[S + 1]), 0.75);
        for (r1[S] = 0.5, S = 0; S < V; S++)
          t1[S] = Math.pow(2, -0.1875 * (S - 210));
        for (S = 0; S <= V + g; S++)
          i1[S] = Math.pow(2, 0.25 * (S - 210 - g));
        var U, v, u, i;
        for (z.huffman_init(E), (S = c.exp_nspsytune >> 2 & 63) >= 32 && (S -= 64), U = Math.pow(10, S / 4 / 10), (S = c.exp_nspsytune >> 8 & 63) >= 32 && (S -= 64), v = Math.pow(10, S / 4 / 10), (S = c.exp_nspsytune >> 14 & 63) >= 32 && (S -= 64), u = Math.pow(10, S / 4 / 10), (S = c.exp_nspsytune >> 20 & 63) >= 32 && (S -= 64), i = u * Math.pow(10, S / 4 / 10), S = 0; S < q.SBMAX_l; S++)
          a = S <= 6 ? U : S <= 13 ? v : S <= 20 ? u : i, E.nsPsy.longfact[S] = a;
        for (S = 0; S < q.SBMAX_s; S++) {
          var a;
          a = S <= 5 ? U : S <= 10 ? v : S <= 11 ? u : i, E.nsPsy.shortfact[S] = a;
        }
      }
    }, this.on_pe = function(c, S, E, h, U, v) {
      var u, i, a = c.internal_flags, B = 0, X = j(2), n = new o(B), I = P.ResvMaxBits(c, h, n, v), L = (B = n.bits) + I;
      for (L > e.MAX_BITS_PER_GRANULE && (L = e.MAX_BITS_PER_GRANULE), u = 0, i = 0; i < a.channels_out; ++i)
        E[i] = Math.min(e.MAX_BITS_PER_CHANNEL, B / a.channels_out), X[i] = 0 | E[i] * S[U][i] / 700 - E[i], X[i] > 3 * h / 4 && (X[i] = 3 * h / 4), X[i] < 0 && (X[i] = 0), X[i] + E[i] > e.MAX_BITS_PER_CHANNEL && (X[i] = Math.max(0, e.MAX_BITS_PER_CHANNEL - E[i])), u += X[i];
      if (u > I)
        for (i = 0; i < a.channels_out; ++i)
          X[i] = I * X[i] / u;
      for (i = 0; i < a.channels_out; ++i)
        E[i] += X[i], I -= X[i];
      for (u = 0, i = 0; i < a.channels_out; ++i)
        u += E[i];
      if (u > e.MAX_BITS_PER_GRANULE)
        for (i = 0; i < a.channels_out; ++i)
          E[i] *= e.MAX_BITS_PER_GRANULE, E[i] /= u, E[i];
      return L;
    }, this.reduce_side = function(c, S, E, h) {
      p(c[0] + c[1] <= e.MAX_BITS_PER_GRANULE);
      var U = 0.33 * (0.5 - S) / 0.5;
      U < 0 && (U = 0), U > 0.5 && (U = 0.5);
      var v = 0 | 0.5 * U * (c[0] + c[1]);
      v > e.MAX_BITS_PER_CHANNEL - c[0] && (v = e.MAX_BITS_PER_CHANNEL - c[0]), v < 0 && (v = 0), c[1] >= 125 && (c[1] - v > 125 ? (c[0] < E && (c[0] += v), c[1] -= v) : (c[0] += c[1] - 125, c[1] = 125)), (v = c[0] + c[1]) > h && (c[0] = h * c[0] / v, c[1] = h * c[1] / v), p(c[0] <= e.MAX_BITS_PER_CHANNEL), p(c[1] <= e.MAX_BITS_PER_CHANNEL), p(c[0] + c[1] <= e.MAX_BITS_PER_GRANULE);
    }, this.athAdjust = function(c, S, E) {
      var h = 90.30873362, U = l1.FAST_LOG10_X(S, 10), v = c * c, u = 0;
      return U -= E, v > 1e-20 && (u = 1 + l1.FAST_LOG10_X(v, 10 / h)), u < 0 && (u = 0), U *= u, U += E + h - 94.82444863, Math.pow(10, 0.1 * U);
    }, this.calc_xmin = function(c, S, E, h) {
      var U, v = 0, u = c.internal_flags, i = 0, a = 0, B = u.ATH, X = E.xr, n = c.VBR == O.vbr_mtrh ? 1 : 0, I = u.masking_lower;
      for (c.VBR != O.vbr_mtrh && c.VBR != O.vbr_mt || (I = 1), U = 0; U < E.psy_lmax; U++) {
        r = (s = c.VBR == O.vbr_rh || c.VBR == O.vbr_mtrh ? athAdjust(B.adjust, B.l[U], B.floor) : B.adjust * B.l[U]) / (y = E.width[U]), l = _, T = y >> 1, A = 0;
        do
          A += M = X[i] * X[i], l += M < r ? M : r, A += k = X[++i] * X[i], l += k < r ? k : r, i++;
        while (--T > 0);
        A > s && a++, U == q.SBPSY_l && l < (b = s * u.nsPsy.longfact[U]) && (l = b), n != 0 && (s = l), !c.ATHonly && (f = S.en.l[U]) > 0 && (b = A * S.thm.l[U] * I / f, n != 0 && (b *= u.nsPsy.longfact[U]), s < b && (s = b)), h[v++] = n != 0 ? s : s * u.nsPsy.longfact[U];
      }
      var L = 575;
      if (E.block_type != q.SHORT_TYPE)
        for (var Q = 576; Q-- != 0 && w.EQ(X[Q], 0); )
          L = Q;
      E.max_nonzero_coeff = L;
      for (var $ = E.sfb_smin; U < E.psymax; $++, U += 3) {
        var y, D, t;
        for (t = c.VBR == O.vbr_rh || c.VBR == O.vbr_mtrh ? athAdjust(B.adjust, B.s[$], B.floor) : B.adjust * B.s[$], y = E.width[U], D = 0; D < 3; D++) {
          var s, r, l, f, b, A = 0, T = y >> 1;
          r = t / y, l = _;
          do {
            var M, k;
            A += M = X[i] * X[i], l += M < r ? M : r, A += k = X[++i] * X[i], l += k < r ? k : r, i++;
          } while (--T > 0);
          A > t && a++, $ == q.SBPSY_s && l < (b = t * u.nsPsy.shortfact[$]) && (l = b), s = n != 0 ? l : t, !c.ATHonly && !c.ATHshort && (f = S.en.s[$][D]) > 0 && (b = A * S.thm.s[$][D] * I / f, n != 0 && (b *= u.nsPsy.shortfact[$]), s < b && (s = b)), h[v++] = n != 0 ? s : s * u.nsPsy.shortfact[$];
        }
        c.useTemporal && (h[v - 3] > h[v - 3 + 1] && (h[v - 3 + 1] += (h[v - 3] - h[v - 3 + 1]) * u.decay), h[v - 3 + 1] > h[v - 3 + 2] && (h[v - 3 + 2] += (h[v - 3 + 1] - h[v - 3 + 2]) * u.decay));
      }
      return a;
    }, this.calc_noise_core = function(c, S, E, h) {
      var U = 0, v = S.s, u = c.l3_enc;
      if (v > c.count1)
        for (; E-- != 0; )
          a = c.xr[v], v++, U += a * a, a = c.xr[v], v++, U += a * a;
      else if (v > c.big_values) {
        var i = J(2);
        for (i[0] = 0, i[1] = h; E-- != 0; )
          a = Math.abs(c.xr[v]) - i[u[v]], v++, U += a * a, a = Math.abs(c.xr[v]) - i[u[v]], v++, U += a * a;
      } else
        for (; E-- != 0; ) {
          var a;
          a = Math.abs(c.xr[v]) - n1[u[v]] * h, v++, U += a * a, a = Math.abs(c.xr[v]) - n1[u[v]] * h, v++, U += a * a;
        }
      return S.s = v, U;
    }, this.calc_noise = function(c, S, E, h, U) {
      var v, u, i, a = 0, B = 0, X = 0, n = 0, I = 0, L = -20, Q = 0, $ = c.scalefac, y = 0;
      for (h.over_SSD = 0, v = 0; v < c.psymax; v++) {
        var D, t = c.global_gain - ($[y++] + (c.preflag != 0 ? Y[v] : 0) << c.scalefac_scale + 1) - 8 * c.subblock_gain[c.window[v]], s = 0;
        if (U != null && U.step[v] == t)
          s = U.noise[v], Q += c.width[v], E[a++] = s / S[B++], s = U.noise_log[v];
        else {
          var r, l = (p(0 <= (i = t) + d.Q_MAX2 && i < d.Q_MAX), i1[i + d.Q_MAX2]);
          u = c.width[v] >> 1, Q + c.width[v] > c.max_nonzero_coeff && (u = (r = c.max_nonzero_coeff - Q + 1) > 0 ? r >> 1 : 0);
          var f = new _1(Q);
          s = this.calc_noise_core(c, f, u, l), Q = f.s, U != null && (U.step[v] = t, U.noise[v] = s), s = E[a++] = s / S[B++], s = l1.FAST_LOG10(Math.max(s, 1e-20)), U != null && (U.noise_log[v] = s);
        }
        U != null && (U.global_gain = c.global_gain), I += s, s > 0 && (D = Math.max(0 | 10 * s + 0.5, 1), h.over_SSD += D * D, X++, n += s), L = Math.max(L, s);
      }
      return h.over_count = X, h.tot_noise = I, h.over_noise = n, h.max_noise = L, X;
    }, this.set_pinfo = function(c, S, E, h, U) {
      var v, u, i, a, B, X = c.internal_flags, n = S.scalefac_scale == 0 ? 0.5 : 1, I = S.scalefac, L = J(L3Side.SFBMAX), Q = J(L3Side.SFBMAX), $ = new CalcNoiseResult();
      calc_xmin(c, E, S, L), calc_noise(S, L, Q, $, null);
      var y = 0;
      for (u = S.sfb_lmax, S.block_type != q.SHORT_TYPE && S.mixed_block_flag == 0 && (u = 22), v = 0; v < u; v++) {
        var D = X.scalefac_band.l[v], t = (s = X.scalefac_band.l[v + 1]) - D;
        for (a = 0; y < s; y++)
          a += S.xr[y] * S.xr[y];
        a /= t, B = 1e15, X.pinfo.en[h][U][v] = B * a, X.pinfo.xfsf[h][U][v] = B * L[v] * Q[v] / t, E.en.l[v] > 0 && !c.ATHonly ? a /= E.en.l[v] : a = 0, X.pinfo.thr[h][U][v] = B * Math.max(a * E.thm.l[v], X.ATH.l[v]), X.pinfo.LAMEsfb[h][U][v] = 0, S.preflag != 0 && v >= 11 && (X.pinfo.LAMEsfb[h][U][v] = -n * Y[v]), v < q.SBPSY_l && (p(I[v] >= 0), X.pinfo.LAMEsfb[h][U][v] -= n * I[v]);
      }
      if (S.block_type == q.SHORT_TYPE)
        for (u = v, v = S.sfb_smin; v < q.SBMAX_s; v++) {
          D = X.scalefac_band.s[v], t = (s = X.scalefac_band.s[v + 1]) - D;
          for (var s, r = 0; r < 3; r++) {
            for (a = 0, i = D; i < s; i++)
              a += S.xr[y] * S.xr[y], y++;
            a = Math.max(a / t, 1e-20), B = 1e15, X.pinfo.en_s[h][U][3 * v + r] = B * a, X.pinfo.xfsf_s[h][U][3 * v + r] = B * L[u] * Q[u] / t, E.en.s[v][r] > 0 ? a /= E.en.s[v][r] : a = 0, (c.ATHonly || c.ATHshort) && (a = 0), X.pinfo.thr_s[h][U][3 * v + r] = B * Math.max(a * E.thm.s[v][r], X.ATH.s[v]), X.pinfo.LAMEsfb_s[h][U][3 * v + r] = -2 * S.subblock_gain[r], v < q.SBPSY_s && (X.pinfo.LAMEsfb_s[h][U][3 * v + r] -= n * I[u]), u++;
          }
        }
      X.pinfo.LAMEqss[h][U] = S.global_gain, X.pinfo.LAMEmainbits[h][U] = S.part2_3_length + S.part2_length, X.pinfo.LAMEsfbits[h][U] = S.part2_length, X.pinfo.over[h][U] = $.over_count, X.pinfo.max_noise[h][U] = 10 * $.max_noise, X.pinfo.over_noise[h][U] = 10 * $.over_noise, X.pinfo.tot_noise[h][U] = 10 * $.tot_noise, X.pinfo.over_SSD[h][U] = $.over_SSD;
    };
  }
  return d.Q_MAX = 257, d.Q_MAX2 = 116, d.LARGE_BITS = 1e5, d.IXMAX_VAL = 8206, Gt = d;
}
function p2() {
  if (Zt)
    return ut;
  Zt = 1;
  var H = C1, x = H.System, O = H.Arrays, e1 = H.new_int, l1 = H.assert, J = z1(), j = St, p = dt, q = m2();
  return ut = function o() {
    var e = null;
    function d(_1) {
      this.bits = 0 | _1;
    }
    this.qupvt = null, this.setModules = function(_1) {
      this.qupvt = _1, e = _1;
    };
    var w = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 1], [1, 1], [1, 1], [1, 2], [2, 2], [2, 3], [2, 3], [3, 4], [3, 4], [3, 4], [4, 5], [4, 5], [4, 6], [5, 6], [5, 6], [5, 7], [6, 7], [6, 7]];
    function z(_1, c, S, E, h, U) {
      var v = 0.5946 / c;
      for (_1 >>= 1; _1-- != 0; )
        h[U++] = v > S[E++] ? 0 : 1, h[U++] = v > S[E++] ? 0 : 1;
    }
    function P(_1, c, S, E, h, U) {
      var v = (_1 >>= 1) % 2;
      for (_1 >>= 1; _1-- != 0; ) {
        var u, i, a, B, X, n, I, L;
        u = S[E++] * c, i = S[E++] * c, X = 0 | u, a = S[E++] * c, n = 0 | i, B = S[E++] * c, I = 0 | a, u += e.adj43[X], L = 0 | B, i += e.adj43[n], h[U++] = 0 | u, a += e.adj43[I], h[U++] = 0 | i, B += e.adj43[L], h[U++] = 0 | a, h[U++] = 0 | B;
      }
      v != 0 && (X = 0 | (u = S[E++] * c), n = 0 | (i = S[E++] * c), u += e.adj43[X], i += e.adj43[n], h[U++] = 0 | u, h[U++] = 0 | i);
    }
    var R = [1, 2, 5, 7, 7, 10, 10, 13, 13, 13, 13, 13, 13, 13, 13];
    function _(_1, c, S, E) {
      var h = function(u, i, a) {
        var B = 0, X = 0;
        do {
          var n = u[i++], I = u[i++];
          B < n && (B = n), X < I && (X = I);
        } while (i < a);
        return B < X && (B = X), B;
      }(_1, c, S);
      switch (h) {
        case 0:
          return h;
        case 1:
          return function(u, i, a, B) {
            var X = 0, n = j.ht[1].hlen;
            do {
              var I = 2 * u[i + 0] + u[i + 1];
              i += 2, X += n[I];
            } while (i < a);
            return B.bits += X, 1;
          }(_1, c, S, E);
        case 2:
        case 3:
          return function(u, i, a, B, X) {
            var n, I, L = 0, Q = j.ht[B].xlen;
            I = B == 2 ? j.table23 : j.table56;
            do {
              var $ = u[i + 0] * Q + u[i + 1];
              i += 2, L += I[$];
            } while (i < a);
            return n = 65535 & L, (L >>= 16) > n && (L = n, B++), X.bits += L, B;
          }(_1, c, S, R[h - 1], E);
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          return function(u, i, a, B, X) {
            var n = 0, I = 0, L = 0, Q = j.ht[B].xlen, $ = j.ht[B].hlen, y = j.ht[B + 1].hlen, D = j.ht[B + 2].hlen;
            do {
              var t = u[i + 0] * Q + u[i + 1];
              i += 2, n += $[t], I += y[t], L += D[t];
            } while (i < a);
            var s = B;
            return n > I && (n = I, s++), n > L && (n = L, s = B + 2), X.bits += n, s;
          }(_1, c, S, R[h - 1], E);
        default:
          if (h > q.IXMAX_VAL)
            return E.bits = q.LARGE_BITS, -1;
          var U, v;
          for (h -= 15, U = 24; U < 32 && !(j.ht[U].linmax >= h); U++)
            ;
          for (v = U - 8; v < 24 && !(j.ht[v].linmax >= h); v++)
            ;
          return function(u, i, a, B, X, n) {
            var I, L = 65536 * j.ht[B].xlen + j.ht[X].xlen, Q = 0;
            do {
              var $ = u[i++], y = u[i++];
              $ != 0 && ($ > 14 && ($ = 15, Q += L), $ *= 16), y != 0 && (y > 14 && (y = 15, Q += L), $ += y), Q += j.largetbl[$];
            } while (i < a);
            return I = 65535 & Q, (Q >>= 16) > I && (Q = I, B = X), n.bits += Q, B;
          }(_1, c, S, v, U, E);
      }
    }
    function m(_1, c, S, E, h, U, v, u) {
      for (var i = c.big_values, a = 2; a < J.SBMAX_l + 1; a++) {
        var B = _1.scalefac_band.l[a];
        if (B >= i)
          break;
        var X = h[a - 2] + c.count1bits;
        if (S.part2_3_length <= X)
          break;
        var n = new d(X), I = _(E, B, i, n);
        X = n.bits, S.part2_3_length <= X || (S.assign(c), S.part2_3_length = X, S.region0_count = U[a - 2], S.region1_count = a - 2 - U[a - 2], S.table_select[0] = v[a - 2], S.table_select[1] = u[a - 2], S.table_select[2] = I);
      }
    }
    this.noquant_count_bits = function(_1, c, S) {
      var E = c.l3_enc, h = Math.min(576, c.max_nonzero_coeff + 2 >> 1 << 1);
      for (S != null && (S.sfb_count1 = 0); h > 1 && !(E[h - 1] | E[h - 2]); h -= 2)
        ;
      c.count1 = h;
      for (var U = 0, v = 0; h > 3; h -= 4) {
        var u;
        if ((2147483647 & (E[h - 1] | E[h - 2] | E[h - 3] | E[h - 4])) > 1)
          break;
        u = 2 * (2 * (2 * E[h - 4] + E[h - 3]) + E[h - 2]) + E[h - 1], U += j.t32l[u], v += j.t33l[u];
      }
      var i = U;
      if (c.count1table_select = 0, U > v && (i = v, c.count1table_select = 1), c.count1bits = i, c.big_values = h, h == 0)
        return i;
      if (c.block_type == J.SHORT_TYPE)
        (U = 3 * _1.scalefac_band.s[3]) > c.big_values && (U = c.big_values), v = c.big_values;
      else if (c.block_type == J.NORM_TYPE) {
        if (U = c.region0_count = _1.bv_scf[h - 2], v = c.region1_count = _1.bv_scf[h - 1], l1(U + v + 2 < J.SBPSY_l), v = _1.scalefac_band.l[U + v + 2], U = _1.scalefac_band.l[U + 1], v < h) {
          var a = new d(i);
          c.table_select[2] = _(E, v, h, a), i = a.bits;
        }
      } else
        c.region0_count = 7, c.region1_count = J.SBMAX_l - 1 - 7 - 1, (U = _1.scalefac_band.l[8]) > (v = h) && (U = v);
      if (U = Math.min(U, h), v = Math.min(v, h), 0 < U && (a = new d(i), c.table_select[0] = _(E, 0, U, a), i = a.bits), U < v && (a = new d(i), c.table_select[1] = _(E, U, v, a), i = a.bits), _1.use_best_huffman == 2 && (c.part2_3_length = i, best_huffman_divide(_1, c), i = c.part2_3_length), S != null && c.block_type == J.NORM_TYPE) {
        for (var B = 0; _1.scalefac_band.l[B] < c.big_values; )
          B++;
        S.sfb_count1 = B;
      }
      return i;
    }, this.count_bits = function(_1, c, S, E) {
      var h = S.l3_enc, U = q.IXMAX_VAL / e.IPOW20(S.global_gain);
      if (S.xrpow_max > U)
        return q.LARGE_BITS;
      if (function(n, I, L, Q, $) {
        var y, D, t, s = 0, r = 0, l = 0, f = 0, b = I, A = 0, T = b, M = 0, k = n, K = 0;
        for (t = $ != null && Q.global_gain == $.global_gain, D = Q.block_type == J.SHORT_TYPE ? 38 : 21, y = 0; y <= D; y++) {
          var N = -1;
          if ((t || Q.block_type == J.NORM_TYPE) && (N = Q.global_gain - (Q.scalefac[y] + (Q.preflag != 0 ? e.pretab[y] : 0) << Q.scalefac_scale + 1) - 8 * Q.subblock_gain[Q.window[y]]), l1(Q.width[y] >= 0), t && $.step[y] == N)
            r != 0 && (P(r, L, k, K, T, M), r = 0), l != 0 && (z(l, L, k, K, T, M), l = 0);
          else {
            var a1, C = Q.width[y];
            if (s + Q.width[y] > Q.max_nonzero_coeff && (a1 = Q.max_nonzero_coeff - s + 1, O.fill(I, Q.max_nonzero_coeff, 576, 0), (C = a1) < 0 && (C = 0), y = D + 1), r == 0 && l == 0 && (T = b, M = A, k = n, K = f), $ != null && $.sfb_count1 > 0 && y >= $.sfb_count1 && $.step[y] > 0 && N >= $.step[y] ? (r != 0 && (P(r, L, k, K, T, M), r = 0, T = b, M = A, k = n, K = f), l += C) : (l != 0 && (z(l, L, k, K, T, M), l = 0, T = b, M = A, k = n, K = f), r += C), C <= 0) {
              l != 0 && (z(l, L, k, K, T, M), l = 0), r != 0 && (P(r, L, k, K, T, M), r = 0);
              break;
            }
          }
          y <= D && (A += Q.width[y], f += Q.width[y], s += Q.width[y]);
        }
        r != 0 && (P(r, L, k, K, T, M), r = 0), l != 0 && (z(l, L, k, K, T, M), l = 0);
      }(c, h, e.IPOW20(S.global_gain), S, E), (2 & _1.substep_shaping) != 0)
        for (var v = 0, u = S.global_gain + S.scalefac_scale, i = 0.634521682242439 / e.IPOW20(u), a = 0; a < S.sfbmax; a++) {
          var B, X = S.width[a];
          if (_1.pseudohalf[a] == 0)
            v += X;
          else
            for (B = v, v += X; B < v; ++B)
              h[B] = c[B] >= i ? h[B] : 0;
        }
      return this.noquant_count_bits(_1, S, E);
    }, this.best_huffman_divide = function(_1, c) {
      var S = new p(), E = c.l3_enc, h = e1(23), U = e1(23), v = e1(23), u = e1(23);
      if (c.block_type != J.SHORT_TYPE || _1.mode_gr != 1) {
        S.assign(c), c.block_type == J.NORM_TYPE && (function(I, L, Q, $, y, D, t) {
          for (var s = L.big_values, r = 0; r <= 22; r++)
            $[r] = q.LARGE_BITS;
          for (r = 0; r < 16; r++) {
            var l = I.scalefac_band.l[r + 1];
            if (l >= s)
              break;
            var f = 0, b = new d(f), A = _(Q, 0, l, b);
            f = b.bits;
            for (var T = 0; T < 8; T++) {
              var M = I.scalefac_band.l[r + T + 2];
              if (M >= s)
                break;
              var k = f, K = _(Q, l, M, b = new d(k));
              k = b.bits, $[r + T] > k && ($[r + T] = k, y[r + T] = r, D[r + T] = A, t[r + T] = K);
            }
          }
        }(_1, c, E, h, U, v, u), m(_1, S, c, E, h, U, v, u));
        var i = S.big_values;
        if (!(i == 0 || (E[i - 2] | E[i - 1]) > 1 || (i = c.count1 + 2) > 576)) {
          S.assign(c), S.count1 = i;
          for (var a = 0, B = 0; i > S.big_values; i -= 4) {
            var X = 2 * (2 * (2 * E[i - 4] + E[i - 3]) + E[i - 2]) + E[i - 1];
            a += j.t32l[X], B += j.t33l[X];
          }
          if (S.big_values = i, S.count1table_select = 0, a > B && (a = B, S.count1table_select = 1), S.count1bits = a, S.block_type == J.NORM_TYPE)
            m(_1, S, c, E, h, U, v, u);
          else {
            if (S.part2_3_length = a, (a = _1.scalefac_band.l[8]) > i && (a = i), a > 0) {
              var n = new d(S.part2_3_length);
              S.table_select[0] = _(E, 0, a, n), S.part2_3_length = n.bits;
            }
            i > a && (n = new d(S.part2_3_length), S.table_select[1] = _(E, a, i, n), S.part2_3_length = n.bits), c.part2_3_length > S.part2_3_length && c.assign(S);
          }
        }
      }
    };
    var V = [1, 1, 1, 1, 8, 2, 2, 2, 4, 4, 4, 8, 8, 8, 16, 16], g = [1, 2, 4, 8, 1, 2, 4, 8, 2, 4, 8, 2, 4, 8, 4, 8], W = [0, 0, 0, 0, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4], Y = [0, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 2, 3];
    o.slen1_tab = W, o.slen2_tab = Y, this.best_scalefac_store = function(_1, c, S, E) {
      var h, U, v, u, i = E.tt[c][S], a = 0;
      for (v = 0, h = 0; h < i.sfbmax; h++) {
        var B = i.width[h];
        for (v += B, u = -B; u < 0 && i.l3_enc[u + v] == 0; u++)
          ;
        u == 0 && (i.scalefac[h] = a = -2);
      }
      if (i.scalefac_scale == 0 && i.preflag == 0) {
        var X = 0;
        for (h = 0; h < i.sfbmax; h++)
          i.scalefac[h] > 0 && (X |= i.scalefac[h]);
        if (!(1 & X) && X != 0) {
          for (h = 0; h < i.sfbmax; h++)
            i.scalefac[h] > 0 && (i.scalefac[h] >>= 1);
          i.scalefac_scale = a = 1;
        }
      }
      if (i.preflag == 0 && i.block_type != J.SHORT_TYPE && _1.mode_gr == 2) {
        for (h = 11; h < J.SBPSY_l && !(i.scalefac[h] < e.pretab[h] && i.scalefac[h] != -2); h++)
          ;
        if (h == J.SBPSY_l) {
          for (h = 11; h < J.SBPSY_l; h++)
            i.scalefac[h] > 0 && (i.scalefac[h] -= e.pretab[h]);
          i.preflag = a = 1;
        }
      }
      for (U = 0; U < 4; U++)
        E.scfsi[S][U] = 0;
      for (_1.mode_gr == 2 && c == 1 && E.tt[0][S].block_type != J.SHORT_TYPE && E.tt[1][S].block_type != J.SHORT_TYPE && (function(n, I) {
        for (var L, Q = I.tt[1][n], $ = I.tt[0][n], y = 0; y < j.scfsi_band.length - 1; y++) {
          for (L = j.scfsi_band[y]; L < j.scfsi_band[y + 1] && !($.scalefac[L] != Q.scalefac[L] && Q.scalefac[L] >= 0); L++)
            ;
          if (L == j.scfsi_band[y + 1]) {
            for (L = j.scfsi_band[y]; L < j.scfsi_band[y + 1]; L++)
              Q.scalefac[L] = -1;
            I.scfsi[n][y] = 1;
          }
        }
        var D = 0, t = 0;
        for (L = 0; L < 11; L++)
          Q.scalefac[L] != -1 && (t++, D < Q.scalefac[L] && (D = Q.scalefac[L]));
        for (var s = 0, r = 0; L < J.SBPSY_l; L++)
          Q.scalefac[L] != -1 && (r++, s < Q.scalefac[L] && (s = Q.scalefac[L]));
        for (y = 0; y < 16; y++)
          if (D < V[y] && s < g[y]) {
            var l = W[y] * t + Y[y] * r;
            Q.part2_length > l && (Q.part2_length = l, Q.scalefac_compress = y);
          }
      }(S, E), a = 0), h = 0; h < i.sfbmax; h++)
        i.scalefac[h] == -2 && (i.scalefac[h] = 0);
      a != 0 && (_1.mode_gr == 2 ? this.scale_bitcount(i) : this.scale_bitcount_lsf(_1, i));
    };
    var i1 = [0, 18, 36, 54, 54, 36, 54, 72, 54, 72, 90, 72, 90, 108, 108, 126], t1 = [0, 18, 36, 54, 51, 35, 53, 71, 52, 70, 88, 69, 87, 105, 104, 122], n1 = [0, 10, 20, 30, 33, 21, 31, 41, 32, 42, 52, 43, 53, 63, 64, 74];
    this.scale_bitcount = function(_1) {
      var c, S, E, h = 0, U = 0, v = _1.scalefac;
      if (l1(function(u, i) {
        for (var a = 0; a < i; ++a)
          if (u[a] < 0)
            return !1;
        return !0;
      }(v, _1.sfbmax)), _1.block_type == J.SHORT_TYPE)
        E = i1, _1.mixed_block_flag != 0 && (E = t1);
      else if (E = n1, _1.preflag == 0) {
        for (S = 11; S < J.SBPSY_l && !(v[S] < e.pretab[S]); S++)
          ;
        if (S == J.SBPSY_l)
          for (_1.preflag = 1, S = 11; S < J.SBPSY_l; S++)
            v[S] -= e.pretab[S];
      }
      for (S = 0; S < _1.sfbdivide; S++)
        h < v[S] && (h = v[S]);
      for (; S < _1.sfbmax; S++)
        U < v[S] && (U = v[S]);
      for (_1.part2_length = q.LARGE_BITS, c = 0; c < 16; c++)
        h < V[c] && U < g[c] && _1.part2_length > E[c] && (_1.part2_length = E[c], _1.scalefac_compress = c);
      return _1.part2_length == q.LARGE_BITS;
    };
    var r1 = [[15, 15, 7, 7], [15, 15, 7, 0], [7, 3, 0, 0], [15, 31, 31, 0], [7, 7, 7, 0], [3, 3, 0, 0]];
    this.scale_bitcount_lsf = function(_1, c) {
      var S, E, h, U, v, u, i, a, B = e1(4), X = c.scalefac;
      for (S = c.preflag != 0 ? 2 : 0, i = 0; i < 4; i++)
        B[i] = 0;
      if (c.block_type == J.SHORT_TYPE) {
        E = 1;
        var n = e.nr_of_sfb_block[S][E];
        for (a = 0, h = 0; h < 4; h++)
          for (U = n[h] / 3, i = 0; i < U; i++, a++)
            for (v = 0; v < 3; v++)
              X[3 * a + v] > B[h] && (B[h] = X[3 * a + v]);
      } else
        for (E = 0, n = e.nr_of_sfb_block[S][E], a = 0, h = 0; h < 4; h++)
          for (U = n[h], i = 0; i < U; i++, a++)
            X[a] > B[h] && (B[h] = X[a]);
      for (u = !1, h = 0; h < 4; h++)
        B[h] > r1[S][h] && (u = !0);
      if (!u) {
        var I, L, Q, $;
        for (c.sfb_partition_table = e.nr_of_sfb_block[S][E], h = 0; h < 4; h++)
          c.slen[h] = G[B[h]];
        switch (I = c.slen[0], L = c.slen[1], Q = c.slen[2], $ = c.slen[3], S) {
          case 0:
            c.scalefac_compress = (5 * I + L << 4) + (Q << 2) + $;
            break;
          case 1:
            c.scalefac_compress = 400 + (5 * I + L << 2) + Q;
            break;
          case 2:
            c.scalefac_compress = 500 + 3 * I + L;
            break;
          default:
            x.err.printf(`intensity stereo not implemented yet
`);
        }
      }
      if (!u)
        for (l1(c.sfb_partition_table != null), c.part2_length = 0, h = 0; h < 4; h++)
          c.part2_length += c.slen[h] * c.sfb_partition_table[h];
      return u;
    };
    var G = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
    this.huffman_init = function(_1) {
      for (var c = 2; c <= 576; c += 2) {
        for (var S, E = 0; _1.scalefac_band.l[++E] < c; )
          ;
        for (S = w[E][0]; _1.scalefac_band.l[S + 1] > c; )
          S--;
        for (S < 0 && (S = w[E][0]), _1.bv_scf[c - 2] = S, S = w[E][1]; _1.scalefac_band.l[S + _1.bv_scf[c - 2] + 2] > c; )
          S--;
        S < 0 && (S = w[E][1]), _1.bv_scf[c - 1] = S;
      }
    };
  }, ut;
}
function At() {
  if (Qt)
    return Ut;
  Qt = 1;
  var H = C1, x = H.System, O = H.Arrays, e1 = H.new_byte, l1 = H.new_float_n, J = H.new_int, j = H.assert, p = p2(), q = St, o = z1(), e = ot;
  function d() {
    var w = Rt(), z = this, P = null, R = null, _ = null, m = null;
    this.setModules = function(u, i, a, B) {
      P = u, R = i, _ = a, m = B;
    };
    var V = null, g = 0, W = 0, Y = 0;
    function i1(u) {
      x.arraycopy(u.header[u.w_ptr].buf, 0, V, W, u.sideinfo_len), W += u.sideinfo_len, g += 8 * u.sideinfo_len, u.w_ptr = u.w_ptr + 1 & e.MAX_HEADER_BUF - 1;
    }
    function t1(u, i, a) {
      for (; a > 0; ) {
        var B;
        Y == 0 && (Y = 8, W++, j(W < w.LAME_MAXMP3BUFFER), j(u.header[u.w_ptr].write_timing >= g), u.header[u.w_ptr].write_timing == g && i1(u), V[W] = 0), a -= B = Math.min(a, Y), Y -= B, V[W] |= i >> a << Y, g += B;
      }
    }
    function n1(u, i, a) {
      for (; a > 0; ) {
        var B;
        Y == 0 && (Y = 8, W++, j(W < w.LAME_MAXMP3BUFFER), V[W] = 0), a -= B = Math.min(a, Y), Y -= B, V[W] |= i >> a << Y, g += B;
      }
    }
    function r1(u, i) {
      var a, B = u.internal_flags;
      if (i >= 8 && (t1(B, 76, 8), i -= 8), i >= 8 && (t1(B, 65, 8), i -= 8), i >= 8 && (t1(B, 77, 8), i -= 8), i >= 8 && (t1(B, 69, 8), i -= 8), i >= 32) {
        var X = _.getLameShortVersion();
        if (i >= 32)
          for (a = 0; a < X.length && i >= 8; ++a)
            i -= 8, t1(B, X.charAt(a), 8);
      }
      for (; i >= 1; i -= 1)
        t1(B, B.ancillary_flag, 1), B.ancillary_flag ^= u.disable_reservoir ? 0 : 1;
    }
    function G(u, i, a) {
      for (var B = u.header[u.h_ptr].ptr; a > 0; ) {
        var X = Math.min(a, 8 - (7 & B));
        a -= X, u.header[u.h_ptr].buf[B >> 3] |= i >> a << 8 - (7 & B) - X, B += X;
      }
      u.header[u.h_ptr].ptr = B;
    }
    function _1(u, i) {
      u <<= 8;
      for (var a = 0; a < 8; a++)
        65536 & ((i <<= 1) ^ (u <<= 1)) && (i ^= 32773);
      return i;
    }
    function c(u, i) {
      var a, B = q.ht[i.count1table_select + 32], X = 0, n = i.big_values, I = i.big_values;
      for (j(i.count1table_select < 2), a = (i.count1 - i.big_values) / 4; a > 0; --a) {
        var L = 0, Q = 0;
        i.l3_enc[n + 0] != 0 && (Q += 8, i.xr[I + 0] < 0 && L++), i.l3_enc[n + 1] != 0 && (Q += 4, L *= 2, i.xr[I + 1] < 0 && L++), i.l3_enc[n + 2] != 0 && (Q += 2, L *= 2, i.xr[I + 2] < 0 && L++), i.l3_enc[n + 3] != 0 && (Q++, L *= 2, i.xr[I + 3] < 0 && L++), n += 4, I += 4, t1(u, L + B.table[Q], B.hlen[Q]), X += B.hlen[Q];
      }
      return X;
    }
    function S(u, i, a, B, X) {
      var n = q.ht[i], I = 0;
      if (i == 0)
        return I;
      for (var L = a; L < B; L += 2) {
        var Q = 0, $ = 0, y = n.xlen, D = n.xlen, t = 0, s = X.l3_enc[L], r = X.l3_enc[L + 1];
        if (s != 0 && (X.xr[L] < 0 && t++, Q--), i > 15) {
          if (s > 14) {
            var l = s - 15;
            j(l <= n.linmax), t |= l << 1, $ = y, s = 15;
          }
          if (r > 14) {
            var f = r - 15;
            j(f <= n.linmax), t <<= y, t |= f, $ += y, r = 15;
          }
          D = 16;
        }
        r != 0 && (t <<= 1, X.xr[L + 1] < 0 && t++, Q--), s = s * D + r, $ -= Q, Q += n.hlen[s], t1(u, n.table[s], Q), t1(u, t, $), I += Q + $;
      }
      return I;
    }
    function E(u, i) {
      var a = 3 * u.scalefac_band.s[3];
      a > i.big_values && (a = i.big_values);
      var B = S(u, i.table_select[0], 0, a, i);
      return B += S(u, i.table_select[1], a, i.big_values, i);
    }
    function h(u, i) {
      var a, B, X, n;
      a = i.big_values;
      var I = i.region0_count + 1;
      return j(I < u.scalefac_band.l.length), X = u.scalefac_band.l[I], I += i.region1_count + 1, j(I < u.scalefac_band.l.length), X > a && (X = a), (n = u.scalefac_band.l[I]) > a && (n = a), B = S(u, i.table_select[0], 0, X, i), B += S(u, i.table_select[1], X, n, i), B += S(u, i.table_select[2], n, a, i);
    }
    function U() {
      this.total = 0;
    }
    function v(u, i) {
      var a, B, X, n, I, L = u.internal_flags;
      return I = L.w_ptr, (n = L.h_ptr - 1) == -1 && (n = e.MAX_HEADER_BUF - 1), a = L.header[n].write_timing - g, i.total = a, a >= 0 && (B = 1 + n - I, n < I && (B = 1 + n - I + e.MAX_HEADER_BUF), a -= 8 * B * L.sideinfo_len), a += X = z.getframebits(u), i.total += X, i.total % 8 != 0 ? i.total = 1 + i.total / 8 : i.total = i.total / 8, i.total += W + 1, a < 0 && x.err.println(`strange error flushing buffer ... 
`), a;
    }
    this.getframebits = function(u) {
      var i, a = u.internal_flags;
      return i = a.bitrate_index != 0 ? q.bitrate_table[u.version][a.bitrate_index] : u.brate, 8 * (0 | 72e3 * (u.version + 1) * i / u.out_samplerate + a.padding);
    }, this.CRC_writeheader = function(u, i) {
      var a = 65535;
      a = _1(255 & i[2], a), a = _1(255 & i[3], a);
      for (var B = 6; B < u.sideinfo_len; B++)
        a = _1(255 & i[B], a);
      i[4] = byte(a >> 8), i[5] = byte(255 & a);
    }, this.flush_bitstream = function(u) {
      var i, a, B = u.internal_flags, X = B.h_ptr - 1;
      if (X == -1 && (X = e.MAX_HEADER_BUF - 1), i = B.l3_side, !((a = v(u, new U())) < 0)) {
        if (r1(u, a), j(B.header[X].write_timing + this.getframebits(u) == g), B.ResvSize = 0, i.main_data_begin = 0, B.findReplayGain) {
          var n = P.GetTitleGain(B.rgdata);
          j(NEQ(n, GainAnalysis.GAIN_NOT_ENOUGH_SAMPLES)), B.RadioGain = 0 | Math.floor(10 * n + 0.5);
        }
        B.findPeakSample && (B.noclipGainChange = 0 | Math.ceil(20 * Math.log10(B.PeakSample / 32767) * 10), B.noclipGainChange > 0 && (EQ(u.scale, 1) || EQ(u.scale, 0)) ? B.noclipScale = Math.floor(32767 / B.PeakSample * 100) / 100 : B.noclipScale = -1);
      }
    }, this.add_dummy_byte = function(u, i, a) {
      for (var B, X = u.internal_flags; a-- > 0; )
        for (n1(0, i, 8), B = 0; B < e.MAX_HEADER_BUF; ++B)
          X.header[B].write_timing += 8;
    }, this.format_bitstream = function(u) {
      var i, a = u.internal_flags;
      i = a.l3_side;
      var B = this.getframebits(u);
      r1(u, i.resvDrain_pre), function(I, L) {
        var Q, $, y, D = I.internal_flags;
        if (Q = D.l3_side, D.header[D.h_ptr].ptr = 0, O.fill(D.header[D.h_ptr].buf, 0, D.sideinfo_len, 0), I.out_samplerate < 16e3 ? G(D, 4094, 12) : G(D, 4095, 12), G(D, I.version, 1), G(D, 1, 2), G(D, I.error_protection ? 0 : 1, 1), G(D, D.bitrate_index, 4), G(D, D.samplerate_index, 2), G(D, D.padding, 1), G(D, I.extension, 1), G(D, I.mode.ordinal(), 2), G(D, D.mode_ext, 2), G(D, I.copyright, 1), G(D, I.original, 1), G(D, I.emphasis, 2), I.error_protection && G(D, 0, 16), I.version == 1) {
          for (j(Q.main_data_begin >= 0), G(D, Q.main_data_begin, 9), D.channels_out == 2 ? G(D, Q.private_bits, 3) : G(D, Q.private_bits, 5), y = 0; y < D.channels_out; y++) {
            var t;
            for (t = 0; t < 4; t++)
              G(D, Q.scfsi[y][t], 1);
          }
          for ($ = 0; $ < 2; $++)
            for (y = 0; y < D.channels_out; y++)
              G(D, (s = Q.tt[$][y]).part2_3_length + s.part2_length, 12), G(D, s.big_values / 2, 9), G(D, s.global_gain, 8), G(D, s.scalefac_compress, 4), s.block_type != o.NORM_TYPE ? (G(D, 1, 1), G(D, s.block_type, 2), G(D, s.mixed_block_flag, 1), s.table_select[0] == 14 && (s.table_select[0] = 16), G(D, s.table_select[0], 5), s.table_select[1] == 14 && (s.table_select[1] = 16), G(D, s.table_select[1], 5), G(D, s.subblock_gain[0], 3), G(D, s.subblock_gain[1], 3), G(D, s.subblock_gain[2], 3)) : (G(D, 0, 1), s.table_select[0] == 14 && (s.table_select[0] = 16), G(D, s.table_select[0], 5), s.table_select[1] == 14 && (s.table_select[1] = 16), G(D, s.table_select[1], 5), s.table_select[2] == 14 && (s.table_select[2] = 16), G(D, s.table_select[2], 5), j(0 <= s.region0_count && s.region0_count < 16), j(0 <= s.region1_count && s.region1_count < 8), G(D, s.region0_count, 4), G(D, s.region1_count, 3)), G(D, s.preflag, 1), G(D, s.scalefac_scale, 1), G(D, s.count1table_select, 1);
        } else
          for (j(Q.main_data_begin >= 0), G(D, Q.main_data_begin, 8), G(D, Q.private_bits, D.channels_out), $ = 0, y = 0; y < D.channels_out; y++) {
            var s;
            G(D, (s = Q.tt[$][y]).part2_3_length + s.part2_length, 12), G(D, s.big_values / 2, 9), G(D, s.global_gain, 8), G(D, s.scalefac_compress, 9), s.block_type != o.NORM_TYPE ? (G(D, 1, 1), G(D, s.block_type, 2), G(D, s.mixed_block_flag, 1), s.table_select[0] == 14 && (s.table_select[0] = 16), G(D, s.table_select[0], 5), s.table_select[1] == 14 && (s.table_select[1] = 16), G(D, s.table_select[1], 5), G(D, s.subblock_gain[0], 3), G(D, s.subblock_gain[1], 3), G(D, s.subblock_gain[2], 3)) : (G(D, 0, 1), s.table_select[0] == 14 && (s.table_select[0] = 16), G(D, s.table_select[0], 5), s.table_select[1] == 14 && (s.table_select[1] = 16), G(D, s.table_select[1], 5), s.table_select[2] == 14 && (s.table_select[2] = 16), G(D, s.table_select[2], 5), j(0 <= s.region0_count && s.region0_count < 16), j(0 <= s.region1_count && s.region1_count < 8), G(D, s.region0_count, 4), G(D, s.region1_count, 3)), G(D, s.scalefac_scale, 1), G(D, s.count1table_select, 1);
          }
        I.error_protection && CRC_writeheader(D, D.header[D.h_ptr].buf);
        var r = D.h_ptr;
        j(D.header[r].ptr == 8 * D.sideinfo_len), D.h_ptr = r + 1 & e.MAX_HEADER_BUF - 1, D.header[D.h_ptr].write_timing = D.header[r].write_timing + L, D.h_ptr == D.w_ptr && x.err.println(`Error: MAX_HEADER_BUF too small in bitstream.c 
`);
      }(u, B);
      var X = 8 * a.sideinfo_len;
      if (X += function(I) {
        var L, Q, $, y, D = 0, t = I.internal_flags, s = t.l3_side;
        if (I.version == 1)
          for (L = 0; L < 2; L++)
            for (Q = 0; Q < t.channels_out; Q++) {
              var r = s.tt[L][Q], l = p.slen1_tab[r.scalefac_compress], f = p.slen2_tab[r.scalefac_compress];
              for (y = 0, $ = 0; $ < r.sfbdivide; $++)
                r.scalefac[$] != -1 && (t1(t, r.scalefac[$], l), y += l);
              for (; $ < r.sfbmax; $++)
                r.scalefac[$] != -1 && (t1(t, r.scalefac[$], f), y += f);
              j(y == r.part2_length), r.block_type == o.SHORT_TYPE ? y += E(t, r) : y += h(t, r), y += c(t, r), j(y == r.part2_3_length + r.part2_length), D += y;
            }
        else
          for (L = 0, Q = 0; Q < t.channels_out; Q++) {
            r = s.tt[L][Q];
            var b, A, T = 0;
            if (j(r.sfb_partition_table != null), y = 0, $ = 0, A = 0, r.block_type == o.SHORT_TYPE) {
              for (; A < 4; A++) {
                var M = r.sfb_partition_table[A] / 3, k = r.slen[A];
                for (b = 0; b < M; b++, $++)
                  t1(t, Math.max(r.scalefac[3 * $ + 0], 0), k), t1(t, Math.max(r.scalefac[3 * $ + 1], 0), k), t1(t, Math.max(r.scalefac[3 * $ + 2], 0), k), T += 3 * k;
              }
              y += E(t, r);
            } else {
              for (; A < 4; A++)
                for (M = r.sfb_partition_table[A], k = r.slen[A], b = 0; b < M; b++, $++)
                  t1(t, Math.max(r.scalefac[$], 0), k), T += k;
              y += h(t, r);
            }
            y += c(t, r), j(y == r.part2_3_length), j(T == r.part2_length), D += T + y;
          }
        return D;
      }(u), r1(u, i.resvDrain_post), X += i.resvDrain_post, i.main_data_begin += (B - X) / 8, v(u, new U()) != a.ResvSize && x.err.println("Internal buffer inconsistency. flushbits <> ResvSize"), 8 * i.main_data_begin != a.ResvSize && (x.err.printf(`bit reservoir error: 
l3_side.main_data_begin: %d 
Resvoir size:             %d 
resv drain (post)         %d 
resv drain (pre)          %d 
header and sideinfo:      %d 
data bits:                %d 
total bits:               %d (remainder: %d) 
bitsperframe:             %d 
`, 8 * i.main_data_begin, a.ResvSize, i.resvDrain_post, i.resvDrain_pre, 8 * a.sideinfo_len, X - i.resvDrain_post - 8 * a.sideinfo_len, X, X % 8, B), x.err.println("This is a fatal error.  It has several possible causes:"), x.err.println("90%%  LAME compiled with buggy version of gcc using advanced optimizations"), x.err.println(" 9%%  Your system is overclocked"), x.err.println(" 1%%  bug in LAME encoding library"), a.ResvSize = 8 * i.main_data_begin), g > 1e9) {
        var n;
        for (n = 0; n < e.MAX_HEADER_BUF; ++n)
          a.header[n].write_timing -= g;
        g = 0;
      }
      return 0;
    }, this.copy_buffer = function(u, i, a, B, X) {
      var n = W + 1;
      if (n <= 0)
        return 0;
      if (B != 0 && n > B)
        return -1;
      if (x.arraycopy(V, 0, i, a, n), W = -1, Y = 0, X != 0) {
        var I = J(1);
        if (I[0] = u.nMusicCRC, m.updateMusicCRC(I, i, a, n), u.nMusicCRC = I[0], n > 0 && (u.VBR_seek_table.nBytesWritten += n), u.decode_on_the_fly) {
          for (var L, Q = l1([2, 1152]), $ = n, y = -1; y != 0; )
            if (y = R.hip_decode1_unclipped(u.hip, i, a, $, Q[0], Q[1]), $ = 0, y == -1 && (y = 0), y > 0) {
              if (u.findPeakSample) {
                for (L = 0; L < y; L++)
                  Q[0][L] > u.PeakSample ? u.PeakSample = Q[0][L] : -Q[0][L] > u.PeakSample && (u.PeakSample = -Q[0][L]);
                if (u.channels_out > 1)
                  for (L = 0; L < y; L++)
                    Q[1][L] > u.PeakSample ? u.PeakSample = Q[1][L] : -Q[1][L] > u.PeakSample && (u.PeakSample = -Q[1][L]);
              }
              if (u.findReplayGain && P.AnalyzeSamples(u.rgdata, Q[0], 0, Q[1], 0, y, u.channels_out) == GainAnalysis.GAIN_ANALYSIS_ERROR)
                return -6;
            }
        }
      }
      return n;
    }, this.init_bit_stream_w = function(u) {
      V = e1(w.LAME_MAXMP3BUFFER), u.h_ptr = u.w_ptr = 0, u.header[u.h_ptr].write_timing = 0, W = -1, Y = 0, g = 0;
    };
  }
  return d.EQ = function(w, z) {
    return Math.abs(w) > Math.abs(z) ? Math.abs(w - z) <= 1e-6 * Math.abs(w) : Math.abs(w - z) <= 1e-6 * Math.abs(z);
  }, d.NEQ = function(w, z) {
    return !d.EQ(w, z);
  }, Ut = d;
}
function Rt() {
  if (Wt)
    return ct;
  Wt = 1;
  var H = C1, x = H.System, O = H.VbrMode, e1 = H.ShortBlock, l1 = H.new_float, J = H.new_int_n, j = H.new_short_n, p = H.assert, q = w2, o = T2, e = ot, d = Y2, w = C2, z = U2, P = At(), R = St, _ = z1();
  return ct = function m() {
    var V, g, W, Y, i1, t1 = W0, n1 = this;
    m.V9 = 410, m.V8 = 420, m.V7 = 430, m.V6 = 440, m.V5 = 450, m.V4 = 460, m.V3 = 470, m.V2 = 480, m.V1 = 490, m.V0 = 500, m.R3MIX = 1e3, m.STANDARD = 1001, m.EXTREME = 1002, m.INSANE = 1003, m.STANDARD_FAST = 1004, m.EXTREME_FAST = 1005, m.MEDIUM = 1006, m.MEDIUM_FAST = 1007, m.LAME_MAXMP3BUFFER = 147456;
    var r1, G, _1, c = new q();
    function S() {
      this.mask_adjust = 0, this.mask_adjust_short = 0, this.bo_l_weight = l1(_.SBMAX_l), this.bo_s_weight = l1(_.SBMAX_s);
    }
    function E() {
      this.lowerlimit = 0;
    }
    function h(t, s) {
      this.lowpass = s;
    }
    this.enc = new _(), this.setModules = function(t, s, r, l, f, b, A, T, M) {
      V = t, g = s, W = r, Y = l, i1 = f, r1 = b, G = T, _1 = M, this.enc.setModules(g, c, Y, r1);
    };
    var U = 4294479419;
    function v(t) {
      return t > 1 ? 0 : t <= 0 ? 1 : Math.cos(Math.PI / 2 * t);
    }
    function u(t, s) {
      switch (t) {
        case 44100:
          return s.version = 1, 0;
        case 48e3:
          return s.version = 1, 1;
        case 32e3:
          return s.version = 1, 2;
        case 22050:
        case 11025:
          return s.version = 0, 0;
        case 24e3:
        case 12e3:
          return s.version = 0, 1;
        case 16e3:
        case 8e3:
          return s.version = 0, 2;
        default:
          return s.version = 0, -1;
      }
    }
    function i(t, s, r) {
      r < 16e3 && (s = 2);
      for (var l = R.bitrate_table[s][1], f = 2; f <= 14; f++)
        R.bitrate_table[s][f] > 0 && Math.abs(R.bitrate_table[s][f] - t) < Math.abs(l - t) && (l = R.bitrate_table[s][f]);
      return l;
    }
    function a(t, s, r) {
      r < 16e3 && (s = 2);
      for (var l = 0; l <= 14; l++)
        if (R.bitrate_table[s][l] > 0 && R.bitrate_table[s][l] == t)
          return l;
      return -1;
    }
    function B(t, s) {
      var r = [new h(8, 2e3), new h(16, 3700), new h(24, 3900), new h(32, 5500), new h(40, 7e3), new h(48, 7500), new h(56, 1e4), new h(64, 11e3), new h(80, 13500), new h(96, 15100), new h(112, 15600), new h(128, 17e3), new h(160, 17500), new h(192, 18600), new h(224, 19400), new h(256, 19700), new h(320, 20500)], l = n1.nearestBitrateFullIndex(s);
      t.lowerlimit = r[l].lowpass;
    }
    function X(t) {
      var s = _.BLKSIZE + t.framesize - _.FFTOFFSET;
      return s = Math.max(s, 512 + t.framesize - 32);
    }
    function n(t, s, r, l, f, b) {
      var A = n1.enc.lame_encode_mp3_frame(t, s, r, l, f, b);
      return t.frameNum++, A;
    }
    function I() {
      this.n_in = 0, this.n_out = 0;
    }
    function L() {
      this.num_used = 0;
    }
    function Q(t, s) {
      return s != 0 ? Q(s, t % s) : t;
    }
    function $(t, s, r) {
      var l = Math.PI * s;
      (t /= r) < 0 && (t = 0), t > 1 && (t = 1);
      var f = t - 0.5, b = 0.42 - 0.5 * Math.cos(2 * t * Math.PI) + 0.08 * Math.cos(4 * t * Math.PI);
      return Math.abs(f) < 1e-9 ? l / Math.PI : b * Math.sin(r * l * f) / (Math.PI * r * f);
    }
    function y(t, s, r, l, f, b, A, T, M) {
      var k, K, N = t.internal_flags, a1 = 0, C = t.out_samplerate / Q(t.out_samplerate, t.in_samplerate);
      C > e.BPC && (C = e.BPC);
      var f1 = Math.abs(N.resample_ratio - Math.floor(0.5 + N.resample_ratio)) < 1e-4 ? 1 : 0, m1 = 1 / N.resample_ratio;
      m1 > 1 && (m1 = 1);
      var u1 = 31;
      u1 % 2 == 0 && --u1;
      var h1 = (u1 += f1) + 1;
      if (N.fill_buffer_resample_init == 0) {
        for (N.inbuf_old[0] = l1(h1), N.inbuf_old[1] = l1(h1), k = 0; k <= 2 * C; ++k)
          N.blackfilt[k] = l1(h1);
        for (N.itime[0] = 0, N.itime[1] = 0, a1 = 0; a1 <= 2 * C; a1++) {
          var F = 0, b1 = (a1 - C) / (2 * C);
          for (k = 0; k <= u1; k++)
            F += N.blackfilt[a1][k] = $(k - b1, m1, u1);
          for (k = 0; k <= u1; k++)
            N.blackfilt[a1][k] /= F;
        }
        N.fill_buffer_resample_init = 1;
      }
      var o1 = N.inbuf_old[M];
      for (K = 0; K < l; K++) {
        var c1, Z;
        if (c1 = K * N.resample_ratio, u1 + (a1 = 0 | Math.floor(c1 - N.itime[M])) - u1 / 2 >= A)
          break;
        b1 = c1 - N.itime[M] - (a1 + u1 % 2 * 0.5), Z = 0 | Math.floor(2 * b1 * C + C + 0.5);
        var T1 = 0;
        for (k = 0; k <= u1; ++k) {
          var A1 = 0 | k + a1 - u1 / 2;
          T1 += (A1 < 0 ? o1[h1 + A1] : f[b + A1]) * N.blackfilt[Z][k];
        }
        s[r + K] = T1;
      }
      if (T.num_used = Math.min(A, u1 + a1 - u1 / 2), N.itime[M] += T.num_used - K * N.resample_ratio, T.num_used >= h1)
        for (k = 0; k < h1; k++)
          o1[k] = f[b + T.num_used + k - h1];
      else {
        var R1 = h1 - T.num_used;
        for (k = 0; k < R1; ++k)
          o1[k] = o1[k + T.num_used];
        for (a1 = 0; k < h1; ++k, ++a1)
          o1[k] = f[b + a1];
        p(a1 == T.num_used);
      }
      return K;
    }
    function D(t, s, r, l, f, b) {
      var A = t.internal_flags;
      if (A.resample_ratio < 0.9999 || A.resample_ratio > 1.0001)
        for (var T = 0; T < A.channels_out; T++) {
          var M = new L();
          b.n_out = y(t, s[T], A.mf_size, t.framesize, r[T], l, f, M, T), b.n_in = M.num_used;
        }
      else {
        b.n_out = Math.min(t.framesize, f), b.n_in = b.n_out;
        for (var k = 0; k < b.n_out; ++k)
          s[0][A.mf_size + k] = r[0][l + k], A.channels_out == 2 && (s[1][A.mf_size + k] = r[1][l + k]);
      }
    }
    this.lame_init = function() {
      var t = new o();
      return function(s) {
        var r;
        s.class_id = U, r = s.internal_flags = new e(), s.mode = t1.NOT_SET, s.original = 1, s.in_samplerate = 44100, s.num_channels = 2, s.num_samples = -1, s.bWriteVbrTag = !0, s.quality = -1, s.short_blocks = null, r.subblock_gain = -1, s.lowpassfreq = 0, s.highpassfreq = 0, s.lowpasswidth = -1, s.highpasswidth = -1, s.VBR = O.vbr_off, s.VBR_q = 4, s.ATHcurve = -1, s.VBR_mean_bitrate_kbps = 128, s.VBR_min_bitrate_kbps = 0, s.VBR_max_bitrate_kbps = 0, s.VBR_hard_min = 0, r.VBR_min_bitrate = 1, r.VBR_max_bitrate = 13, s.quant_comp = -1, s.quant_comp_short = -1, s.msfix = -1, r.resample_ratio = 1, r.OldValue[0] = 180, r.OldValue[1] = 180, r.CurrentStep[0] = 4, r.CurrentStep[1] = 4, r.masking_lower = 1, r.nsPsy.attackthre = -1, r.nsPsy.attackthre_s = -1, s.scale = -1, s.athaa_type = -1, s.ATHtype = -1, s.athaa_loudapprox = -1, s.athaa_sensitivity = 0, s.useTemporal = null, s.interChRatio = -1, r.mf_samples_to_encode = _.ENCDELAY + _.POSTDELAY, s.encoder_padding = 0, r.mf_size = _.ENCDELAY - _.MDCTDELAY, s.findReplayGain = !1, s.decode_on_the_fly = !1, r.decode_on_the_fly = !1, r.findReplayGain = !1, r.findPeakSample = !1, r.RadioGain = 0, r.AudiophileGain = 0, r.noclipGainChange = 0, r.noclipScale = -1, s.preset = 0, s.write_id3tag_automatic = !0;
      }(t), t.lame_allocated_gfp = 1, t;
    }, this.nearestBitrateFullIndex = function(t) {
      var s = [8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320], r = 0, l = 0, f = 0, b = 0;
      b = s[16], f = 16, l = s[16], r = 16;
      for (var A = 0; A < 16; A++)
        if (Math.max(t, s[A + 1]) != t) {
          b = s[A + 1], f = A + 1, l = s[A], r = A;
          break;
        }
      return b - t > t - l ? r : f;
    }, this.lame_init_params = function(t) {
      var s, r, l, f = t.internal_flags;
      if (f.Class_ID = 0, f.ATH == null && (f.ATH = new d()), f.PSY == null && (f.PSY = new S()), f.rgdata == null && (f.rgdata = new w()), f.channels_in = t.num_channels, f.channels_in == 1 && (t.mode = t1.MONO), f.channels_out = t.mode == t1.MONO ? 1 : 2, f.mode_ext = _.MPG_MD_MS_LR, t.mode == t1.MONO && (t.force_ms = !1), t.VBR == O.vbr_off && t.VBR_mean_bitrate_kbps != 128 && t.brate == 0 && (t.brate = t.VBR_mean_bitrate_kbps), t.VBR == O.vbr_off || t.VBR == O.vbr_mtrh || t.VBR == O.vbr_mt || (t.free_format = !1), t.VBR == O.vbr_off && t.brate == 0 && P.EQ(t.compression_ratio, 0) && (t.compression_ratio = 11.025), t.VBR == O.vbr_off && t.compression_ratio > 0 && (t.out_samplerate == 0 && (t.out_samplerate = map2MP3Frequency(int(0.97 * t.in_samplerate))), t.brate = 0 | 16 * t.out_samplerate * f.channels_out / (1e3 * t.compression_ratio), f.samplerate_index = u(t.out_samplerate, t), t.free_format || (t.brate = i(t.brate, t.version, t.out_samplerate))), t.out_samplerate != 0 && (t.out_samplerate < 16e3 ? (t.VBR_mean_bitrate_kbps = Math.max(t.VBR_mean_bitrate_kbps, 8), t.VBR_mean_bitrate_kbps = Math.min(t.VBR_mean_bitrate_kbps, 64)) : t.out_samplerate < 32e3 ? (t.VBR_mean_bitrate_kbps = Math.max(t.VBR_mean_bitrate_kbps, 8), t.VBR_mean_bitrate_kbps = Math.min(t.VBR_mean_bitrate_kbps, 160)) : (t.VBR_mean_bitrate_kbps = Math.max(t.VBR_mean_bitrate_kbps, 32), t.VBR_mean_bitrate_kbps = Math.min(t.VBR_mean_bitrate_kbps, 320))), t.lowpassfreq == 0) {
        var b = 16e3;
        switch (t.VBR) {
          case O.vbr_off:
            B(A = new E(), t.brate), b = A.lowerlimit;
            break;
          case O.vbr_abr:
            var A;
            B(A = new E(), t.VBR_mean_bitrate_kbps), b = A.lowerlimit;
            break;
          case O.vbr_rh:
            var T = [19500, 19e3, 18600, 18e3, 17500, 16e3, 15600, 14900, 12500, 1e4, 3950];
            if (0 <= t.VBR_q && t.VBR_q <= 9) {
              var M = T[t.VBR_q], k = T[t.VBR_q + 1], K = t.VBR_q_frac;
              b = linear_int(M, k, K);
            } else
              b = 19500;
            break;
          default:
            T = [19500, 19e3, 18500, 18e3, 17500, 16500, 15500, 14500, 12500, 9500, 3950], 0 <= t.VBR_q && t.VBR_q <= 9 ? (M = T[t.VBR_q], k = T[t.VBR_q + 1], K = t.VBR_q_frac, b = linear_int(M, k, K)) : b = 19500;
        }
        t.mode != t1.MONO || t.VBR != O.vbr_off && t.VBR != O.vbr_abr || (b *= 1.5), t.lowpassfreq = 0 | b;
      }
      if (t.out_samplerate == 0 && (2 * t.lowpassfreq > t.in_samplerate && (t.lowpassfreq = t.in_samplerate / 2), t.out_samplerate = (s = 0 | t.lowpassfreq, r = t.in_samplerate, l = 44100, r >= 48e3 ? l = 48e3 : r >= 44100 ? l = 44100 : r >= 32e3 ? l = 32e3 : r >= 24e3 ? l = 24e3 : r >= 22050 ? l = 22050 : r >= 16e3 ? l = 16e3 : r >= 12e3 ? l = 12e3 : r >= 11025 ? l = 11025 : r >= 8e3 && (l = 8e3), s == -1 ? l : (s <= 15960 && (l = 44100), s <= 15250 && (l = 32e3), s <= 11220 && (l = 24e3), s <= 9970 && (l = 22050), s <= 7230 && (l = 16e3), s <= 5420 && (l = 12e3), s <= 4510 && (l = 11025), s <= 3970 && (l = 8e3), r < l ? r > 44100 ? 48e3 : r > 32e3 ? 44100 : r > 24e3 ? 32e3 : r > 22050 ? 24e3 : r > 16e3 ? 22050 : r > 12e3 ? 16e3 : r > 11025 ? 12e3 : r > 8e3 ? 11025 : 8e3 : l))), t.lowpassfreq = Math.min(20500, t.lowpassfreq), t.lowpassfreq = Math.min(t.out_samplerate / 2, t.lowpassfreq), t.VBR == O.vbr_off && (t.compression_ratio = 16 * t.out_samplerate * f.channels_out / (1e3 * t.brate)), t.VBR == O.vbr_abr && (t.compression_ratio = 16 * t.out_samplerate * f.channels_out / (1e3 * t.VBR_mean_bitrate_kbps)), t.bWriteVbrTag || (t.findReplayGain = !1, t.decode_on_the_fly = !1, f.findPeakSample = !1), f.findReplayGain = t.findReplayGain, f.decode_on_the_fly = t.decode_on_the_fly, f.decode_on_the_fly && (f.findPeakSample = !0), f.findReplayGain && V.InitGainAnalysis(f.rgdata, t.out_samplerate) == GainAnalysis.INIT_GAIN_ANALYSIS_ERROR)
        return t.internal_flags = null, -6;
      switch (f.decode_on_the_fly && !t.decode_only && (f.hip != null && _1.hip_decode_exit(f.hip), f.hip = _1.hip_decode_init()), f.mode_gr = t.out_samplerate <= 24e3 ? 1 : 2, t.framesize = 576 * f.mode_gr, t.encoder_delay = _.ENCDELAY, f.resample_ratio = t.in_samplerate / t.out_samplerate, t.VBR) {
        case O.vbr_mt:
        case O.vbr_rh:
        case O.vbr_mtrh:
          t.compression_ratio = [5.7, 6.5, 7.3, 8.2, 10, 11.9, 13, 14, 15, 16.5][t.VBR_q];
          break;
        case O.vbr_abr:
          t.compression_ratio = 16 * t.out_samplerate * f.channels_out / (1e3 * t.VBR_mean_bitrate_kbps);
          break;
        default:
          t.compression_ratio = 16 * t.out_samplerate * f.channels_out / (1e3 * t.brate);
      }
      if (t.mode == t1.NOT_SET && (t.mode = t1.JOINT_STEREO), t.highpassfreq > 0 ? (f.highpass1 = 2 * t.highpassfreq, t.highpasswidth >= 0 ? f.highpass2 = 2 * (t.highpassfreq + t.highpasswidth) : f.highpass2 = 2 * t.highpassfreq, f.highpass1 /= t.out_samplerate, f.highpass2 /= t.out_samplerate) : (f.highpass1 = 0, f.highpass2 = 0), t.lowpassfreq > 0 ? (f.lowpass2 = 2 * t.lowpassfreq, t.lowpasswidth >= 0 ? (f.lowpass1 = 2 * (t.lowpassfreq - t.lowpasswidth), f.lowpass1 < 0 && (f.lowpass1 = 0)) : f.lowpass1 = 2 * t.lowpassfreq, f.lowpass1 /= t.out_samplerate, f.lowpass2 /= t.out_samplerate) : (f.lowpass1 = 0, f.lowpass2 = 0), function(h1) {
        var F = h1.internal_flags, b1 = 32, o1 = -1;
        if (F.lowpass1 > 0) {
          for (var c1 = 999, Z = 0; Z <= 31; Z++)
            (B1 = Z / 31) >= F.lowpass2 && (b1 = Math.min(b1, Z)), F.lowpass1 < B1 && B1 < F.lowpass2 && (c1 = Math.min(c1, Z));
          F.lowpass1 = c1 == 999 ? (b1 - 0.75) / 31 : (c1 - 0.75) / 31, F.lowpass2 = b1 / 31;
        }
        if (F.highpass2 > 0 && F.highpass2 < 0.75 / 31 * 0.9 && (F.highpass1 = 0, F.highpass2 = 0, x.err.println(`Warning: highpass filter disabled.  highpass frequency too small
`)), F.highpass2 > 0) {
          var T1 = -1;
          for (Z = 0; Z <= 31; Z++)
            (B1 = Z / 31) <= F.highpass1 && (o1 = Math.max(o1, Z)), F.highpass1 < B1 && B1 < F.highpass2 && (T1 = Math.max(T1, Z));
          F.highpass1 = o1 / 31, F.highpass2 = T1 == -1 ? (o1 + 0.75) / 31 : (T1 + 0.75) / 31;
        }
        for (Z = 0; Z < 32; Z++) {
          var A1, R1, B1 = Z / 31;
          A1 = F.highpass2 > F.highpass1 ? v((F.highpass2 - B1) / (F.highpass2 - F.highpass1 + 1e-20)) : 1, R1 = F.lowpass2 > F.lowpass1 ? v((B1 - F.lowpass1) / (F.lowpass2 - F.lowpass1 + 1e-20)) : 1, F.amp_filter[Z] = A1 * R1;
        }
      }(t), f.samplerate_index = u(t.out_samplerate, t), f.samplerate_index < 0)
        return t.internal_flags = null, -1;
      if (t.VBR == O.vbr_off) {
        if (t.free_format)
          f.bitrate_index = 0;
        else if (t.brate = i(t.brate, t.version, t.out_samplerate), f.bitrate_index = a(t.brate, t.version, t.out_samplerate), f.bitrate_index <= 0)
          return t.internal_flags = null, -1;
      } else
        f.bitrate_index = 1;
      t.analysis && (t.bWriteVbrTag = !1), f.pinfo != null && (t.bWriteVbrTag = !1), g.init_bit_stream_w(f);
      for (var N, a1 = f.samplerate_index + 3 * t.version + 6 * (t.out_samplerate < 16e3 ? 1 : 0), C = 0; C < _.SBMAX_l + 1; C++)
        f.scalefac_band.l[C] = Y.sfBandIndex[a1].l[C];
      for (C = 0; C < _.PSFB21 + 1; C++) {
        var f1 = (f.scalefac_band.l[22] - f.scalefac_band.l[21]) / _.PSFB21, m1 = f.scalefac_band.l[21] + C * f1;
        f.scalefac_band.psfb21[C] = m1;
      }
      for (f.scalefac_band.psfb21[_.PSFB21] = 576, C = 0; C < _.SBMAX_s + 1; C++)
        f.scalefac_band.s[C] = Y.sfBandIndex[a1].s[C];
      for (C = 0; C < _.PSFB12 + 1; C++)
        f1 = (f.scalefac_band.s[13] - f.scalefac_band.s[12]) / _.PSFB12, m1 = f.scalefac_band.s[12] + C * f1, f.scalefac_band.psfb12[C] = m1;
      for (f.scalefac_band.psfb12[_.PSFB12] = 192, t.version == 1 ? f.sideinfo_len = f.channels_out == 1 ? 21 : 36 : f.sideinfo_len = f.channels_out == 1 ? 13 : 21, t.error_protection && (f.sideinfo_len += 2), function(h1) {
        var F = h1.internal_flags;
        h1.frameNum = 0, h1.write_id3tag_automatic && G.id3tag_write_v2(h1), F.bitrate_stereoMode_Hist = J([16, 5]), F.bitrate_blockType_Hist = J([16, 6]), F.PeakSample = 0, h1.bWriteVbrTag && r1.InitVbrTag(h1);
      }(t), f.Class_ID = U, N = 0; N < 19; N++)
        f.nsPsy.pefirbuf[N] = 700 * f.mode_gr * f.channels_out;
      switch (t.ATHtype == -1 && (t.ATHtype = 4), p(t.VBR_q <= 9), p(t.VBR_q >= 0), t.VBR) {
        case O.vbr_mt:
          t.VBR = O.vbr_mtrh;
        case O.vbr_mtrh:
          t.useTemporal == null && (t.useTemporal = !1), W.apply_preset(t, 500 - 10 * t.VBR_q, 0), t.quality < 0 && (t.quality = LAME_DEFAULT_QUALITY), t.quality < 5 && (t.quality = 0), t.quality > 5 && (t.quality = 5), f.PSY.mask_adjust = t.maskingadjust, f.PSY.mask_adjust_short = t.maskingadjust_short, t.experimentalY ? f.sfb21_extra = !1 : f.sfb21_extra = t.out_samplerate > 44e3, f.iteration_loop = new VBRNewIterationLoop(i1);
          break;
        case O.vbr_rh:
          W.apply_preset(t, 500 - 10 * t.VBR_q, 0), f.PSY.mask_adjust = t.maskingadjust, f.PSY.mask_adjust_short = t.maskingadjust_short, t.experimentalY ? f.sfb21_extra = !1 : f.sfb21_extra = t.out_samplerate > 44e3, t.quality > 6 && (t.quality = 6), t.quality < 0 && (t.quality = LAME_DEFAULT_QUALITY), f.iteration_loop = new VBROldIterationLoop(i1);
          break;
        default:
          var u1;
          f.sfb21_extra = !1, t.quality < 0 && (t.quality = LAME_DEFAULT_QUALITY), (u1 = t.VBR) == O.vbr_off && (t.VBR_mean_bitrate_kbps = t.brate), W.apply_preset(t, t.VBR_mean_bitrate_kbps, 0), t.VBR = u1, f.PSY.mask_adjust = t.maskingadjust, f.PSY.mask_adjust_short = t.maskingadjust_short, u1 == O.vbr_off ? f.iteration_loop = new z(i1) : f.iteration_loop = new ABRIterationLoop(i1);
      }
      if (p(t.scale >= 0), t.VBR != O.vbr_off) {
        if (f.VBR_min_bitrate = 1, f.VBR_max_bitrate = 14, t.out_samplerate < 16e3 && (f.VBR_max_bitrate = 8), t.VBR_min_bitrate_kbps != 0 && (t.VBR_min_bitrate_kbps = i(t.VBR_min_bitrate_kbps, t.version, t.out_samplerate), f.VBR_min_bitrate = a(t.VBR_min_bitrate_kbps, t.version, t.out_samplerate), f.VBR_min_bitrate < 0) || t.VBR_max_bitrate_kbps != 0 && (t.VBR_max_bitrate_kbps = i(t.VBR_max_bitrate_kbps, t.version, t.out_samplerate), f.VBR_max_bitrate = a(t.VBR_max_bitrate_kbps, t.version, t.out_samplerate), f.VBR_max_bitrate < 0))
          return -1;
        t.VBR_min_bitrate_kbps = R.bitrate_table[t.version][f.VBR_min_bitrate], t.VBR_max_bitrate_kbps = R.bitrate_table[t.version][f.VBR_max_bitrate], t.VBR_mean_bitrate_kbps = Math.min(R.bitrate_table[t.version][f.VBR_max_bitrate], t.VBR_mean_bitrate_kbps), t.VBR_mean_bitrate_kbps = Math.max(R.bitrate_table[t.version][f.VBR_min_bitrate], t.VBR_mean_bitrate_kbps);
      }
      return t.tune && (f.PSY.mask_adjust += t.tune_value_a, f.PSY.mask_adjust_short += t.tune_value_a), function(h1) {
        var F = h1.internal_flags;
        switch (h1.quality) {
          default:
          case 9:
            F.psymodel = 0, F.noise_shaping = 0, F.noise_shaping_amp = 0, F.noise_shaping_stop = 0, F.use_best_huffman = 0, F.full_outer_loop = 0;
            break;
          case 8:
            h1.quality = 7;
          case 7:
            F.psymodel = 1, F.noise_shaping = 0, F.noise_shaping_amp = 0, F.noise_shaping_stop = 0, F.use_best_huffman = 0, F.full_outer_loop = 0;
            break;
          case 6:
          case 5:
            F.psymodel = 1, F.noise_shaping == 0 && (F.noise_shaping = 1), F.noise_shaping_amp = 0, F.noise_shaping_stop = 0, F.subblock_gain == -1 && (F.subblock_gain = 1), F.use_best_huffman = 0, F.full_outer_loop = 0;
            break;
          case 4:
            F.psymodel = 1, F.noise_shaping == 0 && (F.noise_shaping = 1), F.noise_shaping_amp = 0, F.noise_shaping_stop = 0, F.subblock_gain == -1 && (F.subblock_gain = 1), F.use_best_huffman = 1, F.full_outer_loop = 0;
            break;
          case 3:
            F.psymodel = 1, F.noise_shaping == 0 && (F.noise_shaping = 1), F.noise_shaping_amp = 1, F.noise_shaping_stop = 1, F.subblock_gain == -1 && (F.subblock_gain = 1), F.use_best_huffman = 1, F.full_outer_loop = 0;
            break;
          case 2:
            F.psymodel = 1, F.noise_shaping == 0 && (F.noise_shaping = 1), F.substep_shaping == 0 && (F.substep_shaping = 2), F.noise_shaping_amp = 1, F.noise_shaping_stop = 1, F.subblock_gain == -1 && (F.subblock_gain = 1), F.use_best_huffman = 1, F.full_outer_loop = 0;
            break;
          case 1:
          case 0:
            F.psymodel = 1, F.noise_shaping == 0 && (F.noise_shaping = 1), F.substep_shaping == 0 && (F.substep_shaping = 2), F.noise_shaping_amp = 2, F.noise_shaping_stop = 1, F.subblock_gain == -1 && (F.subblock_gain = 1), F.use_best_huffman = 1, F.full_outer_loop = 0;
        }
      }(t), p(t.scale >= 0), t.athaa_type < 0 ? f.ATH.useAdjust = 3 : f.ATH.useAdjust = t.athaa_type, f.ATH.aaSensitivityP = Math.pow(10, t.athaa_sensitivity / -10), t.short_blocks == null && (t.short_blocks = e1.short_block_allowed), t.short_blocks != e1.short_block_allowed || t.mode != t1.JOINT_STEREO && t.mode != t1.STEREO || (t.short_blocks = e1.short_block_coupled), t.quant_comp < 0 && (t.quant_comp = 1), t.quant_comp_short < 0 && (t.quant_comp_short = 0), t.msfix < 0 && (t.msfix = 0), t.exp_nspsytune = 1 | t.exp_nspsytune, t.internal_flags.nsPsy.attackthre < 0 && (t.internal_flags.nsPsy.attackthre = q.NSATTACKTHRE), t.internal_flags.nsPsy.attackthre_s < 0 && (t.internal_flags.nsPsy.attackthre_s = q.NSATTACKTHRE_S), p(t.scale >= 0), t.scale < 0 && (t.scale = 1), t.ATHtype < 0 && (t.ATHtype = 4), t.ATHcurve < 0 && (t.ATHcurve = 4), t.athaa_loudapprox < 0 && (t.athaa_loudapprox = 2), t.interChRatio < 0 && (t.interChRatio = 0), t.useTemporal == null && (t.useTemporal = !0), f.slot_lag = f.frac_SpF = 0, t.VBR == O.vbr_off && (f.slot_lag = f.frac_SpF = 72e3 * (t.version + 1) * t.brate % t.out_samplerate | 0), Y.iteration_init(t), c.psymodel_init(t), p(t.scale >= 0), 0;
    }, this.lame_encode_flush = function(t, s, r, l) {
      var f, b, A, T, M = t.internal_flags, k = j([2, 1152]), K = 0, N = M.mf_samples_to_encode - _.POSTDELAY, a1 = X(t);
      if (M.mf_samples_to_encode < 1)
        return 0;
      for (f = 0, t.in_samplerate != t.out_samplerate && (N += 16 * t.out_samplerate / t.in_samplerate), (A = t.framesize - N % t.framesize) < 576 && (A += t.framesize), t.encoder_padding = A, T = (N + A) / t.framesize; T > 0 && K >= 0; ) {
        var C = a1 - M.mf_size, f1 = t.frameNum;
        C *= t.in_samplerate, (C /= t.out_samplerate) > 1152 && (C = 1152), C < 1 && (C = 1), b = l - f, l == 0 && (b = 0), r += K = this.lame_encode_buffer(t, k[0], k[1], C, s, r, b), f += K, T -= f1 != t.frameNum ? 1 : 0;
      }
      if (M.mf_samples_to_encode = 0, K < 0 || (b = l - f, l == 0 && (b = 0), g.flush_bitstream(t), (K = g.copy_buffer(M, s, r, b, 1)) < 0))
        return K;
      if (r += K, b = l - (f += K), l == 0 && (b = 0), t.write_id3tag_automatic) {
        if (G.id3tag_write_v1(t), (K = g.copy_buffer(M, s, r, b, 0)) < 0)
          return K;
        f += K;
      }
      return f;
    }, this.lame_encode_buffer = function(t, s, r, l, f, b, A) {
      var T = t.internal_flags, M = [null, null];
      if (T.Class_ID != U)
        return -3;
      if (l == 0)
        return 0;
      (function(K, N) {
        (K.in_buffer_0 == null || K.in_buffer_nsamples < N) && (K.in_buffer_0 = l1(N), K.in_buffer_1 = l1(N), K.in_buffer_nsamples = N);
      })(T, l), M[0] = T.in_buffer_0, M[1] = T.in_buffer_1;
      for (var k = 0; k < l; k++)
        M[0][k] = s[k], T.channels_in > 1 && (M[1][k] = r[k]);
      return function(K, N, a1, C, f1, m1, u1) {
        var h1, F, b1, o1, c1, Z = K.internal_flags, T1 = 0, A1 = [null, null], R1 = [null, null];
        if (Z.Class_ID != U)
          return -3;
        if (C == 0)
          return 0;
        if (c1 = g.copy_buffer(Z, f1, m1, u1, 0), c1 < 0)
          return c1;
        if (m1 += c1, T1 += c1, R1[0] = N, R1[1] = a1, P.NEQ(K.scale, 0) && P.NEQ(K.scale, 1))
          for (F = 0; F < C; ++F)
            R1[0][F] *= K.scale, Z.channels_out == 2 && (R1[1][F] *= K.scale);
        if (P.NEQ(K.scale_left, 0) && P.NEQ(K.scale_left, 1))
          for (F = 0; F < C; ++F)
            R1[0][F] *= K.scale_left;
        if (P.NEQ(K.scale_right, 0) && P.NEQ(K.scale_right, 1))
          for (F = 0; F < C; ++F)
            R1[1][F] *= K.scale_right;
        if (K.num_channels == 2 && Z.channels_out == 1)
          for (F = 0; F < C; ++F)
            R1[0][F] = 0.5 * (R1[0][F] + R1[1][F]), R1[1][F] = 0;
        o1 = X(K), A1[0] = Z.mfbuf[0], A1[1] = Z.mfbuf[1];
        for (var B1 = 0; C > 0; ) {
          var P1 = [null, null], I1 = 0, d1 = 0;
          P1[0] = R1[0], P1[1] = R1[1];
          var O1 = new I();
          if (D(K, A1, P1, B1, C, O1), I1 = O1.n_in, d1 = O1.n_out, Z.findReplayGain && !Z.decode_on_the_fly && V.AnalyzeSamples(Z.rgdata, A1[0], Z.mf_size, A1[1], Z.mf_size, d1, Z.channels_out) == GainAnalysis.GAIN_ANALYSIS_ERROR)
            return -6;
          if (C -= I1, B1 += I1, Z.channels_out, Z.mf_size += d1, p(Z.mf_size <= e.MFSIZE), Z.mf_samples_to_encode < 1 && (Z.mf_samples_to_encode = _.ENCDELAY + _.POSTDELAY), Z.mf_samples_to_encode += d1, Z.mf_size >= o1) {
            var L1 = u1 - T1;
            if (u1 == 0 && (L1 = 0), (h1 = n(K, A1[0], A1[1], f1, m1, L1)) < 0)
              return h1;
            for (m1 += h1, T1 += h1, Z.mf_size -= K.framesize, Z.mf_samples_to_encode -= K.framesize, b1 = 0; b1 < Z.channels_out; b1++)
              for (F = 0; F < Z.mf_size; F++)
                A1[b1][F] = A1[b1][F + K.framesize];
          }
        }
        return T1;
      }(t, M[0], M[1], l, f, b, A);
    };
  }, ct;
}
var p0 = C1.VbrMode, Q2 = function() {
  var H, x = Rt();
  function O(o, e, d, w, z, P, R, _, m, V, g, W, Y, i1, t1) {
    this.vbr_q = o, this.quant_comp = e, this.quant_comp_s = d, this.expY = w, this.st_lrm = z, this.st_s = P, this.masking_adj = R, this.masking_adj_short = _, this.ath_lower = m, this.ath_curve = V, this.ath_sensitivity = g, this.interch = W, this.safejoint = Y, this.sfb21mod = i1, this.msfix = t1;
  }
  function e1(o, e, d, w, z, P, R, _, m, V, g, W, Y, i1) {
    this.quant_comp = e, this.quant_comp_s = d, this.safejoint = w, this.nsmsfix = z, this.st_lrm = P, this.st_s = R, this.nsbass = _, this.scale = m, this.masking_adj = V, this.ath_lower = g, this.ath_curve = W, this.interch = Y, this.sfscale = i1;
  }
  this.setModules = function(o) {
    H = o;
  };
  var l1 = [new O(0, 9, 9, 0, 5.2, 125, -4.2, -6.3, 4.8, 1, 0, 0, 2, 21, 0.97), new O(1, 9, 9, 0, 5.3, 125, -3.6, -5.6, 4.5, 1.5, 0, 0, 2, 21, 1.35), new O(2, 9, 9, 0, 5.6, 125, -2.2, -3.5, 2.8, 2, 0, 0, 2, 21, 1.49), new O(3, 9, 9, 1, 5.8, 130, -1.8, -2.8, 2.6, 3, -4, 0, 2, 20, 1.64), new O(4, 9, 9, 1, 6, 135, -0.7, -1.1, 1.1, 3.5, -8, 0, 2, 0, 1.79), new O(5, 9, 9, 1, 6.4, 140, 0.5, 0.4, -7.5, 4, -12, 2e-4, 0, 0, 1.95), new O(6, 9, 9, 1, 6.6, 145, 0.67, 0.65, -14.7, 6.5, -19, 4e-4, 0, 0, 2.3), new O(7, 9, 9, 1, 6.6, 145, 0.8, 0.75, -19.7, 8, -22, 6e-4, 0, 0, 2.7), new O(8, 9, 9, 1, 6.6, 145, 1.2, 1.15, -27.5, 10, -23, 7e-4, 0, 0, 0), new O(9, 9, 9, 1, 6.6, 145, 1.6, 1.6, -36, 11, -25, 8e-4, 0, 0, 0), new O(10, 9, 9, 1, 6.6, 145, 2, 2, -36, 12, -25, 8e-4, 0, 0, 0)], J = [new O(0, 9, 9, 0, 4.2, 25, -7, -4, 7.5, 1, 0, 0, 2, 26, 0.97), new O(1, 9, 9, 0, 4.2, 25, -5.6, -3.6, 4.5, 1.5, 0, 0, 2, 21, 1.35), new O(2, 9, 9, 0, 4.2, 25, -4.4, -1.8, 2, 2, 0, 0, 2, 18, 1.49), new O(3, 9, 9, 1, 4.2, 25, -3.4, -1.25, 1.1, 3, -4, 0, 2, 15, 1.64), new O(4, 9, 9, 1, 4.2, 25, -2.2, 0.1, 0, 3.5, -8, 0, 2, 0, 1.79), new O(5, 9, 9, 1, 4.2, 25, -1, 1.65, -7.7, 4, -12, 2e-4, 0, 0, 1.95), new O(6, 9, 9, 1, 4.2, 25, -0, 2.47, -7.7, 6.5, -19, 4e-4, 0, 0, 2), new O(7, 9, 9, 1, 4.2, 25, 0.5, 2, -14.5, 8, -22, 6e-4, 0, 0, 2), new O(8, 9, 9, 1, 4.2, 25, 1, 2.4, -22, 10, -23, 7e-4, 0, 0, 2), new O(9, 9, 9, 1, 4.2, 25, 1.5, 2.95, -30, 11, -25, 8e-4, 0, 0, 2), new O(10, 9, 9, 1, 4.2, 25, 2, 2.95, -36, 12, -30, 8e-4, 0, 0, 2)];
  function j(o, e, d) {
    var w = o.VBR == p0.vbr_rh ? l1 : J, z = o.VBR_q_frac, P = w[e], R = w[e + 1], _ = P;
    P.st_lrm = P.st_lrm + z * (R.st_lrm - P.st_lrm), P.st_s = P.st_s + z * (R.st_s - P.st_s), P.masking_adj = P.masking_adj + z * (R.masking_adj - P.masking_adj), P.masking_adj_short = P.masking_adj_short + z * (R.masking_adj_short - P.masking_adj_short), P.ath_lower = P.ath_lower + z * (R.ath_lower - P.ath_lower), P.ath_curve = P.ath_curve + z * (R.ath_curve - P.ath_curve), P.ath_sensitivity = P.ath_sensitivity + z * (R.ath_sensitivity - P.ath_sensitivity), P.interch = P.interch + z * (R.interch - P.interch), P.msfix = P.msfix + z * (R.msfix - P.msfix), function(m, V) {
      0 > V && (V = 0), 9 < V && (V = 9), m.VBR_q = V, m.VBR_q_frac = 0;
    }(o, _.vbr_q), d != 0 ? o.quant_comp = _.quant_comp : Math.abs(o.quant_comp - -1) > 0 || (o.quant_comp = _.quant_comp), d != 0 ? o.quant_comp_short = _.quant_comp_s : Math.abs(o.quant_comp_short - -1) > 0 || (o.quant_comp_short = _.quant_comp_s), _.expY != 0 && (o.experimentalY = _.expY != 0), d != 0 ? o.internal_flags.nsPsy.attackthre = _.st_lrm : Math.abs(o.internal_flags.nsPsy.attackthre - -1) > 0 || (o.internal_flags.nsPsy.attackthre = _.st_lrm), d != 0 ? o.internal_flags.nsPsy.attackthre_s = _.st_s : Math.abs(o.internal_flags.nsPsy.attackthre_s - -1) > 0 || (o.internal_flags.nsPsy.attackthre_s = _.st_s), d != 0 ? o.maskingadjust = _.masking_adj : Math.abs(o.maskingadjust - 0) > 0 || (o.maskingadjust = _.masking_adj), d != 0 ? o.maskingadjust_short = _.masking_adj_short : Math.abs(o.maskingadjust_short - 0) > 0 || (o.maskingadjust_short = _.masking_adj_short), d != 0 ? o.ATHlower = -_.ath_lower / 10 : Math.abs(10 * -o.ATHlower - 0) > 0 || (o.ATHlower = -_.ath_lower / 10), d != 0 ? o.ATHcurve = _.ath_curve : Math.abs(o.ATHcurve - -1) > 0 || (o.ATHcurve = _.ath_curve), d != 0 ? o.athaa_sensitivity = _.ath_sensitivity : Math.abs(o.athaa_sensitivity - -1) > 0 || (o.athaa_sensitivity = _.ath_sensitivity), _.interch > 0 && (d != 0 ? o.interChRatio = _.interch : Math.abs(o.interChRatio - -1) > 0 || (o.interChRatio = _.interch)), _.safejoint > 0 && (o.exp_nspsytune = o.exp_nspsytune | _.safejoint), _.sfb21mod > 0 && (o.exp_nspsytune = o.exp_nspsytune | _.sfb21mod << 20), d != 0 ? o.msfix = _.msfix : Math.abs(o.msfix - -1) > 0 || (o.msfix = _.msfix), d == 0 && (o.VBR_q = e, o.VBR_q_frac = z);
  }
  var p = [new e1(8, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -30, 11, 12e-4, 1), new e1(16, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -25, 11, 1e-3, 1), new e1(24, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -20, 11, 1e-3, 1), new e1(32, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -15, 11, 1e-3, 1), new e1(40, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -10, 11, 9e-4, 1), new e1(48, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -10, 11, 9e-4, 1), new e1(56, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -6, 11, 8e-4, 1), new e1(64, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -2, 11, 8e-4, 1), new e1(80, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, 0, 8, 7e-4, 1), new e1(96, 9, 9, 0, 2.5, 6.6, 145, 0, 0.95, 0, 1, 5.5, 6e-4, 1), new e1(112, 9, 9, 0, 2.25, 6.6, 145, 0, 0.95, 0, 2, 4.5, 5e-4, 1), new e1(128, 9, 9, 0, 1.95, 6.4, 140, 0, 0.95, 0, 3, 4, 2e-4, 1), new e1(160, 9, 9, 1, 1.79, 6, 135, 0, 0.95, -2, 5, 3.5, 0, 1), new e1(192, 9, 9, 1, 1.49, 5.6, 125, 0, 0.97, -4, 7, 3, 0, 0), new e1(224, 9, 9, 1, 1.25, 5.2, 125, 0, 0.98, -6, 9, 2, 0, 0), new e1(256, 9, 9, 1, 0.97, 5.2, 125, 0, 1, -8, 10, 1, 0, 0), new e1(320, 9, 9, 1, 0.9, 5.2, 125, 0, 1, -10, 12, 0, 0, 0)];
  function q(o, e, d) {
    var w = e, z = H.nearestBitrateFullIndex(e);
    if (o.VBR = p0.vbr_abr, o.VBR_mean_bitrate_kbps = w, o.VBR_mean_bitrate_kbps = Math.min(o.VBR_mean_bitrate_kbps, 320), o.VBR_mean_bitrate_kbps = Math.max(o.VBR_mean_bitrate_kbps, 8), o.brate = o.VBR_mean_bitrate_kbps, o.VBR_mean_bitrate_kbps > 320 && (o.disable_reservoir = !0), p[z].safejoint > 0 && (o.exp_nspsytune = 2 | o.exp_nspsytune), p[z].sfscale > 0 && (o.internal_flags.noise_shaping = 2), Math.abs(p[z].nsbass) > 0) {
      var P = int(4 * p[z].nsbass);
      P < 0 && (P += 64), o.exp_nspsytune = o.exp_nspsytune | P << 2;
    }
    return d != 0 ? o.quant_comp = p[z].quant_comp : Math.abs(o.quant_comp - -1) > 0 || (o.quant_comp = p[z].quant_comp), d != 0 ? o.quant_comp_short = p[z].quant_comp_s : Math.abs(o.quant_comp_short - -1) > 0 || (o.quant_comp_short = p[z].quant_comp_s), d != 0 ? o.msfix = p[z].nsmsfix : Math.abs(o.msfix - -1) > 0 || (o.msfix = p[z].nsmsfix), d != 0 ? o.internal_flags.nsPsy.attackthre = p[z].st_lrm : Math.abs(o.internal_flags.nsPsy.attackthre - -1) > 0 || (o.internal_flags.nsPsy.attackthre = p[z].st_lrm), d != 0 ? o.internal_flags.nsPsy.attackthre_s = p[z].st_s : Math.abs(o.internal_flags.nsPsy.attackthre_s - -1) > 0 || (o.internal_flags.nsPsy.attackthre_s = p[z].st_s), d != 0 ? o.scale = p[z].scale : Math.abs(o.scale - -1) > 0 || (o.scale = p[z].scale), d != 0 ? o.maskingadjust = p[z].masking_adj : Math.abs(o.maskingadjust - 0) > 0 || (o.maskingadjust = p[z].masking_adj), p[z].masking_adj > 0 ? d != 0 ? o.maskingadjust_short = 0.9 * p[z].masking_adj : Math.abs(o.maskingadjust_short - 0) > 0 || (o.maskingadjust_short = 0.9 * p[z].masking_adj) : d != 0 ? o.maskingadjust_short = 1.1 * p[z].masking_adj : Math.abs(o.maskingadjust_short - 0) > 0 || (o.maskingadjust_short = 1.1 * p[z].masking_adj), d != 0 ? o.ATHlower = -p[z].ath_lower / 10 : Math.abs(10 * -o.ATHlower - 0) > 0 || (o.ATHlower = -p[z].ath_lower / 10), d != 0 ? o.ATHcurve = p[z].ath_curve : Math.abs(o.ATHcurve - -1) > 0 || (o.ATHcurve = p[z].ath_curve), d != 0 ? o.interChRatio = p[z].interch : Math.abs(o.interChRatio - -1) > 0 || (o.interChRatio = p[z].interch), e;
  }
  this.apply_preset = function(o, e, d) {
    switch (e) {
      case x.R3MIX:
        e = x.V3, o.VBR = p0.vbr_mtrh;
        break;
      case x.MEDIUM:
        e = x.V4, o.VBR = p0.vbr_rh;
        break;
      case x.MEDIUM_FAST:
        e = x.V4, o.VBR = p0.vbr_mtrh;
        break;
      case x.STANDARD:
        e = x.V2, o.VBR = p0.vbr_rh;
        break;
      case x.STANDARD_FAST:
        e = x.V2, o.VBR = p0.vbr_mtrh;
        break;
      case x.EXTREME:
        e = x.V0, o.VBR = p0.vbr_rh;
        break;
      case x.EXTREME_FAST:
        e = x.V0, o.VBR = p0.vbr_mtrh;
        break;
      case x.INSANE:
        return e = 320, o.preset = e, q(o, e, d), o.VBR = p0.vbr_off, e;
    }
    switch (o.preset = e, e) {
      case x.V9:
        return j(o, 9, d), e;
      case x.V8:
        return j(o, 8, d), e;
      case x.V7:
        return j(o, 7, d), e;
      case x.V6:
        return j(o, 6, d), e;
      case x.V5:
        return j(o, 5, d), e;
      case x.V4:
        return j(o, 4, d), e;
      case x.V3:
        return j(o, 3, d), e;
      case x.V2:
        return j(o, 2, d), e;
      case x.V1:
        return j(o, 1, d), e;
      case x.V0:
        return j(o, 0, d), e;
    }
    return 8 <= e && e <= 320 ? q(o, e, d) : (o.preset = 0, e);
  };
}, W2 = function() {
  this.setModules = function(H, x) {
  };
}, z2 = function() {
  this.over_noise = 0, this.tot_noise = 0, this.max_noise = 0, this.over_count = 0, this.over_SSD = 0, this.bits = 0;
}, d2 = C1, zt = d2.new_float, J2 = d2.new_int, $2 = function() {
  this.global_gain = 0, this.sfb_count1 = 0, this.step = J2(39), this.noise = zt(39), this.noise_log = zt(39);
}, j0 = C1, E0 = j0.System, Jt = j0.VbrMode, ht = j0.Util, Y0 = j0.Arrays, Z0 = j0.new_float, U0 = j0.assert, ta = W2, bt = z2, aa = $2, k1 = z1(), $t = dt, t2 = it, sa = function() {
  var H, x, O;
  this.rv = null, this.qupvt = null;
  var e1, l1 = new ta();
  function J(o) {
    this.ordinal = o;
  }
  function j(o) {
    for (var e = 0; e < o.sfbmax; e++)
      if (o.scalefac[e] + o.subblock_gain[o.window[e]] == 0)
        return !1;
    return !0;
  }
  function p(o, e, d, w, z) {
    var P;
    switch (o) {
      default:
      case 9:
        e.over_count > 0 ? (P = d.over_SSD <= e.over_SSD, d.over_SSD == e.over_SSD && (P = d.bits < e.bits)) : P = d.max_noise < 0 && 10 * d.max_noise + d.bits <= 10 * e.max_noise + e.bits;
        break;
      case 0:
        P = d.over_count < e.over_count || d.over_count == e.over_count && d.over_noise < e.over_noise || d.over_count == e.over_count && BitStream.EQ(d.over_noise, e.over_noise) && d.tot_noise < e.tot_noise;
        break;
      case 8:
        d.max_noise = function(R, _) {
          for (var m, V = 1e-37, g = 0; g < _.psymax; g++)
            V += (m = R[g], ht.FAST_LOG10(0.368 + 0.632 * m * m * m));
          return Math.max(1e-20, V);
        }(z, w);
      case 1:
        P = d.max_noise < e.max_noise;
        break;
      case 2:
        P = d.tot_noise < e.tot_noise;
        break;
      case 3:
        P = d.tot_noise < e.tot_noise && d.max_noise < e.max_noise;
        break;
      case 4:
        P = d.max_noise <= 0 && e.max_noise > 0.2 || d.max_noise <= 0 && e.max_noise < 0 && e.max_noise > d.max_noise - 0.2 && d.tot_noise < e.tot_noise || d.max_noise <= 0 && e.max_noise > 0 && e.max_noise > d.max_noise - 0.2 && d.tot_noise < e.tot_noise + e.over_noise || d.max_noise > 0 && e.max_noise > -0.05 && e.max_noise > d.max_noise - 0.1 && d.tot_noise + d.over_noise < e.tot_noise + e.over_noise || d.max_noise > 0 && e.max_noise > -0.1 && e.max_noise > d.max_noise - 0.15 && d.tot_noise + d.over_noise + d.over_noise < e.tot_noise + e.over_noise + e.over_noise;
        break;
      case 5:
        P = d.over_noise < e.over_noise || BitStream.EQ(d.over_noise, e.over_noise) && d.tot_noise < e.tot_noise;
        break;
      case 6:
        P = d.over_noise < e.over_noise || BitStream.EQ(d.over_noise, e.over_noise) && (d.max_noise < e.max_noise || BitStream.EQ(d.max_noise, e.max_noise) && d.tot_noise <= e.tot_noise);
        break;
      case 7:
        P = d.over_count < e.over_count || d.over_noise < e.over_noise;
    }
    return e.over_count == 0 && (P = P && d.bits < e.bits), P;
  }
  function q(o, e, d, w, z) {
    var P = o.internal_flags;
    (function(_, m, V, g, W) {
      var Y, i1 = _.internal_flags;
      Y = m.scalefac_scale == 0 ? 1.2968395546510096 : 1.6817928305074292;
      for (var t1 = 0, n1 = 0; n1 < m.sfbmax; n1++)
        t1 < V[n1] && (t1 = V[n1]);
      var r1 = i1.noise_shaping_amp;
      switch (r1 == 3 && (r1 = W ? 2 : 1), r1) {
        case 2:
          break;
        case 1:
          t1 > 1 ? t1 = Math.pow(t1, 0.5) : t1 *= 0.95;
          break;
        default:
          t1 > 1 ? t1 = 1 : t1 *= 0.95;
      }
      var G = 0;
      for (n1 = 0; n1 < m.sfbmax; n1++) {
        var _1, c = m.width[n1];
        if (G += c, !(V[n1] < t1)) {
          if (2 & i1.substep_shaping && (i1.pseudohalf[n1] = i1.pseudohalf[n1] == 0 ? 1 : 0, i1.pseudohalf[n1] == 0 && i1.noise_shaping_amp == 2))
            return;
          for (m.scalefac[n1]++, _1 = -c; _1 < 0; _1++)
            g[G + _1] *= Y, g[G + _1] > m.xrpow_max && (m.xrpow_max = g[G + _1]);
          if (i1.noise_shaping_amp == 2)
            return;
        }
      }
    })(o, e, d, w, z);
    var R = j(e);
    return !R && (!(R = P.mode_gr == 2 ? e1.scale_bitcount(e) : e1.scale_bitcount_lsf(P, e)) || (P.noise_shaping > 1 && (Y0.fill(P.pseudohalf, 0), e.scalefac_scale == 0 ? (function(_, m) {
      for (var V = 0, g = 0; g < _.sfbmax; g++) {
        var W = _.width[g], Y = _.scalefac[g];
        if (_.preflag != 0 && (Y += O.pretab[g]), V += W, (1 & Y) != 0) {
          Y++;
          for (var i1 = -W; i1 < 0; i1++)
            m[V + i1] *= 1.2968395546510096, m[V + i1] > _.xrpow_max && (_.xrpow_max = m[V + i1]);
        }
        _.scalefac[g] = Y >> 1;
      }
      _.preflag = 0, _.scalefac_scale = 1;
    }(e, w), R = !1) : e.block_type == k1.SHORT_TYPE && P.subblock_gain > 0 && (R = function(_, m, V) {
      var g, W = m.scalefac;
      for (g = 0; g < m.sfb_lmax; g++)
        if (W[g] >= 16)
          return !0;
      for (var Y = 0; Y < 3; Y++) {
        var i1 = 0, t1 = 0;
        for (g = m.sfb_lmax + Y; g < m.sfbdivide; g += 3)
          i1 < W[g] && (i1 = W[g]);
        for (; g < m.sfbmax; g += 3)
          t1 < W[g] && (t1 = W[g]);
        if (!(i1 < 16 && t1 < 8)) {
          if (m.subblock_gain[Y] >= 7)
            return !0;
          m.subblock_gain[Y]++;
          var n1 = _.scalefac_band.l[m.sfb_lmax];
          for (g = m.sfb_lmax + Y; g < m.sfbmax; g += 3) {
            var r1 = m.width[g], G = W[g];
            if ((G -= 4 >> m.scalefac_scale) >= 0)
              W[g] = G, n1 += 3 * r1;
            else {
              W[g] = 0;
              var _1 = 210 + (G << m.scalefac_scale + 1);
              S = O.IPOW20(_1), n1 += r1 * (Y + 1);
              for (var c = -r1; c < 0; c++)
                V[n1 + c] *= S, V[n1 + c] > m.xrpow_max && (m.xrpow_max = V[n1 + c]);
              n1 += r1 * (3 - Y - 1);
            }
          }
          var S = O.IPOW20(202);
          for (n1 += m.width[g] * (Y + 1), c = -m.width[g]; c < 0; c++)
            V[n1 + c] *= S, V[n1 + c] > m.xrpow_max && (m.xrpow_max = V[n1 + c]);
        }
      }
      return !1;
    }(P, e, w) || j(e))), R || (R = P.mode_gr == 2 ? e1.scale_bitcount(e) : e1.scale_bitcount_lsf(P, e)), !R));
  }
  this.setModules = function(o, e, d, w) {
    H = o, x = e, this.rv = e, O = d, this.qupvt = d, e1 = w, l1.setModules(O, e1);
  }, this.ms_convert = function(o, e) {
    for (var d = 0; d < 576; ++d) {
      var w = o.tt[e][0].xr[d], z = o.tt[e][1].xr[d];
      o.tt[e][0].xr[d] = (w + z) * (0.5 * ht.SQRT2), o.tt[e][1].xr[d] = (w - z) * (0.5 * ht.SQRT2);
    }
  }, this.init_xrpow = function(o, e, d) {
    var w = 0, z = 0 | e.max_nonzero_coeff;
    if (e.xrpow_max = 0, Y0.fill(d, z, 576, 0), w = function(_, m, V, g) {
      g = 0;
      for (var W = 0; W <= V; ++W) {
        var Y = Math.abs(_.xr[W]);
        g += Y, m[W] = Math.sqrt(Y * Math.sqrt(Y)), m[W] > _.xrpow_max && (_.xrpow_max = m[W]);
      }
      return g;
    }(e, d, z, w), w > 1e-20) {
      var P = 0;
      2 & o.substep_shaping && (P = 1);
      for (var R = 0; R < e.psymax; R++)
        o.pseudohalf[R] = P;
      return !0;
    }
    return Y0.fill(e.l3_enc, 0, 576, 0), !1;
  }, this.init_outer_loop = function(o, e) {
    e.part2_3_length = 0, e.big_values = 0, e.count1 = 0, e.global_gain = 210, e.scalefac_compress = 0, e.table_select[0] = 0, e.table_select[1] = 0, e.table_select[2] = 0, e.subblock_gain[0] = 0, e.subblock_gain[1] = 0, e.subblock_gain[2] = 0, e.subblock_gain[3] = 0, e.region0_count = 0, e.region1_count = 0, e.preflag = 0, e.scalefac_scale = 0, e.count1table_select = 0, e.part2_length = 0, e.sfb_lmax = k1.SBPSY_l, e.sfb_smin = k1.SBPSY_s, e.psy_lmax = o.sfb21_extra ? k1.SBMAX_l : k1.SBPSY_l, e.psymax = e.psy_lmax, e.sfbmax = e.sfb_lmax, e.sfbdivide = 11;
    for (var d = 0; d < k1.SBMAX_l; d++)
      e.width[d] = o.scalefac_band.l[d + 1] - o.scalefac_band.l[d], e.window[d] = 3;
    if (e.block_type == k1.SHORT_TYPE) {
      var w = Z0(576);
      e.sfb_smin = 0, e.sfb_lmax = 0, e.mixed_block_flag != 0 && (e.sfb_smin = 3, e.sfb_lmax = 2 * o.mode_gr + 4), e.psymax = e.sfb_lmax + 3 * ((o.sfb21_extra ? k1.SBMAX_s : k1.SBPSY_s) - e.sfb_smin), e.sfbmax = e.sfb_lmax + 3 * (k1.SBPSY_s - e.sfb_smin), e.sfbdivide = e.sfbmax - 18, e.psy_lmax = e.sfb_lmax;
      var z = o.scalefac_band.l[e.sfb_lmax];
      for (E0.arraycopy(e.xr, 0, w, 0, 576), d = e.sfb_smin; d < k1.SBMAX_s; d++)
        for (var P = o.scalefac_band.s[d], R = o.scalefac_band.s[d + 1], _ = 0; _ < 3; _++)
          for (var m = P; m < R; m++)
            e.xr[z++] = w[3 * m + _];
      var V = e.sfb_lmax;
      for (d = e.sfb_smin; d < k1.SBMAX_s; d++)
        e.width[V] = e.width[V + 1] = e.width[V + 2] = o.scalefac_band.s[d + 1] - o.scalefac_band.s[d], e.window[V] = 0, e.window[V + 1] = 1, e.window[V + 2] = 2, V += 3;
    }
    e.count1bits = 0, e.sfb_partition_table = O.nr_of_sfb_block[0][0], e.slen[0] = 0, e.slen[1] = 0, e.slen[2] = 0, e.slen[3] = 0, e.max_nonzero_coeff = 575, Y0.fill(e.scalefac, 0), function(g, W) {
      var Y = g.ATH, i1 = W.xr;
      if (W.block_type != k1.SHORT_TYPE)
        for (var t1 = !1, n1 = k1.PSFB21 - 1; n1 >= 0 && !t1; n1--) {
          var r1 = g.scalefac_band.psfb21[n1], G = g.scalefac_band.psfb21[n1 + 1], _1 = O.athAdjust(Y.adjust, Y.psfb21[n1], Y.floor);
          g.nsPsy.longfact[21] > 1e-12 && (_1 *= g.nsPsy.longfact[21]);
          for (var c = G - 1; c >= r1; c--) {
            if (!(Math.abs(i1[c]) < _1)) {
              t1 = !0;
              break;
            }
            i1[c] = 0;
          }
        }
      else
        for (var S = 0; S < 3; S++)
          for (t1 = !1, n1 = k1.PSFB12 - 1; n1 >= 0 && !t1; n1--) {
            G = (r1 = 3 * g.scalefac_band.s[12] + (g.scalefac_band.s[13] - g.scalefac_band.s[12]) * S + (g.scalefac_band.psfb12[n1] - g.scalefac_band.psfb12[0])) + (g.scalefac_band.psfb12[n1 + 1] - g.scalefac_band.psfb12[n1]);
            var E = O.athAdjust(Y.adjust, Y.psfb12[n1], Y.floor);
            for (g.nsPsy.shortfact[12] > 1e-12 && (E *= g.nsPsy.shortfact[12]), c = G - 1; c >= r1; c--) {
              if (!(Math.abs(i1[c]) < E)) {
                t1 = !0;
                break;
              }
              i1[c] = 0;
            }
          }
    }(o, e);
  }, J.BINSEARCH_NONE = new J(0), J.BINSEARCH_UP = new J(1), J.BINSEARCH_DOWN = new J(2), this.trancate_smallspectrums = function(o, e, d, w) {
    var z = Z0(t2.SFBMAX);
    if ((4 & o.substep_shaping || e.block_type != k1.SHORT_TYPE) && !(128 & o.substep_shaping)) {
      O.calc_noise(e, d, z, new bt(), null);
      for (var P = 0; P < 576; P++) {
        var R = 0;
        e.l3_enc[P] != 0 && (R = Math.abs(e.xr[P])), w[P] = R;
      }
      P = 0;
      var _ = 8;
      e.block_type == k1.SHORT_TYPE && (_ = 6);
      do {
        var m, V, g, W, Y = e.width[_];
        if (P += Y, !(z[_] >= 1 || (Y0.sort(w, P - Y, Y), BitStream.EQ(w[P - 1], 0)))) {
          m = (1 - z[_]) * d[_], V = 0, W = 0;
          do {
            var i1;
            for (g = 1; W + g < Y && !BitStream.NEQ(w[W + P - Y], w[W + P + g - Y]); g++)
              ;
            if (m < (i1 = w[W + P - Y] * w[W + P - Y] * g)) {
              W != 0 && (V = w[W + P - Y - 1]);
              break;
            }
            m -= i1, W += g;
          } while (W < Y);
          if (!BitStream.EQ(V, 0))
            do
              Math.abs(e.xr[P - Y]) <= V && (e.l3_enc[P - Y] = 0);
            while (--Y > 0);
        }
      } while (++_ < e.psymax);
      e.part2_3_length = e1.noquant_count_bits(o, e, null);
    }
  }, this.outer_loop = function(o, e, d, w, z, P) {
    var R = o.internal_flags, _ = new $t(), m = Z0(576), V = Z0(t2.SFBMAX), g = new bt(), W = new aa(), Y = 9999999, i1 = !1, t1 = !1, n1 = 0;
    if (function(E, h, U, v, u) {
      var i, a = E.CurrentStep[v], B = !1, X = E.OldValue[v], n = J.BINSEARCH_NONE;
      for (h.global_gain = X, U -= h.part2_length; ; ) {
        var I;
        if (i = e1.count_bits(E, u, h, null), a == 1 || i == U)
          break;
        i > U ? (n == J.BINSEARCH_DOWN && (B = !0), B && (a /= 2), n = J.BINSEARCH_UP, I = a) : (n == J.BINSEARCH_UP && (B = !0), B && (a /= 2), n = J.BINSEARCH_DOWN, I = -a), h.global_gain += I, h.global_gain < 0 && (h.global_gain = 0, B = !0), h.global_gain > 255 && (h.global_gain = 255, B = !0);
      }
      for (U0(h.global_gain >= 0), U0(h.global_gain < 256); i > U && h.global_gain < 255; )
        h.global_gain++, i = e1.count_bits(E, u, h, null);
      E.CurrentStep[v] = X - h.global_gain >= 4 ? 4 : 2, E.OldValue[v] = h.global_gain, h.part2_3_length = i;
    }(R, e, P, z, w), R.noise_shaping == 0)
      return 100;
    O.calc_noise(e, d, V, g, W), g.bits = e.part2_3_length, _.assign(e);
    var r1 = 0;
    for (E0.arraycopy(w, 0, m, 0, 576); !i1; ) {
      do {
        var G, _1 = new bt(), c = 255;
        if (G = 2 & R.substep_shaping ? 20 : 3, R.sfb21_extra && (V[_.sfbmax] > 1 || _.block_type == k1.SHORT_TYPE && (V[_.sfbmax + 1] > 1 || V[_.sfbmax + 2] > 1)) || !q(o, _, V, w, t1))
          break;
        _.scalefac_scale != 0 && (c = 254);
        var S = P - _.part2_length;
        if (S <= 0)
          break;
        for (; (_.part2_3_length = e1.count_bits(R, w, _, W)) > S && _.global_gain <= c; )
          _.global_gain++;
        if (_.global_gain > c)
          break;
        if (g.over_count == 0) {
          for (; (_.part2_3_length = e1.count_bits(R, w, _, W)) > Y && _.global_gain <= c; )
            _.global_gain++;
          if (_.global_gain > c)
            break;
        }
        if (O.calc_noise(_, d, V, _1, W), _1.bits = _.part2_3_length, (p(e.block_type != k1.SHORT_TYPE ? o.quant_comp : o.quant_comp_short, g, _1, _, V) ? 1 : 0) != 0)
          Y = e.part2_3_length, g = _1, e.assign(_), r1 = 0, E0.arraycopy(w, 0, m, 0, 576);
        else if (R.full_outer_loop == 0 && (++r1 > G && g.over_count == 0 || R.noise_shaping_amp == 3 && t1 && r1 > 30 || R.noise_shaping_amp == 3 && t1 && _.global_gain - n1 > 15))
          break;
      } while (_.global_gain + _.scalefac_scale < 255);
      R.noise_shaping_amp == 3 ? t1 ? i1 = !0 : (_.assign(e), E0.arraycopy(m, 0, w, 0, 576), r1 = 0, n1 = _.global_gain, t1 = !0) : i1 = !0;
    }
    return U0(e.global_gain + e.scalefac_scale <= 255), o.VBR == Jt.vbr_rh || o.VBR == Jt.vbr_mtrh ? E0.arraycopy(m, 0, w, 0, 576) : 1 & R.substep_shaping && trancate_smallspectrums(R, e, d, w), g.over_count;
  }, this.iteration_finish_one = function(o, e, d) {
    var w = o.l3_side, z = w.tt[e][d];
    e1.best_scalefac_store(o, e, d, w), o.use_best_huffman == 1 && e1.best_huffman_divide(o, z), x.ResvAdjust(o, z);
  }, this.VBR_encode_granule = function(o, e, d, w, z, P, R) {
    var _, m = o.internal_flags, V = new $t(), g = Z0(576), W = R, Y = R + 1, i1 = (R + P) / 2, t1 = 0, n1 = m.sfb21_extra;
    U0(W <= LameInternalFlags.MAX_BITS_PER_CHANNEL), Y0.fill(V.l3_enc, 0);
    do
      m.sfb21_extra = !(i1 > W - 42) && n1, outer_loop(o, e, d, w, z, i1) <= 0 ? (t1 = 1, Y = e.part2_3_length, V.assign(e), E0.arraycopy(w, 0, g, 0, 576), _ = (R = Y - 32) - P, i1 = (R + P) / 2) : (_ = R - (P = i1 + 32), i1 = (R + P) / 2, t1 != 0 && (t1 = 2, e.assign(V), E0.arraycopy(g, 0, w, 0, 576)));
    while (_ > 12);
    m.sfb21_extra = n1, t1 == 2 && E0.arraycopy(V.l3_enc, 0, e.l3_enc, 0, 576), U0(e.part2_3_length <= W);
  }, this.get_framebits = function(o, e) {
    var d = o.internal_flags;
    d.bitrate_index = d.VBR_min_bitrate;
    var w = H.getframebits(o);
    d.bitrate_index = 1, w = H.getframebits(o);
    for (var z = 1; z <= d.VBR_max_bitrate; z++) {
      d.bitrate_index = z;
      var P = new MeanBits(w);
      e[z] = x.ResvFrameBegin(o, P), w = P.bits;
    }
  }, this.VBR_old_prepare = function(o, e, d, w, z, P, R, _, m) {
    var V, g = o.internal_flags, W = 0, Y = 1, i1 = 0;
    g.bitrate_index = g.VBR_max_bitrate;
    var t1 = x.ResvFrameBegin(o, new MeanBits(0)) / g.mode_gr;
    get_framebits(o, P);
    for (var n1 = 0; n1 < g.mode_gr; n1++) {
      var r1 = O.on_pe(o, e, _[n1], t1, n1, 0);
      g.mode_ext == k1.MPG_MD_MS_LR && (ms_convert(g.l3_side, n1), O.reduce_side(_[n1], d[n1], t1, r1));
      for (var G = 0; G < g.channels_out; ++G) {
        var _1 = g.l3_side.tt[n1][G];
        _1.block_type != k1.SHORT_TYPE ? (W = 1.28 / (1 + Math.exp(3.5 - e[n1][G] / 300)) - 0.05, V = g.PSY.mask_adjust - W) : (W = 2.56 / (1 + Math.exp(3.5 - e[n1][G] / 300)) - 0.14, V = g.PSY.mask_adjust_short - W), g.masking_lower = Math.pow(10, 0.1 * V), init_outer_loop(g, _1), m[n1][G] = O.calc_xmin(o, w[n1][G], _1, z[n1][G]), m[n1][G] != 0 && (Y = 0), R[n1][G] = 126, i1 += _[n1][G];
      }
    }
    for (n1 = 0; n1 < g.mode_gr; n1++)
      for (G = 0; G < g.channels_out; G++)
        i1 > P[g.VBR_max_bitrate] && (_[n1][G] *= P[g.VBR_max_bitrate], _[n1][G] /= i1), R[n1][G] > _[n1][G] && (R[n1][G] = _[n1][G]);
    return Y;
  }, this.bitpressure_strategy = function(o, e, d, w) {
    for (var z = 0; z < o.mode_gr; z++)
      for (var P = 0; P < o.channels_out; P++) {
        for (var R = o.l3_side.tt[z][P], _ = e[z][P], m = 0, V = 0; V < R.psy_lmax; V++)
          _[m++] *= 1 + 0.029 * V * V / k1.SBMAX_l / k1.SBMAX_l;
        if (R.block_type == k1.SHORT_TYPE)
          for (V = R.sfb_smin; V < k1.SBMAX_s; V++)
            _[m++] *= 1 + 0.029 * V * V / k1.SBMAX_s / k1.SBMAX_s, _[m++] *= 1 + 0.029 * V * V / k1.SBMAX_s / k1.SBMAX_s, _[m++] *= 1 + 0.029 * V * V / k1.SBMAX_s / k1.SBMAX_s;
        w[z][P] = 0 | Math.max(d[z][P], 0.9 * w[z][P]);
      }
  }, this.VBR_new_prepare = function(o, e, d, w, z, P) {
    var R, _ = o.internal_flags, m = 1, V = 0, g = 0;
    if (o.free_format)
      _.bitrate_index = 0, W = new MeanBits(V), R = x.ResvFrameBegin(o, W), V = W.bits, z[0] = R;
    else {
      _.bitrate_index = _.VBR_max_bitrate;
      var W = new MeanBits(V);
      x.ResvFrameBegin(o, W), V = W.bits, get_framebits(o, z), R = z[_.VBR_max_bitrate];
    }
    for (var Y = 0; Y < _.mode_gr; Y++) {
      O.on_pe(o, e, P[Y], V, Y, 0), _.mode_ext == k1.MPG_MD_MS_LR && ms_convert(_.l3_side, Y);
      for (var i1 = 0; i1 < _.channels_out; ++i1) {
        var t1 = _.l3_side.tt[Y][i1];
        _.masking_lower = Math.pow(10, 0.1 * _.PSY.mask_adjust), init_outer_loop(_, t1), O.calc_xmin(o, d[Y][i1], t1, w[Y][i1]) != 0 && (m = 0), g += P[Y][i1];
      }
    }
    for (Y = 0; Y < _.mode_gr; Y++)
      for (i1 = 0; i1 < _.channels_out; i1++)
        g > R && (P[Y][i1] *= R, P[Y][i1] /= g);
    return m;
  }, this.calc_target_bits = function(o, e, d, w, z, P) {
    var R, _, m, V, g = o.internal_flags, W = g.l3_side, Y = 0;
    g.bitrate_index = g.VBR_max_bitrate;
    var i1 = new MeanBits(Y);
    for (P[0] = x.ResvFrameBegin(o, i1), Y = i1.bits, g.bitrate_index = 1, Y = H.getframebits(o) - 8 * g.sideinfo_len, z[0] = Y / (g.mode_gr * g.channels_out), Y = o.VBR_mean_bitrate_kbps * o.framesize * 1e3, 1 & g.substep_shaping && (Y *= 1.09), Y /= o.out_samplerate, Y -= 8 * g.sideinfo_len, Y /= g.mode_gr * g.channels_out, (R = 0.93 + 0.07 * (11 - o.compression_ratio) / 5.5) < 0.9 && (R = 0.9), R > 1 && (R = 1), _ = 0; _ < g.mode_gr; _++) {
      var t1 = 0;
      for (m = 0; m < g.channels_out; m++) {
        if (w[_][m] = int(R * Y), e[_][m] > 700) {
          var n1 = int((e[_][m] - 700) / 1.4), r1 = W.tt[_][m];
          w[_][m] = int(R * Y), r1.block_type == k1.SHORT_TYPE && n1 < Y / 2 && (n1 = Y / 2), n1 > 3 * Y / 2 ? n1 = 3 * Y / 2 : n1 < 0 && (n1 = 0), w[_][m] += n1;
        }
        w[_][m] > LameInternalFlags.MAX_BITS_PER_CHANNEL && (w[_][m] = LameInternalFlags.MAX_BITS_PER_CHANNEL), t1 += w[_][m];
      }
      if (t1 > LameInternalFlags.MAX_BITS_PER_GRANULE)
        for (m = 0; m < g.channels_out; ++m)
          w[_][m] *= LameInternalFlags.MAX_BITS_PER_GRANULE, w[_][m] /= t1;
    }
    if (g.mode_ext == k1.MPG_MD_MS_LR)
      for (_ = 0; _ < g.mode_gr; _++)
        O.reduce_side(w[_], d[_], Y * g.channels_out, LameInternalFlags.MAX_BITS_PER_GRANULE);
    for (V = 0, _ = 0; _ < g.mode_gr; _++)
      for (m = 0; m < g.channels_out; m++)
        w[_][m] > LameInternalFlags.MAX_BITS_PER_CHANNEL && (w[_][m] = LameInternalFlags.MAX_BITS_PER_CHANNEL), V += w[_][m];
    if (V > P[0])
      for (_ = 0; _ < g.mode_gr; _++)
        for (m = 0; m < g.channels_out; m++)
          w[_][m] *= P[0], w[_][m] /= V;
  };
}, a2 = C1.assert, ra = function() {
  var H;
  this.setModules = function(x) {
    H = x;
  }, this.ResvFrameBegin = function(x, O) {
    var e1, l1 = x.internal_flags, J = l1.l3_side, j = H.getframebits(x);
    O.bits = (j - 8 * l1.sideinfo_len) / l1.mode_gr;
    var p = 2048 * l1.mode_gr - 8;
    x.brate > 320 ? e1 = 8 * int(1e3 * x.brate / (x.out_samplerate / 1152) / 8 + 0.5) : (e1 = 11520, x.strict_ISO && (e1 = 8 * int(32e4 / (x.out_samplerate / 1152) / 8 + 0.5))), l1.ResvMax = e1 - j, l1.ResvMax > p && (l1.ResvMax = p), (l1.ResvMax < 0 || x.disable_reservoir) && (l1.ResvMax = 0);
    var q = O.bits * l1.mode_gr + Math.min(l1.ResvSize, l1.ResvMax);
    return q > e1 && (q = e1), a2(l1.ResvMax % 8 == 0), a2(l1.ResvMax >= 0), J.resvDrain_pre = 0, l1.pinfo != null && (l1.pinfo.mean_bits = O.bits / 2, l1.pinfo.resvsize = l1.ResvSize), q;
  }, this.ResvMaxBits = function(x, O, e1, l1) {
    var J, j = x.internal_flags, p = j.ResvSize, q = j.ResvMax;
    l1 != 0 && (p += O), 1 & j.substep_shaping && (q *= 0.9), e1.bits = O, 10 * p > 9 * q ? (J = p - 9 * q / 10, e1.bits += J, j.substep_shaping |= 128) : (J = 0, j.substep_shaping &= 127, x.disable_reservoir || 1 & j.substep_shaping || (e1.bits -= 0.1 * O));
    var o = p < 6 * j.ResvMax / 10 ? p : 6 * j.ResvMax / 10;
    return (o -= J) < 0 && (o = 0), o;
  }, this.ResvAdjust = function(x, O) {
    x.ResvSize -= O.part2_3_length + O.part2_length;
  }, this.ResvFrameEnd = function(x, O) {
    var e1, l1 = x.l3_side;
    x.ResvSize += O * x.mode_gr;
    var J = 0;
    l1.resvDrain_post = 0, l1.resvDrain_pre = 0, (e1 = x.ResvSize % 8) != 0 && (J += e1), (e1 = x.ResvSize - J - x.ResvMax) > 0 && (J += e1);
    var j = Math.min(8 * l1.main_data_begin, J) / 8;
    l1.resvDrain_pre += 8 * j, J -= 8 * j, x.ResvSize -= 8 * j, l1.main_data_begin -= j, l1.resvDrain_post += J, x.ResvSize -= J;
  };
}, ea = function() {
  this.getLameVersion = function() {
    return "3.98.4";
  }, this.getLameShortVersion = function() {
    return "3.98.4";
  }, this.getLameVeryShortVersion = function() {
    return "LAME3.98r";
  }, this.getPsyVersion = function() {
    return "0.93";
  }, this.getLameUrl = function() {
    return "http://www.mp3dev.org/";
  }, this.getLameOsBitness = function() {
    return "32bits";
  };
}, G0 = C1, na = G0.System, mt = G0.VbrMode, s2 = G0.ShortBlock, _a = G0.Arrays, et = G0.new_byte, ia = G0.assert;
function Q0() {
  var H, x, O;
  this.setModules = function(R, _, m) {
    H = R, x = _, O = m;
  };
  var e1 = Q0.NUMTOCENTRIES, l1 = Q0.MAXFRAMESIZE, J = e1 + 4 + 4 + 4 + 4 + 4 + 9 + 1 + 1 + 8 + 1 + 1 + 3 + 1 + 1 + 2 + 4 + 2 + 2, j = "Xing", p = "Info", q = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];
  function o(R, _) {
    var m = 255 & R[_ + 0];
    return m <<= 8, m |= 255 & R[_ + 1], m <<= 8, m |= 255 & R[_ + 2], m <<= 8, m |= 255 & R[_ + 3];
  }
  function e(R, _, m) {
    R[_ + 0] = 255 & m >> 24, R[_ + 1] = 255 & m >> 16, R[_ + 2] = 255 & m >> 8, R[_ + 3] = 255 & m;
  }
  function d(R, _, m) {
    R[_ + 0] = 255 & m >> 8, R[_ + 1] = 255 & m;
  }
  function w(R, _, m) {
    return 255 & (R << _ | m & ~(-1 << _));
  }
  function z(R, _) {
    var m = R.internal_flags;
    _[0] = w(_[0], 8, 255), _[1] = w(_[1], 3, 7), _[1] = w(_[1], 1, R.out_samplerate < 16e3 ? 0 : 1), _[1] = w(_[1], 1, R.version), _[1] = w(_[1], 2, 1), _[1] = w(_[1], 1, R.error_protection ? 0 : 1), _[2] = w(_[2], 4, m.bitrate_index), _[2] = w(_[2], 2, m.samplerate_index), _[2] = w(_[2], 1, 0), _[2] = w(_[2], 1, R.extension), _[3] = w(_[3], 2, R.mode.ordinal()), _[3] = w(_[3], 2, m.mode_ext), _[3] = w(_[3], 1, R.copyright), _[3] = w(_[3], 1, R.original), _[3] = w(_[3], 2, R.emphasis), _[0] = 255;
    var V, g, W = 241 & _[1];
    V = R.version == 1 ? 128 : R.out_samplerate < 16e3 ? 32 : 64, R.VBR == mt.vbr_off && (V = R.brate), g = R.free_format ? 0 : 255 & 16 * H.BitrateIndex(V, R.version, R.out_samplerate), R.version == 1 ? (_[1] = 255 & (10 | W), W = 13 & _[2], _[2] = 255 & (g | W)) : (_[1] = 255 & (2 | W), W = 13 & _[2], _[2] = 255 & (g | W));
  }
  function P(R, _) {
    return _ = _ >> 8 ^ q[255 & (_ ^ R)];
  }
  this.addVbrFrame = function(R) {
    var _ = R.internal_flags, m = Tables.bitrate_table[R.version][_.bitrate_index];
    ia(_.VBR_seek_table.bag != null), function(V, g) {
      if (V.nVbrNumFrames++, V.sum += g, V.seen++, !(V.seen < V.want) && (V.pos < V.size && (V.bag[V.pos] = V.sum, V.pos++, V.seen = 0), V.pos == V.size)) {
        for (var W = 1; W < V.size; W += 2)
          V.bag[W / 2] = V.bag[W];
        V.want *= 2, V.pos /= 2;
      }
    }(_.VBR_seek_table, m);
  }, this.getVbrTag = function(R) {
    var _ = new VBRTagData(), m = 0;
    _.flags = 0;
    var V = R[m + 1] >> 3 & 1, g = R[m + 2] >> 2 & 3, W = R[m + 3] >> 6 & 3, Y = R[m + 2] >> 4 & 15;
    if (Y = Tables.bitrate_table[V][Y], R[m + 1] >> 4 == 14 ? _.samprate = Tables.samplerate_table[2][g] : _.samprate = Tables.samplerate_table[V][g], !function(G, _1) {
      return new String(G, _1, 4(), null).equals(j) || new String(G, _1, 4(), null).equals(p);
    }(R, m += V != 0 ? W != 3 ? 36 : 21 : W != 3 ? 21 : 13))
      return null;
    m += 4, _.hId = V;
    var i1 = _.flags = o(R, m);
    if (m += 4, 1 & i1 && (_.frames = o(R, m), m += 4), 2 & i1 && (_.bytes = o(R, m), m += 4), (4 & i1) != 0) {
      if (_.toc != null)
        for (var t1 = 0; t1 < e1; t1++)
          _.toc[t1] = R[m + t1];
      m += e1;
    }
    _.vbrScale = -1, 8 & i1 && (_.vbrScale = o(R, m), m += 4), _.headersize = 72e3 * (V + 1) * Y / _.samprate;
    var n1 = R[(m += 21) + 0] << 4;
    n1 += R[m + 1] >> 4;
    var r1 = (15 & R[m + 1]) << 8;
    return (n1 < 0 || n1 > 3e3) && (n1 = -1), ((r1 += 255 & R[m + 2]) < 0 || r1 > 3e3) && (r1 = -1), _.encDelay = n1, _.encPadding = r1, _;
  }, this.InitVbrTag = function(R) {
    var _, m = R.internal_flags;
    _ = R.version == 1 ? 128 : R.out_samplerate < 16e3 ? 32 : 64, R.VBR == mt.vbr_off && (_ = R.brate);
    var V = 72e3 * (R.version + 1) * _ / R.out_samplerate, g = m.sideinfo_len + J;
    if (m.VBR_seek_table.TotalFrameSize = V, V < g || V > l1)
      R.bWriteVbrTag = !1;
    else {
      m.VBR_seek_table.nVbrNumFrames = 0, m.VBR_seek_table.nBytesWritten = 0, m.VBR_seek_table.sum = 0, m.VBR_seek_table.seen = 0, m.VBR_seek_table.want = 1, m.VBR_seek_table.pos = 0, m.VBR_seek_table.bag == null && (m.VBR_seek_table.bag = new int[400](), m.VBR_seek_table.size = 400);
      var W = et(l1);
      z(R, W);
      for (var Y = m.VBR_seek_table.TotalFrameSize, i1 = 0; i1 < Y; ++i1)
        x.add_dummy_byte(R, 255 & W[i1], 1);
    }
  }, this.updateMusicCRC = function(R, _, m, V) {
    for (var g = 0; g < V; ++g)
      R[0] = P(_[m + g], R[0]);
  }, this.getLameTagFrame = function(R, _) {
    var m = R.internal_flags;
    if (!R.bWriteVbrTag || m.Class_ID != Lame.LAME_ID || m.VBR_seek_table.pos <= 0)
      return 0;
    if (_.length < m.VBR_seek_table.TotalFrameSize)
      return m.VBR_seek_table.TotalFrameSize;
    _a.fill(_, 0, m.VBR_seek_table.TotalFrameSize, 0), z(R, _);
    var V = et(e1);
    if (R.free_format)
      for (var g = 1; g < e1; ++g)
        V[g] = 255 & 255 * g / 100;
    else
      (function(t1, n1) {
        if (!(t1.pos <= 0))
          for (var r1 = 1; r1 < e1; ++r1) {
            var G = r1 / e1, _1 = 0 | Math.floor(G * t1.pos);
            _1 > t1.pos - 1 && (_1 = t1.pos - 1);
            var c = 0 | 256 * t1.bag[_1] / t1.sum;
            c > 255 && (c = 255), n1[r1] = 255 & c;
          }
      })(m.VBR_seek_table, V);
    var W = m.sideinfo_len;
    R.error_protection && (W -= 2), R.VBR == mt.vbr_off ? (_[W++] = 255 & p.charAt(0), _[W++] = 255 & p.charAt(1), _[W++] = 255 & p.charAt(2), _[W++] = 255 & p.charAt(3)) : (_[W++] = 255 & j.charAt(0), _[W++] = 255 & j.charAt(1), _[W++] = 255 & j.charAt(2), _[W++] = 255 & j.charAt(3)), e(_, W, 15), e(_, W += 4, m.VBR_seek_table.nVbrNumFrames), W += 4;
    var Y = m.VBR_seek_table.nBytesWritten + m.VBR_seek_table.TotalFrameSize;
    e(_, W, 0 | Y), W += 4, na.arraycopy(V, 0, _, W, V.length), W += V.length, R.error_protection && x.CRC_writeheader(m, _);
    var i1 = 0;
    for (g = 0; g < W; g++)
      i1 = P(_[g], i1);
    return W += function(t1, n1, r1, G, _1) {
      var c, S, E, h, U, v = t1.internal_flags, u = 0, i = t1.encoder_delay, a = t1.encoder_padding, B = 100 - 10 * t1.VBR_q - t1.quality, X = O.getLameVeryShortVersion(), n = [1, 5, 3, 2, 4, 0, 3], I = 0 | (t1.lowpassfreq / 100 + 0.5 > 255 ? 255 : t1.lowpassfreq / 100 + 0.5), L = 0, Q = 0, $ = t1.internal_flags.noise_shaping, y = 0, D = 0, t = 0, s = (1 & t1.exp_nspsytune) != 0, r = (2 & t1.exp_nspsytune) != 0, l = !1, f = !1, b = t1.internal_flags.nogap_total, A = t1.internal_flags.nogap_current, T = t1.ATHtype;
      switch (t1.VBR) {
        case vbr_abr:
          U = t1.VBR_mean_bitrate_kbps;
          break;
        case vbr_off:
          U = t1.brate;
          break;
        default:
          U = t1.VBR_min_bitrate_kbps;
      }
      switch (c = 0 + (t1.VBR.ordinal() < n.length ? n[t1.VBR.ordinal()] : 0), v.findReplayGain && (v.RadioGain > 510 && (v.RadioGain = 510), v.RadioGain < -510 && (v.RadioGain = -510), Q = 8192, Q |= 3072, v.RadioGain >= 0 ? Q |= v.RadioGain : (Q |= 512, Q |= -v.RadioGain)), v.findPeakSample && (L = Math.abs(0 | v.PeakSample / 32767 * Math.pow(2, 23) + 0.5)), b != -1 && (A > 0 && (f = !0), A < b - 1 && (l = !0)), h = T + ((s ? 1 : 0) << 4) + ((r ? 1 : 0) << 5) + ((l ? 1 : 0) << 6) + ((f ? 1 : 0) << 7), B < 0 && (B = 0), t1.mode) {
        case MONO:
          y = 0;
          break;
        case STEREO:
          y = 1;
          break;
        case DUAL_CHANNEL:
          y = 2;
          break;
        case JOINT_STEREO:
          y = t1.force_ms ? 4 : 3;
          break;
        case NOT_SET:
        default:
          y = 7;
      }
      t = t1.in_samplerate <= 32e3 ? 0 : t1.in_samplerate == 48e3 ? 2 : t1.in_samplerate > 48e3 ? 3 : 1, (t1.short_blocks == s2.short_block_forced || t1.short_blocks == s2.short_block_dispensed || t1.lowpassfreq == -1 && t1.highpassfreq == -1 || t1.scale_left < t1.scale_right || t1.scale_left > t1.scale_right || t1.disable_reservoir && t1.brate < 320 || t1.noATH || t1.ATHonly || T == 0 || t1.in_samplerate <= 32e3) && (D = 1), S = $ + (y << 2) + (D << 5) + (t << 6), E = v.nMusicCRC, e(r1, G + u, B), u += 4;
      for (var M = 0; M < 9; M++)
        r1[G + u + M] = 255 & X.charAt(M);
      r1[G + (u += 9)] = 255 & c, r1[G + ++u] = 255 & I, e(r1, G + ++u, L), d(r1, G + (u += 4), Q), d(r1, G + (u += 2), 0), r1[G + (u += 2)] = 255 & h, r1[G + ++u] = U >= 255 ? 255 : 255 & U, r1[G + ++u] = 255 & i >> 4, r1[G + u + 1] = 255 & (i << 4) + (a >> 8), r1[G + u + 2] = 255 & a, r1[G + (u += 3)] = 255 & S, u++, r1[G + u++] = 0, d(r1, G + u, t1.preset), e(r1, G + (u += 2), n1), d(r1, G + (u += 4), E), u += 2;
      for (var k = 0; k < u; k++)
        _1 = P(r1[G + k], _1);
      return d(r1, G + u, _1), u + 2;
    }(R, Y, _, W, i1), m.VBR_seek_table.TotalFrameSize;
  }, this.putVbrTag = function(R, _) {
    if (R.internal_flags.VBR_seek_table.pos <= 0 || (_.seek(_.length()), _.length() == 0))
      return -1;
    var m = function(W) {
      W.seek(0);
      var Y = et(10);
      return W.readFully(Y), new String(Y, "ISO-8859-1").startsWith("ID3") ? 0 : ((127 & Y[6]) << 21 | (127 & Y[7]) << 14 | (127 & Y[8]) << 7 | 127 & Y[9]) + Y.length;
    }(_);
    _.seek(m);
    var V = et(l1), g = getLameTagFrame(R, V);
    return g > V.length ? -1 : (g < 1 || _.write(V, 0, g), 0);
  };
}
Q0.NUMTOCENTRIES = 100, Q0.MAXFRAMESIZE = 2880;
var oa = Q0, v2 = C1, r2 = v2.new_byte, la = v2.assert, fa = Rt(), ua = Q2, ca = c2, ha = m2(), ba = sa, ma = p2(), pa = ra, da = W0, va = At();
z1();
var ga = ea, Sa = oa;
function Aa() {
  this.setModules = function(H, x) {
  };
}
function Ra() {
  this.setModules = function(H, x, O) {
  };
}
function Ma() {
}
function wa() {
  this.setModules = function(H, x) {
  };
}
function u0() {
  this.dataOffset = 0, this.dataLen = 0, this.channels = 0, this.sampleRate = 0;
}
function nt(H) {
  return H.charCodeAt(0) << 24 | H.charCodeAt(1) << 16 | H.charCodeAt(2) << 8 | H.charCodeAt(3);
}
u0.RIFF = nt("RIFF"), u0.WAVE = nt("WAVE"), u0.fmt_ = nt("fmt "), u0.data = nt("data"), u0.readHeader = function(H) {
  var x = new u0(), O = H.getUint32(0, !1);
  if (u0.RIFF == O && (H.getUint32(4, !0), u0.WAVE == H.getUint32(8, !1) && u0.fmt_ == H.getUint32(12, !1))) {
    var e1 = H.getUint32(16, !0), l1 = 20;
    switch (e1) {
      case 16:
      case 18:
        x.channels = H.getUint16(l1 + 2, !0), x.sampleRate = H.getUint32(l1 + 4, !0);
        break;
      default:
        throw "extended fmt chunk not implemented";
    }
    l1 += e1;
    for (var J = u0.data, j = 0; J != O && (O = H.getUint32(l1, !1), j = H.getUint32(l1 + 4, !0), J != O); )
      l1 += j + 8;
    return x.dataLen = j, x.dataOffset = l1 + 8, x;
  }
};
var Ba = function(H, x, O) {
  arguments.length != 3 && (console.error("WARN: Mp3Encoder(channels, samplerate, kbps) not specified"), H = 1, x = 44100, O = 128);
  var e1 = new fa(), l1 = new Aa(), J = new ca(), j = new va(), p = new ua(), q = new ha(), o = new ba(), e = new Sa(), d = new ga(), w = new wa(), z = new pa(), P = new ma(), R = new Ra(), _ = new Ma();
  e1.setModules(J, j, p, q, o, e, d, w, _), j.setModules(J, _, d, e), w.setModules(j, d), p.setModules(e1), o.setModules(j, z, q, P), q.setModules(P, z, e1.enc.psy), z.setModules(j), P.setModules(q), e.setModules(e1, j, d), l1.setModules(R, _), R.setModules(d, w, p);
  var m = e1.lame_init();
  m.num_channels = H, m.in_samplerate = x, m.brate = O, m.mode = da.STEREO, m.quality = 3, m.bWriteVbrTag = !1, m.disable_reservoir = !0, m.write_id3tag_automatic = !1, e1.lame_init_params(m);
  var V = 1152, g = 0 | 1.25 * V + 7200, W = r2(g);
  this.encodeBuffer = function(Y, i1) {
    H == 1 && (i1 = Y), la(Y.length == i1.length), Y.length > V && (V = Y.length, W = r2(g = 0 | 1.25 * V + 7200));
    var t1 = e1.lame_encode_buffer(m, Y, i1, Y.length, W, 0, g);
    return new Int8Array(W.subarray(0, t1));
  }, this.flush = function() {
    var Y = e1.lame_encode_flush(m, W, 0, g);
    return new Int8Array(W.subarray(0, Y));
  };
}, Ta = u0;
function Pa(H) {
  var x = Ta.readHeader(new DataView(H)), O = new Int16Array(H, x.dataOffset, x.dataLen / 2), e1 = new Ba(x.channels, x.sampleRate, 128), l1 = 1152, J = x.channels === 1 ? O : new Int16Array(x.dataLen / (2 * x.channels)), j = x.channels === 2 ? new Int16Array(x.dataLen / (2 * x.channels)) : void 0;
  if (x.channels > 1)
    for (var p = 0; p < J.length; p++)
      J[p] = O[p * 2], j[p] = O[p * 2 + 1];
  for (var q = [], o = J.length, e = 0; o >= l1; e += l1) {
    var d = J.subarray(e, e + l1), w = void 0;
    j && (w = j.subarray(e, e + l1));
    var z = e1.encodeBuffer(d, w);
    q.push(new Int8Array(z)), o -= l1;
  }
  var P = e1.flush();
  return q.push(new Int8Array(P)), q;
}
function Ia(H, x) {
  var O = new AudioContext({ sampleRate: g2 }), e1 = new FileReader();
  e1.onload = function(l1) {
    O.decodeAudioData(l1.target.result, function(J) {
      var j = !window.OfflineAudioContext, p = new OfflineAudioContext(1, 16e3 * J.duration, 16e3), q = p.createBufferSource();
      q.buffer = J, q.connect(p.destination);
      var o = new FileReader();
      o.onload = function() {
        var e = function(d) {
          var w = j ? d.renderedBuffer : d, z = Ea(w, w.length);
          x && x(z);
        };
        j ? (p.oncomplete = e, p.startRendering()) : p.startRendering().then(e).catch(function(d) {
          return console.warn(d);
        });
      }, o.readAsArrayBuffer(H), q.start(0);
    });
  }, e1.readAsArrayBuffer(H);
}
function Ea(H, x) {
  var O = H.numberOfChannels, e1 = x * O * 2 + 44, l1 = new ArrayBuffer(e1), J = new DataView(l1), j = [], p = 0, q, o = 0, e = 0;
  for (w(1179011410), w(e1 - 8), w(1163280727), w(544501094), w(16), d(1), d(O), w(H.sampleRate), w(H.sampleRate * 2 * O), d(O * 2), d(16), w(1635017060), w(e1 - e - 4), p = 0; p < H.numberOfChannels; p++)
    j.push(H.getChannelData(p));
  for (; e < e1; ) {
    for (p = 0; p < O; p++)
      q = Math.max(-1, Math.min(1, j[p][o])), q = (0.5 + q < 0 ? q * 32768 : q * 32767) | 0, J.setInt16(e, q, !0), e += 2;
    o++;
  }
  return l1;
  function d(z) {
    J.setUint16(e, z, !0), e += 2;
  }
  function w(z) {
    J.setUint32(e, z, !0), e += 4;
  }
}
export {
  Ia as downsampleToWav,
  Pa as encodeMp3
};
