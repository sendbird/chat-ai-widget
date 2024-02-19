import { V as Ee } from "./index-f89b717d.mjs";
import "react";
import "react-dom";
function ue(r0, _0, i, x) {
  Object.defineProperty(r0, _0, { get: i, set: x, enumerable: !0, configurable: !0 });
}
var ce = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}, z1 = {}, C1 = {}, v0 = ce.parcelRequire3f09;
v0 == null && (v0 = function(r0) {
  if (r0 in z1)
    return z1[r0].exports;
  if (r0 in C1) {
    var _0 = C1[r0];
    delete C1[r0];
    var i = { id: r0, exports: {} };
    return z1[r0] = i, _0.call(i.exports, i, i.exports), i.exports;
  }
  var x = new Error("Cannot find module '" + r0 + "'");
  throw x.code = "MODULE_NOT_FOUND", x;
}, v0.register = function(_0, i) {
  C1[_0] = i;
}, ce.parcelRequire3f09 = v0);
v0.register("kk1yk", function(r0, _0) {
  var i = v0("3YDN3"), x = i.System, U = i.VbrMode;
  i.Float;
  var Z = i.ShortBlock;
  i.Util, i.Arrays, i.new_array_n, i.new_byte, i.new_double;
  var i0 = i.new_float;
  i.new_float_n, i.new_int;
  var V = i.new_int_n, W = i.new_short_n, g = i.assert, m = v0("d2VP0"), G = v0("5HJeD"), O = v0("4SDnr"), M = v0("cU3Yf"), q = v0("2qGTD"), s0 = v0("e32wu"), f0 = v0("ctaQC"), r = v0("dQDcS"), n = v0("cPNKB");
  function S() {
    var p = v0("jL6I1"), A = this, b = 131072;
    S.V9 = 410, S.V8 = 420, S.V7 = 430, S.V6 = 440, S.V5 = 450, S.V4 = 460, S.V3 = 470, S.V2 = 480, S.V1 = 490, S.V0 = 500, S.R3MIX = 1e3, S.STANDARD = 1001, S.EXTREME = 1002, S.INSANE = 1003, S.STANDARD_FAST = 1004, S.EXTREME_FAST = 1005, S.MEDIUM = 1006, S.MEDIUM_FAST = 1007;
    var e = 16384 + b;
    S.LAME_MAXMP3BUFFER = e;
    var l, N, T, y, Q, f = new m(), d, C, v;
    this.enc = new n(), this.setModules = function(t, o, A0, M0, O0, I0, T0, w0, X0) {
      l = t, N = o, T = A0, y = M0, Q = O0, d = I0, C = w0, v = X0, this.enc.setModules(N, f, y, d);
    };
    function k() {
      this.mask_adjust = 0, this.mask_adjust_short = 0, this.bo_l_weight = i0(n.SBMAX_l), this.bo_s_weight = i0(n.SBMAX_s);
    }
    function I() {
      this.lowerlimit = 0;
    }
    function H(t, o) {
      this.lowpass = o;
    }
    var K = 4294479419;
    function l0(t) {
      var o;
      return t.class_id = K, o = t.internal_flags = new O(), t.mode = p.NOT_SET, t.original = 1, t.in_samplerate = 44100, t.num_channels = 2, t.num_samples = -1, t.bWriteVbrTag = !0, t.quality = -1, t.short_blocks = null, o.subblock_gain = -1, t.lowpassfreq = 0, t.highpassfreq = 0, t.lowpasswidth = -1, t.highpasswidth = -1, t.VBR = U.vbr_off, t.VBR_q = 4, t.ATHcurve = -1, t.VBR_mean_bitrate_kbps = 128, t.VBR_min_bitrate_kbps = 0, t.VBR_max_bitrate_kbps = 0, t.VBR_hard_min = 0, o.VBR_min_bitrate = 1, o.VBR_max_bitrate = 13, t.quant_comp = -1, t.quant_comp_short = -1, t.msfix = -1, o.resample_ratio = 1, o.OldValue[0] = 180, o.OldValue[1] = 180, o.CurrentStep[0] = 4, o.CurrentStep[1] = 4, o.masking_lower = 1, o.nsPsy.attackthre = -1, o.nsPsy.attackthre_s = -1, t.scale = -1, t.athaa_type = -1, t.ATHtype = -1, t.athaa_loudapprox = -1, t.athaa_sensitivity = 0, t.useTemporal = null, t.interChRatio = -1, o.mf_samples_to_encode = n.ENCDELAY + n.POSTDELAY, t.encoder_padding = 0, o.mf_size = n.ENCDELAY - n.MDCTDELAY, t.findReplayGain = !1, t.decode_on_the_fly = !1, o.decode_on_the_fly = !1, o.findReplayGain = !1, o.findPeakSample = !1, o.RadioGain = 0, o.AudiophileGain = 0, o.noclipGainChange = 0, o.noclipScale = -1, t.preset = 0, t.write_id3tag_automatic = !0, 0;
    }
    this.lame_init = function() {
      var t = new G();
      return l0(t), t.lame_allocated_gfp = 1, t;
    };
    function E(t) {
      return t > 1 ? 0 : t <= 0 ? 1 : Math.cos(Math.PI / 2 * t);
    }
    this.nearestBitrateFullIndex = function(t) {
      var o = [
        8,
        16,
        24,
        32,
        40,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        160,
        192,
        224,
        256,
        320
      ], A0 = 0, M0 = 0, O0 = 0, I0 = 0;
      I0 = o[16], O0 = 16, M0 = o[16], A0 = 16;
      for (var T0 = 0; T0 < 16; T0++)
        if (Math.max(t, o[T0 + 1]) != t) {
          I0 = o[T0 + 1], O0 = T0 + 1, M0 = o[T0], A0 = T0;
          break;
        }
      return I0 - t > t - M0 ? A0 : O0;
    };
    function B(t, o) {
      var A0 = 44100;
      return o >= 48e3 ? A0 = 48e3 : o >= 44100 ? A0 = 44100 : o >= 32e3 ? A0 = 32e3 : o >= 24e3 ? A0 = 24e3 : o >= 22050 ? A0 = 22050 : o >= 16e3 ? A0 = 16e3 : o >= 12e3 ? A0 = 12e3 : o >= 11025 ? A0 = 11025 : o >= 8e3 && (A0 = 8e3), t == -1 ? A0 : (t <= 15960 && (A0 = 44100), t <= 15250 && (A0 = 32e3), t <= 11220 && (A0 = 24e3), t <= 9970 && (A0 = 22050), t <= 7230 && (A0 = 16e3), t <= 5420 && (A0 = 12e3), t <= 4510 && (A0 = 11025), t <= 3970 && (A0 = 8e3), o < A0 ? o > 44100 ? 48e3 : o > 32e3 ? 44100 : o > 24e3 ? 32e3 : o > 22050 ? 24e3 : o > 16e3 ? 22050 : o > 12e3 ? 16e3 : o > 11025 ? 12e3 : o > 8e3 ? 11025 : 8e3 : A0);
    }
    function s(t, o) {
      switch (t) {
        case 44100:
          return o.version = 1, 0;
        case 48e3:
          return o.version = 1, 1;
        case 32e3:
          return o.version = 1, 2;
        case 22050:
          return o.version = 0, 0;
        case 24e3:
          return o.version = 0, 1;
        case 16e3:
          return o.version = 0, 2;
        case 11025:
          return o.version = 0, 0;
        case 12e3:
          return o.version = 0, 1;
        case 8e3:
          return o.version = 0, 2;
        default:
          return o.version = 0, -1;
      }
    }
    function _(t, o, A0) {
      A0 < 16e3 && (o = 2);
      for (var M0 = r.bitrate_table[o][1], O0 = 2; O0 <= 14; O0++)
        r.bitrate_table[o][O0] > 0 && Math.abs(r.bitrate_table[o][O0] - t) < Math.abs(M0 - t) && (M0 = r.bitrate_table[o][O0]);
      return M0;
    }
    function a(t, o, A0) {
      A0 < 16e3 && (o = 2);
      for (var M0 = 0; M0 <= 14; M0++)
        if (r.bitrate_table[o][M0] > 0 && r.bitrate_table[o][M0] == t)
          return M0;
      return -1;
    }
    function h(t, o) {
      var A0 = [
        new H(8, 2e3),
        new H(16, 3700),
        new H(24, 3900),
        new H(32, 5500),
        new H(40, 7e3),
        new H(48, 7500),
        new H(56, 1e4),
        new H(64, 11e3),
        new H(80, 13500),
        new H(96, 15100),
        new H(112, 15600),
        new H(128, 17e3),
        new H(160, 17500),
        new H(192, 18600),
        new H(224, 19400),
        new H(256, 19700),
        new H(320, 20500)
      ], M0 = A.nearestBitrateFullIndex(o);
      t.lowerlimit = A0[M0].lowpass;
    }
    function F(t) {
      var o = t.internal_flags, A0 = 32, M0 = -1;
      if (o.lowpass1 > 0) {
        for (var O0 = 999, I0 = 0; I0 <= 31; I0++) {
          var T0 = I0 / 31;
          T0 >= o.lowpass2 && (A0 = Math.min(A0, I0)), o.lowpass1 < T0 && T0 < o.lowpass2 && (O0 = Math.min(O0, I0));
        }
        O0 == 999 ? o.lowpass1 = (A0 - 0.75) / 31 : o.lowpass1 = (O0 - 0.75) / 31, o.lowpass2 = A0 / 31;
      }
      if (o.highpass2 > 0 && o.highpass2 < 0.9 * (0.75 / 31) && (o.highpass1 = 0, o.highpass2 = 0, x.err.println(`Warning: highpass filter disabled.  highpass frequency too small
`)), o.highpass2 > 0) {
        for (var w0 = -1, I0 = 0; I0 <= 31; I0++) {
          var T0 = I0 / 31;
          T0 <= o.highpass1 && (M0 = Math.max(M0, I0)), o.highpass1 < T0 && T0 < o.highpass2 && (w0 = Math.max(w0, I0));
        }
        o.highpass1 = M0 / 31, w0 == -1 ? o.highpass2 = (M0 + 0.75) / 31 : o.highpass2 = (w0 + 0.75) / 31;
      }
      for (var I0 = 0; I0 < 32; I0++) {
        var X0, V0, T0 = I0 / 31;
        o.highpass2 > o.highpass1 ? X0 = E((o.highpass2 - T0) / (o.highpass2 - o.highpass1 + 1e-20)) : X0 = 1, o.lowpass2 > o.lowpass1 ? V0 = E((T0 - o.lowpass1) / (o.lowpass2 - o.lowpass1 + 1e-20)) : V0 = 1, o.amp_filter[I0] = X0 * V0;
      }
    }
    function J(t) {
      var o = t.internal_flags;
      switch (t.quality) {
        default:
        case 9:
          o.psymodel = 0, o.noise_shaping = 0, o.noise_shaping_amp = 0, o.noise_shaping_stop = 0, o.use_best_huffman = 0, o.full_outer_loop = 0;
          break;
        case 8:
          t.quality = 7;
        case 7:
          o.psymodel = 1, o.noise_shaping = 0, o.noise_shaping_amp = 0, o.noise_shaping_stop = 0, o.use_best_huffman = 0, o.full_outer_loop = 0;
          break;
        case 6:
          o.psymodel = 1, o.noise_shaping == 0 && (o.noise_shaping = 1), o.noise_shaping_amp = 0, o.noise_shaping_stop = 0, o.subblock_gain == -1 && (o.subblock_gain = 1), o.use_best_huffman = 0, o.full_outer_loop = 0;
          break;
        case 5:
          o.psymodel = 1, o.noise_shaping == 0 && (o.noise_shaping = 1), o.noise_shaping_amp = 0, o.noise_shaping_stop = 0, o.subblock_gain == -1 && (o.subblock_gain = 1), o.use_best_huffman = 0, o.full_outer_loop = 0;
          break;
        case 4:
          o.psymodel = 1, o.noise_shaping == 0 && (o.noise_shaping = 1), o.noise_shaping_amp = 0, o.noise_shaping_stop = 0, o.subblock_gain == -1 && (o.subblock_gain = 1), o.use_best_huffman = 1, o.full_outer_loop = 0;
          break;
        case 3:
          o.psymodel = 1, o.noise_shaping == 0 && (o.noise_shaping = 1), o.noise_shaping_amp = 1, o.noise_shaping_stop = 1, o.subblock_gain == -1 && (o.subblock_gain = 1), o.use_best_huffman = 1, o.full_outer_loop = 0;
          break;
        case 2:
          o.psymodel = 1, o.noise_shaping == 0 && (o.noise_shaping = 1), o.substep_shaping == 0 && (o.substep_shaping = 2), o.noise_shaping_amp = 1, o.noise_shaping_stop = 1, o.subblock_gain == -1 && (o.subblock_gain = 1), o.use_best_huffman = 1, o.full_outer_loop = 0;
          break;
        case 1:
          o.psymodel = 1, o.noise_shaping == 0 && (o.noise_shaping = 1), o.substep_shaping == 0 && (o.substep_shaping = 2), o.noise_shaping_amp = 2, o.noise_shaping_stop = 1, o.subblock_gain == -1 && (o.subblock_gain = 1), o.use_best_huffman = 1, o.full_outer_loop = 0;
          break;
        case 0:
          o.psymodel = 1, o.noise_shaping == 0 && (o.noise_shaping = 1), o.substep_shaping == 0 && (o.substep_shaping = 2), o.noise_shaping_amp = 2, o.noise_shaping_stop = 1, o.subblock_gain == -1 && (o.subblock_gain = 1), o.use_best_huffman = 1, o.full_outer_loop = 0;
          break;
      }
    }
    function X(t) {
      var o = t.internal_flags;
      t.frameNum = 0, t.write_id3tag_automatic && C.id3tag_write_v2(t), o.bitrate_stereoMode_Hist = V([
        16,
        5
      ]), o.bitrate_blockType_Hist = V([
        16,
        6
      ]), o.PeakSample = 0, t.bWriteVbrTag && d.InitVbrTag(t);
    }
    this.lame_init_params = function(t) {
      var o = t.internal_flags;
      if (o.Class_ID = 0, o.ATH == null && (o.ATH = new M()), o.PSY == null && (o.PSY = new k()), o.rgdata == null && (o.rgdata = new q()), o.channels_in = t.num_channels, o.channels_in == 1 && (t.mode = p.MONO), o.channels_out = t.mode == p.MONO ? 1 : 2, o.mode_ext = n.MPG_MD_MS_LR, t.mode == p.MONO && (t.force_ms = !1), t.VBR == U.vbr_off && t.VBR_mean_bitrate_kbps != 128 && t.brate == 0 && (t.brate = t.VBR_mean_bitrate_kbps), t.VBR == U.vbr_off || t.VBR == U.vbr_mtrh || t.VBR == U.vbr_mt || (t.free_format = !1), t.VBR == U.vbr_off && t.brate == 0 && f0.EQ(t.compression_ratio, 0) && (t.compression_ratio = 11.025), t.VBR == U.vbr_off && t.compression_ratio > 0 && (t.out_samplerate == 0 && (t.out_samplerate = map2MP3Frequency(int(0.97 * t.in_samplerate))), t.brate = 0 | t.out_samplerate * 16 * o.channels_out / (1e3 * t.compression_ratio), o.samplerate_index = s(t.out_samplerate, t), t.free_format || (t.brate = _(t.brate, t.version, t.out_samplerate))), t.out_samplerate != 0 && (t.out_samplerate < 16e3 ? (t.VBR_mean_bitrate_kbps = Math.max(t.VBR_mean_bitrate_kbps, 8), t.VBR_mean_bitrate_kbps = Math.min(t.VBR_mean_bitrate_kbps, 64)) : t.out_samplerate < 32e3 ? (t.VBR_mean_bitrate_kbps = Math.max(t.VBR_mean_bitrate_kbps, 8), t.VBR_mean_bitrate_kbps = Math.min(t.VBR_mean_bitrate_kbps, 160)) : (t.VBR_mean_bitrate_kbps = Math.max(t.VBR_mean_bitrate_kbps, 32), t.VBR_mean_bitrate_kbps = Math.min(t.VBR_mean_bitrate_kbps, 320))), t.lowpassfreq == 0) {
        var A0 = 16e3;
        switch (t.VBR) {
          case U.vbr_off:
            var M0 = new I();
            h(M0, t.brate), A0 = M0.lowerlimit;
            break;
          case U.vbr_abr:
            var M0 = new I();
            h(M0, t.VBR_mean_bitrate_kbps), A0 = M0.lowerlimit;
            break;
          case U.vbr_rh:
            var w0 = [
              19500,
              19e3,
              18600,
              18e3,
              17500,
              16e3,
              15600,
              14900,
              12500,
              1e4,
              3950
            ];
            if (0 <= t.VBR_q && t.VBR_q <= 9) {
              var O0 = w0[t.VBR_q], I0 = w0[t.VBR_q + 1], T0 = t.VBR_q_frac;
              A0 = linear_int(O0, I0, T0);
            } else
              A0 = 19500;
            break;
          default:
            var w0 = [
              19500,
              19e3,
              18500,
              18e3,
              17500,
              16500,
              15500,
              14500,
              12500,
              9500,
              3950
            ];
            if (0 <= t.VBR_q && t.VBR_q <= 9) {
              var O0 = w0[t.VBR_q], I0 = w0[t.VBR_q + 1], T0 = t.VBR_q_frac;
              A0 = linear_int(O0, I0, T0);
            } else
              A0 = 19500;
        }
        t.mode == p.MONO && (t.VBR == U.vbr_off || t.VBR == U.vbr_abr) && (A0 *= 1.5), t.lowpassfreq = A0 | 0;
      }
      if (t.out_samplerate == 0 && (2 * t.lowpassfreq > t.in_samplerate && (t.lowpassfreq = t.in_samplerate / 2), t.out_samplerate = B(t.lowpassfreq | 0, t.in_samplerate)), t.lowpassfreq = Math.min(20500, t.lowpassfreq), t.lowpassfreq = Math.min(t.out_samplerate / 2, t.lowpassfreq), t.VBR == U.vbr_off && (t.compression_ratio = t.out_samplerate * 16 * o.channels_out / (1e3 * t.brate)), t.VBR == U.vbr_abr && (t.compression_ratio = t.out_samplerate * 16 * o.channels_out / (1e3 * t.VBR_mean_bitrate_kbps)), t.bWriteVbrTag || (t.findReplayGain = !1, t.decode_on_the_fly = !1, o.findPeakSample = !1), o.findReplayGain = t.findReplayGain, o.decode_on_the_fly = t.decode_on_the_fly, o.decode_on_the_fly && (o.findPeakSample = !0), o.findReplayGain && l.InitGainAnalysis(o.rgdata, t.out_samplerate) == GainAnalysis.INIT_GAIN_ANALYSIS_ERROR)
        return t.internal_flags = null, -6;
      switch (o.decode_on_the_fly && !t.decode_only && (o.hip != null && v.hip_decode_exit(o.hip), o.hip = v.hip_decode_init()), o.mode_gr = t.out_samplerate <= 24e3 ? 1 : 2, t.framesize = 576 * o.mode_gr, t.encoder_delay = n.ENCDELAY, o.resample_ratio = t.in_samplerate / t.out_samplerate, t.VBR) {
        case U.vbr_mt:
        case U.vbr_rh:
        case U.vbr_mtrh:
          var X0 = [
            5.7,
            6.5,
            7.3,
            8.2,
            10,
            11.9,
            13,
            14,
            15,
            16.5
          ];
          t.compression_ratio = X0[t.VBR_q];
          break;
        case U.vbr_abr:
          t.compression_ratio = t.out_samplerate * 16 * o.channels_out / (1e3 * t.VBR_mean_bitrate_kbps);
          break;
        default:
          t.compression_ratio = t.out_samplerate * 16 * o.channels_out / (1e3 * t.brate);
          break;
      }
      if (t.mode == p.NOT_SET && (t.mode = p.JOINT_STEREO), t.highpassfreq > 0 ? (o.highpass1 = 2 * t.highpassfreq, t.highpasswidth >= 0 ? o.highpass2 = 2 * (t.highpassfreq + t.highpasswidth) : o.highpass2 = 2 * t.highpassfreq, o.highpass1 /= t.out_samplerate, o.highpass2 /= t.out_samplerate) : (o.highpass1 = 0, o.highpass2 = 0), t.lowpassfreq > 0 ? (o.lowpass2 = 2 * t.lowpassfreq, t.lowpasswidth >= 0 ? (o.lowpass1 = 2 * (t.lowpassfreq - t.lowpasswidth), o.lowpass1 < 0 && (o.lowpass1 = 0)) : o.lowpass1 = 2 * t.lowpassfreq, o.lowpass1 /= t.out_samplerate, o.lowpass2 /= t.out_samplerate) : (o.lowpass1 = 0, o.lowpass2 = 0), F(t), o.samplerate_index = s(t.out_samplerate, t), o.samplerate_index < 0)
        return t.internal_flags = null, -1;
      if (t.VBR == U.vbr_off) {
        if (t.free_format)
          o.bitrate_index = 0;
        else if (t.brate = _(t.brate, t.version, t.out_samplerate), o.bitrate_index = a(t.brate, t.version, t.out_samplerate), o.bitrate_index <= 0)
          return t.internal_flags = null, -1;
      } else
        o.bitrate_index = 1;
      t.analysis && (t.bWriteVbrTag = !1), o.pinfo != null && (t.bWriteVbrTag = !1), N.init_bit_stream_w(o);
      for (var V0 = o.samplerate_index + 3 * t.version + 6 * (t.out_samplerate < 16e3 ? 1 : 0), m0 = 0; m0 < n.SBMAX_l + 1; m0++)
        o.scalefac_band.l[m0] = y.sfBandIndex[V0].l[m0];
      for (var m0 = 0; m0 < n.PSFB21 + 1; m0++) {
        var q0 = (o.scalefac_band.l[22] - o.scalefac_band.l[21]) / n.PSFB21, g0 = o.scalefac_band.l[21] + m0 * q0;
        o.scalefac_band.psfb21[m0] = g0;
      }
      o.scalefac_band.psfb21[n.PSFB21] = 576;
      for (var m0 = 0; m0 < n.SBMAX_s + 1; m0++)
        o.scalefac_band.s[m0] = y.sfBandIndex[V0].s[m0];
      for (var m0 = 0; m0 < n.PSFB12 + 1; m0++) {
        var q0 = (o.scalefac_band.s[13] - o.scalefac_band.s[12]) / n.PSFB12, g0 = o.scalefac_band.s[12] + m0 * q0;
        o.scalefac_band.psfb12[m0] = g0;
      }
      o.scalefac_band.psfb12[n.PSFB12] = 192, t.version == 1 ? o.sideinfo_len = o.channels_out == 1 ? 21 : 36 : o.sideinfo_len = o.channels_out == 1 ? 13 : 21, t.error_protection && (o.sideinfo_len += 2), X(t), o.Class_ID = K;
      var G0;
      for (G0 = 0; G0 < 19; G0++)
        o.nsPsy.pefirbuf[G0] = 700 * o.mode_gr * o.channels_out;
      switch (t.ATHtype == -1 && (t.ATHtype = 4), g(t.VBR_q <= 9), g(t.VBR_q >= 0), t.VBR) {
        case U.vbr_mt:
          t.VBR = U.vbr_mtrh;
        case U.vbr_mtrh:
          t.useTemporal == null && (t.useTemporal = !1), T.apply_preset(t, 500 - t.VBR_q * 10, 0), t.quality < 0 && (t.quality = LAME_DEFAULT_QUALITY), t.quality < 5 && (t.quality = 0), t.quality > 5 && (t.quality = 5), o.PSY.mask_adjust = t.maskingadjust, o.PSY.mask_adjust_short = t.maskingadjust_short, t.experimentalY ? o.sfb21_extra = !1 : o.sfb21_extra = t.out_samplerate > 44e3, o.iteration_loop = new VBRNewIterationLoop(Q);
          break;
        case U.vbr_rh:
          T.apply_preset(t, 500 - t.VBR_q * 10, 0), o.PSY.mask_adjust = t.maskingadjust, o.PSY.mask_adjust_short = t.maskingadjust_short, t.experimentalY ? o.sfb21_extra = !1 : o.sfb21_extra = t.out_samplerate > 44e3, t.quality > 6 && (t.quality = 6), t.quality < 0 && (t.quality = LAME_DEFAULT_QUALITY), o.iteration_loop = new VBROldIterationLoop(Q);
          break;
        default:
          var W0;
          o.sfb21_extra = !1, t.quality < 0 && (t.quality = LAME_DEFAULT_QUALITY), W0 = t.VBR, W0 == U.vbr_off && (t.VBR_mean_bitrate_kbps = t.brate), T.apply_preset(t, t.VBR_mean_bitrate_kbps, 0), t.VBR = W0, o.PSY.mask_adjust = t.maskingadjust, o.PSY.mask_adjust_short = t.maskingadjust_short, W0 == U.vbr_off ? o.iteration_loop = new s0(Q) : o.iteration_loop = new ABRIterationLoop(Q);
          break;
      }
      if (g(t.scale >= 0), t.VBR != U.vbr_off) {
        if (o.VBR_min_bitrate = 1, o.VBR_max_bitrate = 14, t.out_samplerate < 16e3 && (o.VBR_max_bitrate = 8), t.VBR_min_bitrate_kbps != 0 && (t.VBR_min_bitrate_kbps = _(t.VBR_min_bitrate_kbps, t.version, t.out_samplerate), o.VBR_min_bitrate = a(t.VBR_min_bitrate_kbps, t.version, t.out_samplerate), o.VBR_min_bitrate < 0) || t.VBR_max_bitrate_kbps != 0 && (t.VBR_max_bitrate_kbps = _(t.VBR_max_bitrate_kbps, t.version, t.out_samplerate), o.VBR_max_bitrate = a(t.VBR_max_bitrate_kbps, t.version, t.out_samplerate), o.VBR_max_bitrate < 0))
          return -1;
        t.VBR_min_bitrate_kbps = r.bitrate_table[t.version][o.VBR_min_bitrate], t.VBR_max_bitrate_kbps = r.bitrate_table[t.version][o.VBR_max_bitrate], t.VBR_mean_bitrate_kbps = Math.min(r.bitrate_table[t.version][o.VBR_max_bitrate], t.VBR_mean_bitrate_kbps), t.VBR_mean_bitrate_kbps = Math.max(r.bitrate_table[t.version][o.VBR_min_bitrate], t.VBR_mean_bitrate_kbps);
      }
      return t.tune && (o.PSY.mask_adjust += t.tune_value_a, o.PSY.mask_adjust_short += t.tune_value_a), J(t), g(t.scale >= 0), t.athaa_type < 0 ? o.ATH.useAdjust = 3 : o.ATH.useAdjust = t.athaa_type, o.ATH.aaSensitivityP = Math.pow(10, t.athaa_sensitivity / -10), t.short_blocks == null && (t.short_blocks = Z.short_block_allowed), t.short_blocks == Z.short_block_allowed && (t.mode == p.JOINT_STEREO || t.mode == p.STEREO) && (t.short_blocks = Z.short_block_coupled), t.quant_comp < 0 && (t.quant_comp = 1), t.quant_comp_short < 0 && (t.quant_comp_short = 0), t.msfix < 0 && (t.msfix = 0), t.exp_nspsytune = t.exp_nspsytune | 1, t.internal_flags.nsPsy.attackthre < 0 && (t.internal_flags.nsPsy.attackthre = m.NSATTACKTHRE), t.internal_flags.nsPsy.attackthre_s < 0 && (t.internal_flags.nsPsy.attackthre_s = m.NSATTACKTHRE_S), g(t.scale >= 0), t.scale < 0 && (t.scale = 1), t.ATHtype < 0 && (t.ATHtype = 4), t.ATHcurve < 0 && (t.ATHcurve = 4), t.athaa_loudapprox < 0 && (t.athaa_loudapprox = 2), t.interChRatio < 0 && (t.interChRatio = 0), t.useTemporal == null && (t.useTemporal = !0), o.slot_lag = o.frac_SpF = 0, t.VBR == U.vbr_off && (o.slot_lag = o.frac_SpF = (t.version + 1) * 72e3 * t.brate % t.out_samplerate | 0), y.iteration_init(t), f.psymodel_init(t), g(t.scale >= 0), 0;
    };
    function $(t, o) {
      (t.in_buffer_0 == null || t.in_buffer_nsamples < o) && (t.in_buffer_0 = i0(o), t.in_buffer_1 = i0(o), t.in_buffer_nsamples = o);
    }
    this.lame_encode_flush = function(t, o, A0, M0) {
      var O0 = t.internal_flags, I0 = W([
        2,
        1152
      ]), T0 = 0, w0, X0, V0, m0, q0 = O0.mf_samples_to_encode - n.POSTDELAY, g0 = e0(t);
      if (O0.mf_samples_to_encode < 1)
        return 0;
      for (w0 = 0, t.in_samplerate != t.out_samplerate && (q0 += 16 * t.out_samplerate / t.in_samplerate), V0 = t.framesize - q0 % t.framesize, V0 < 576 && (V0 += t.framesize), t.encoder_padding = V0, m0 = (q0 + V0) / t.framesize; m0 > 0 && T0 >= 0; ) {
        var G0 = g0 - O0.mf_size, W0 = t.frameNum;
        G0 *= t.in_samplerate, G0 /= t.out_samplerate, G0 > 1152 && (G0 = 1152), G0 < 1 && (G0 = 1), X0 = M0 - w0, M0 == 0 && (X0 = 0), T0 = this.lame_encode_buffer(t, I0[0], I0[1], G0, o, A0, X0), A0 += T0, w0 += T0, m0 -= W0 != t.frameNum ? 1 : 0;
      }
      if (O0.mf_samples_to_encode = 0, T0 < 0 || (X0 = M0 - w0, M0 == 0 && (X0 = 0), N.flush_bitstream(t), T0 = N.copy_buffer(O0, o, A0, X0, 1), T0 < 0))
        return T0;
      if (A0 += T0, w0 += T0, X0 = M0 - w0, M0 == 0 && (X0 = 0), t.write_id3tag_automatic) {
        if (C.id3tag_write_v1(t), T0 = N.copy_buffer(O0, o, A0, X0, 0), T0 < 0)
          return T0;
        w0 += T0;
      }
      return w0;
    }, this.lame_encode_buffer = function(t, o, A0, M0, O0, I0, T0) {
      var w0 = t.internal_flags, X0 = [
        null,
        null
      ];
      if (w0.Class_ID != K)
        return -3;
      if (M0 == 0)
        return 0;
      $(w0, M0), X0[0] = w0.in_buffer_0, X0[1] = w0.in_buffer_1;
      for (var V0 = 0; V0 < M0; V0++)
        X0[0][V0] = o[V0], w0.channels_in > 1 && (X0[1][V0] = A0[V0]);
      return o0(t, X0[0], X0[1], M0, O0, I0, T0);
    };
    function e0(t) {
      var o = n.BLKSIZE + t.framesize - n.FFTOFFSET;
      return o = Math.max(o, 512 + t.framesize - 32), g(O.MFSIZE >= o), o;
    }
    function o0(t, o, A0, M0, O0, I0, T0) {
      var w0 = t.internal_flags, X0 = 0, V0, m0, q0, g0, G0, W0 = [
        null,
        null
      ], e1 = [
        null,
        null
      ];
      if (w0.Class_ID != K)
        return -3;
      if (M0 == 0)
        return 0;
      if (G0 = N.copy_buffer(w0, O0, I0, T0, 0), G0 < 0)
        return G0;
      if (I0 += G0, X0 += G0, e1[0] = o, e1[1] = A0, f0.NEQ(t.scale, 0) && f0.NEQ(t.scale, 1))
        for (m0 = 0; m0 < M0; ++m0)
          e1[0][m0] *= t.scale, w0.channels_out == 2 && (e1[1][m0] *= t.scale);
      if (f0.NEQ(t.scale_left, 0) && f0.NEQ(t.scale_left, 1))
        for (m0 = 0; m0 < M0; ++m0)
          e1[0][m0] *= t.scale_left;
      if (f0.NEQ(t.scale_right, 0) && f0.NEQ(t.scale_right, 1))
        for (m0 = 0; m0 < M0; ++m0)
          e1[1][m0] *= t.scale_right;
      if (t.num_channels == 2 && w0.channels_out == 1)
        for (m0 = 0; m0 < M0; ++m0)
          e1[0][m0] = 0.5 * (e1[0][m0] + e1[1][m0]), e1[1][m0] = 0;
      g0 = e0(t), W0[0] = w0.mfbuf[0], W0[1] = w0.mfbuf[1];
      for (var j0 = 0; M0 > 0; ) {
        var a1 = [
          null,
          null
        ], x1 = 0, r1 = 0;
        a1[0] = e1[0], a1[1] = e1[1];
        var o1 = new $0();
        if (J0(t, W0, a1, j0, M0, o1), x1 = o1.n_in, r1 = o1.n_out, w0.findReplayGain && !w0.decode_on_the_fly && l.AnalyzeSamples(w0.rgdata, W0[0], w0.mf_size, W0[1], w0.mf_size, r1, w0.channels_out) == GainAnalysis.GAIN_ANALYSIS_ERROR)
          return -6;
        if (M0 -= x1, j0 += x1, w0.channels_out, w0.mf_size += r1, g(w0.mf_size <= O.MFSIZE), w0.mf_samples_to_encode < 1 && (w0.mf_samples_to_encode = n.ENCDELAY + n.POSTDELAY), w0.mf_samples_to_encode += r1, w0.mf_size >= g0) {
          var m1 = T0 - X0;
          if (T0 == 0 && (m1 = 0), V0 = b0(t, W0[0], W0[1], O0, I0, m1), V0 < 0)
            return V0;
          for (I0 += V0, X0 += V0, w0.mf_size -= t.framesize, w0.mf_samples_to_encode -= t.framesize, q0 = 0; q0 < w0.channels_out; q0++)
            for (m0 = 0; m0 < w0.mf_size; m0++)
              W0[q0][m0] = W0[q0][m0 + t.framesize];
        }
      }
      return g(M0 == 0), X0;
    }
    function b0(t, o, A0, M0, O0, I0) {
      var T0 = A.enc.lame_encode_mp3_frame(t, o, A0, M0, O0, I0);
      return t.frameNum++, T0;
    }
    function $0() {
      this.n_in = 0, this.n_out = 0;
    }
    function S0() {
      this.num_used = 0;
    }
    function R0(t, o) {
      return o != 0 ? R0(o, t % o) : t;
    }
    function p0(t, o, A0) {
      var M0 = Math.PI * o;
      t /= A0, t < 0 && (t = 0), t > 1 && (t = 1);
      var O0 = t - 0.5, I0 = 0.42 - 0.5 * Math.cos(2 * t * Math.PI) + 0.08 * Math.cos(4 * t * Math.PI);
      return Math.abs(O0) < 1e-9 ? M0 / Math.PI : I0 * Math.sin(A0 * M0 * O0) / (Math.PI * A0 * O0);
    }
    function Y0(t, o, A0, M0, O0, I0, T0, w0, X0) {
      var V0 = t.internal_flags, m0, q0 = 0, g0, G0 = t.out_samplerate / R0(t.out_samplerate, t.in_samplerate);
      G0 > O.BPC && (G0 = O.BPC);
      var W0 = Math.abs(V0.resample_ratio - Math.floor(0.5 + V0.resample_ratio)) < 1e-4 ? 1 : 0, e1 = 1 / V0.resample_ratio;
      e1 > 1 && (e1 = 1);
      var j0 = 31;
      j0 % 2 == 0 && --j0, j0 += W0;
      var a1 = j0 + 1;
      if (V0.fill_buffer_resample_init == 0) {
        for (V0.inbuf_old[0] = i0(a1), V0.inbuf_old[1] = i0(a1), m0 = 0; m0 <= 2 * G0; ++m0)
          V0.blackfilt[m0] = i0(a1);
        for (V0.itime[0] = 0, V0.itime[1] = 0, q0 = 0; q0 <= 2 * G0; q0++) {
          var x1 = 0, r1 = (q0 - G0) / (2 * G0);
          for (m0 = 0; m0 <= j0; m0++)
            x1 += V0.blackfilt[q0][m0] = p0(m0 - r1, e1, j0);
          for (m0 = 0; m0 <= j0; m0++)
            V0.blackfilt[q0][m0] /= x1;
        }
        V0.fill_buffer_resample_init = 1;
      }
      var o1 = V0.inbuf_old[X0];
      for (g0 = 0; g0 < M0; g0++) {
        var m1, f1;
        if (m1 = g0 * V0.resample_ratio, q0 = 0 | Math.floor(m1 - V0.itime[X0]), j0 + q0 - j0 / 2 >= T0)
          break;
        var r1 = m1 - V0.itime[X0] - (q0 + 0.5 * (j0 % 2));
        g(Math.abs(r1) <= 0.501), f1 = 0 | Math.floor(r1 * 2 * G0 + G0 + 0.5);
        var T1 = 0;
        for (m0 = 0; m0 <= j0; ++m0) {
          var S1 = 0 | m0 + q0 - j0 / 2, y1;
          g(S1 < T0), g(S1 + a1 >= 0), y1 = S1 < 0 ? o1[a1 + S1] : O0[I0 + S1], T1 += y1 * V0.blackfilt[f1][m0];
        }
        o[A0 + g0] = T1;
      }
      if (w0.num_used = Math.min(T0, j0 + q0 - j0 / 2), V0.itime[X0] += w0.num_used - g0 * V0.resample_ratio, w0.num_used >= a1)
        for (m0 = 0; m0 < a1; m0++)
          o1[m0] = O0[I0 + w0.num_used + m0 - a1];
      else {
        var A1 = a1 - w0.num_used;
        for (m0 = 0; m0 < A1; ++m0)
          o1[m0] = o1[m0 + w0.num_used];
        for (q0 = 0; m0 < a1; ++m0, ++q0)
          o1[m0] = O0[I0 + q0];
        g(q0 == w0.num_used);
      }
      return g0;
    }
    function J0(t, o, A0, M0, O0, I0) {
      var T0 = t.internal_flags;
      if (T0.resample_ratio < 0.9999 || T0.resample_ratio > 1.0001)
        for (var w0 = 0; w0 < T0.channels_out; w0++) {
          var X0 = new S0();
          I0.n_out = Y0(t, o[w0], T0.mf_size, t.framesize, A0[w0], M0, O0, X0, w0), I0.n_in = X0.num_used;
        }
      else {
        I0.n_out = Math.min(t.framesize, O0), I0.n_in = I0.n_out;
        for (var V0 = 0; V0 < I0.n_out; ++V0)
          o[0][T0.mf_size + V0] = A0[0][M0 + V0], T0.channels_out == 2 && (o[1][T0.mf_size + V0] = A0[1][M0 + V0]);
      }
    }
  }
  r0.exports = S;
});
v0.register("3YDN3", function(r0, _0) {
  function i(n) {
    return new Int8Array(n);
  }
  function x(n) {
    return new Int16Array(n);
  }
  function U(n) {
    return new Int32Array(n);
  }
  function Z(n) {
    return new Float32Array(n);
  }
  function i0(n) {
    return new Float64Array(n);
  }
  function V(n) {
    if (n.length == 1)
      return Z(n[0]);
    var S = n[0];
    n = n.slice(1);
    for (var p = [], A = 0; A < S; A++)
      p.push(V(n));
    return p;
  }
  function W(n) {
    if (n.length == 1)
      return U(n[0]);
    var S = n[0];
    n = n.slice(1);
    for (var p = [], A = 0; A < S; A++)
      p.push(W(n));
    return p;
  }
  function g(n) {
    if (n.length == 1)
      return x(n[0]);
    var S = n[0];
    n = n.slice(1);
    for (var p = [], A = 0; A < S; A++)
      p.push(g(n));
    return p;
  }
  function m(n) {
    if (n.length == 1)
      return new Array(n[0]);
    var S = n[0];
    n = n.slice(1);
    for (var p = [], A = 0; A < S; A++)
      p.push(m(n));
    return p;
  }
  var G = {};
  G.fill = function(n, S, p, A) {
    if (arguments.length == 2)
      for (var b = 0; b < n.length; b++)
        n[b] = arguments[1];
    else
      for (var b = S; b < p; b++)
        n[b] = A;
  };
  var O = {};
  O.arraycopy = function(n, S, p, A, b) {
    for (var e = S + b; S < e; )
      p[A++] = n[S++];
  }, O.out = {}, O.out.println = function(n) {
    console.log(n);
  }, O.out.printf = function() {
    console.log.apply(console, arguments);
  };
  var M = {};
  M.SQRT2 = 1.4142135623730951, M.FAST_LOG10 = function(n) {
    return Math.log10(n);
  }, M.FAST_LOG10_X = function(n, S) {
    return Math.log10(n) * S;
  };
  function q(n) {
    this.ordinal = n;
  }
  q.short_block_allowed = new q(0), q.short_block_coupled = new q(1), q.short_block_dispensed = new q(2), q.short_block_forced = new q(3);
  var s0 = {};
  s0.MAX_VALUE = 34028235e31;
  function f0(n) {
    this.ordinal = n;
  }
  f0.vbr_off = new f0(0), f0.vbr_mt = new f0(1), f0.vbr_rh = new f0(2), f0.vbr_abr = new f0(3), f0.vbr_mtrh = new f0(4), f0.vbr_default = f0.vbr_mtrh;
  var r = function(n) {
  };
  r0.exports = {
    System: O,
    VbrMode: f0,
    Float: s0,
    ShortBlock: q,
    Util: M,
    Arrays: G,
    new_array_n: m,
    new_byte: i,
    new_double: i0,
    new_float: Z,
    new_float_n: V,
    new_int: U,
    new_int_n: W,
    new_short: x,
    new_short_n: g,
    assert: r
  };
});
v0.register("d2VP0", function(r0, _0) {
  var i = v0("3YDN3");
  i.System;
  var x = i.VbrMode, U = i.Float, Z = i.ShortBlock, i0 = i.Util, V = i.Arrays;
  i.new_array_n, i.new_byte, i.new_double;
  var W = i.new_float, g = i.new_float_n, m = i.new_int;
  i.new_int_n;
  var G = i.assert, O = v0("2g11P"), M = v0("cPNKB");
  function q() {
    var s0 = v0("jL6I1"), f0 = new O(), r = 2.302585092994046, n = 2, S = 16, p = 2, A = 16, b = 0.34, e = 1 / 217621504 / (M.BLKSIZE / 2), l = 0.01, N = 0.8, T = 0.6, y = 0.3, Q = 3.5, f = 21, d = 0.2302585093;
    function C(u) {
      return u;
    }
    function v(u, c) {
      for (var w = 0, L = 0; L < M.BLKSIZE / 2; ++L)
        w += u[L] * c.ATH.eql_w[L];
      return w *= e, w;
    }
    function k(u, c, w, L, P, R, D, j, Y, t0, z) {
      var n0 = u.internal_flags;
      if (Y < 2)
        f0.fft_long(n0, L[P], Y, t0, z), f0.fft_short(n0, R[D], Y, t0, z);
      else if (Y == 2) {
        for (var d0 = M.BLKSIZE - 1; d0 >= 0; --d0) {
          var L0 = L[P + 0][d0], u0 = L[P + 1][d0];
          L[P + 0][d0] = (L0 + u0) * i0.SQRT2 * 0.5, L[P + 1][d0] = (L0 - u0) * i0.SQRT2 * 0.5;
        }
        for (var N0 = 2; N0 >= 0; --N0)
          for (var d0 = M.BLKSIZE_s - 1; d0 >= 0; --d0) {
            var L0 = R[D + 0][N0][d0], u0 = R[D + 1][N0][d0];
            R[D + 0][N0][d0] = (L0 + u0) * i0.SQRT2 * 0.5, R[D + 1][N0][d0] = (L0 - u0) * i0.SQRT2 * 0.5;
          }
      }
      c[0] = L[P + 0][0], c[0] *= c[0];
      for (var d0 = M.BLKSIZE / 2 - 1; d0 >= 0; --d0) {
        var a0 = L[P + 0][M.BLKSIZE / 2 - d0], B0 = L[P + 0][M.BLKSIZE / 2 + d0];
        c[M.BLKSIZE / 2 - d0] = (a0 * a0 + B0 * B0) * 0.5;
      }
      for (var N0 = 2; N0 >= 0; --N0) {
        w[N0][0] = R[D + 0][N0][0], w[N0][0] *= w[N0][0];
        for (var d0 = M.BLKSIZE_s / 2 - 1; d0 >= 0; --d0) {
          var a0 = R[D + 0][N0][M.BLKSIZE_s / 2 - d0], B0 = R[D + 0][N0][M.BLKSIZE_s / 2 + d0];
          w[N0][M.BLKSIZE_s / 2 - d0] = (a0 * a0 + B0 * B0) * 0.5;
        }
      }
      for (var k0 = 0, d0 = 11; d0 < M.HBLKSIZE; d0++)
        k0 += c[d0];
      if (n0.tot_ener[Y] = k0, u.analysis) {
        for (var d0 = 0; d0 < M.HBLKSIZE; d0++)
          n0.pinfo.energy[j][Y][d0] = n0.pinfo.energy_save[Y][d0], n0.pinfo.energy_save[Y][d0] = c[d0];
        n0.pinfo.pe[j][Y] = n0.pe[Y];
      }
      u.athaa_loudapprox == 2 && Y < 2 && (n0.loudness_sq[j][Y] = n0.loudness_sq_save[Y], n0.loudness_sq_save[Y] = v(c, n0));
    }
    var I = 8, H = 23, K = 15, l0, E, B, s = [
      1,
      0.79433,
      0.63096,
      0.63096,
      0.63096,
      0.63096,
      0.63096,
      0.25119,
      0.11749
    ];
    function _() {
      l0 = Math.pow(10, (I + 1) / 16), E = Math.pow(10, (H + 1) / 16), B = Math.pow(10, K / 10);
    }
    var a = [
      3.3246 * 3.3246,
      3.23837 * 3.23837,
      9.9500500969,
      9.0247369744,
      8.1854926609,
      7.0440875649,
      2.46209 * 2.46209,
      2.284 * 2.284,
      4.4892710641,
      1.96552 * 1.96552,
      1.82335 * 1.82335,
      1.69146 * 1.69146,
      2.4621061921,
      2.1508568964,
      1.37074 * 1.37074,
      1.31036 * 1.31036,
      1.5691069696,
      1.4555939904,
      1.16203 * 1.16203,
      1.2715945225,
      1.09428 * 1.09428,
      1.0659 * 1.0659,
      1.0779838276,
      1.0382591025,
      1
    ], h = [
      1.7782755904,
      1.35879 * 1.35879,
      1.38454 * 1.38454,
      1.39497 * 1.39497,
      1.40548 * 1.40548,
      1.3537 * 1.3537,
      1.6999465924,
      1.22321 * 1.22321,
      1.3169398564,
      1
    ], F = [
      5.5396212496,
      2.29259 * 2.29259,
      4.9868695969,
      2.12675 * 2.12675,
      2.02545 * 2.02545,
      1.87894 * 1.87894,
      1.74303 * 1.74303,
      1.61695 * 1.61695,
      2.2499700001,
      1.39148 * 1.39148,
      1.29083 * 1.29083,
      1.19746 * 1.19746,
      1.2339655056,
      1.0779838276
    ];
    function J(u, c, w, L, P, R) {
      var D;
      if (c > u)
        if (c < u * E)
          D = c / u;
        else
          return u + c;
      else {
        if (u >= c * E)
          return u + c;
        D = u / c;
      }
      if (G(u >= 0), G(c >= 0), u += c, L + 3 <= 6) {
        if (D >= l0)
          return u;
        var j = 0 | i0.FAST_LOG10_X(D, 16);
        return u * h[j];
      }
      var j = 0 | i0.FAST_LOG10_X(D, 16);
      if (R != 0 ? c = P.ATH.cb_s[w] * P.ATH.adjust : c = P.ATH.cb_l[w] * P.ATH.adjust, G(c >= 0), u < B * c) {
        if (u > c) {
          var Y, t0;
          return Y = 1, j <= 13 && (Y = F[j]), t0 = i0.FAST_LOG10_X(u / c, 10 / 15), u * ((a[j] - Y) * t0 + Y);
        }
        return j > 13 ? u : u * F[j];
      }
      return u * a[j];
    }
    var X = [
      1.7782755904,
      1.35879 * 1.35879,
      1.38454 * 1.38454,
      1.39497 * 1.39497,
      1.40548 * 1.40548,
      1.3537 * 1.3537,
      1.6999465924,
      1.22321 * 1.22321,
      1.3169398564,
      1
    ];
    function $(u, c, w) {
      var L;
      if (u < 0 && (u = 0), c < 0 && (c = 0), u <= 0)
        return c;
      if (c <= 0)
        return u;
      if (c > u ? L = c / u : L = u / c, -2 <= w && w <= 2) {
        if (L >= l0)
          return u + c;
        var P = 0 | i0.FAST_LOG10_X(L, 16);
        return (u + c) * X[P];
      }
      return L < E ? u + c : (u < c && (u = c), u);
    }
    function e0(u, c) {
      var w = u.internal_flags;
      if (w.channels_out > 1) {
        for (var L = 0; L < M.SBMAX_l; L++) {
          var P = w.thm[0].l[L], R = w.thm[1].l[L];
          w.thm[0].l[L] += R * c, w.thm[1].l[L] += P * c;
        }
        for (var L = 0; L < M.SBMAX_s; L++)
          for (var D = 0; D < 3; D++) {
            var P = w.thm[0].s[L][D], R = w.thm[1].s[L][D];
            w.thm[0].s[L][D] += R * c, w.thm[1].s[L][D] += P * c;
          }
      }
    }
    function o0(u) {
      for (var c = 0; c < M.SBMAX_l; c++)
        if (!(u.thm[0].l[c] > 1.58 * u.thm[1].l[c] || u.thm[1].l[c] > 1.58 * u.thm[0].l[c])) {
          var w = u.mld_l[c] * u.en[3].l[c], L = Math.max(u.thm[2].l[c], Math.min(u.thm[3].l[c], w));
          w = u.mld_l[c] * u.en[2].l[c];
          var P = Math.max(u.thm[3].l[c], Math.min(u.thm[2].l[c], w));
          u.thm[2].l[c] = L, u.thm[3].l[c] = P;
        }
      for (var c = 0; c < M.SBMAX_s; c++)
        for (var R = 0; R < 3; R++)
          if (!(u.thm[0].s[c][R] > 1.58 * u.thm[1].s[c][R] || u.thm[1].s[c][R] > 1.58 * u.thm[0].s[c][R])) {
            var w = u.mld_s[c] * u.en[3].s[c][R], L = Math.max(u.thm[2].s[c][R], Math.min(u.thm[3].s[c][R], w));
            w = u.mld_s[c] * u.en[2].s[c][R];
            var P = Math.max(u.thm[3].s[c][R], Math.min(u.thm[2].s[c][R], w));
            u.thm[2].s[c][R] = L, u.thm[3].s[c][R] = P;
          }
    }
    function b0(u, c, w) {
      var L = c, P = Math.pow(10, w);
      c *= 2, L *= 2;
      for (var R = 0; R < M.SBMAX_l; R++) {
        var D, j, Y, t0;
        if (t0 = u.ATH.cb_l[u.bm_l[R]] * P, D = Math.min(Math.max(u.thm[0].l[R], t0), Math.max(u.thm[1].l[R], t0)), j = Math.max(u.thm[2].l[R], t0), Y = Math.max(u.thm[3].l[R], t0), D * c < j + Y) {
          var z = D * L / (j + Y);
          j *= z, Y *= z, G(j + Y > 0);
        }
        u.thm[2].l[R] = Math.min(j, u.thm[2].l[R]), u.thm[3].l[R] = Math.min(Y, u.thm[3].l[R]);
      }
      P *= M.BLKSIZE_s / M.BLKSIZE;
      for (var R = 0; R < M.SBMAX_s; R++)
        for (var n0 = 0; n0 < 3; n0++) {
          var D, j, Y, t0;
          if (t0 = u.ATH.cb_s[u.bm_s[R]] * P, D = Math.min(Math.max(u.thm[0].s[R][n0], t0), Math.max(u.thm[1].s[R][n0], t0)), j = Math.max(u.thm[2].s[R][n0], t0), Y = Math.max(u.thm[3].s[R][n0], t0), D * c < j + Y) {
            var z = D * c / (j + Y);
            j *= z, Y *= z, G(j + Y > 0);
          }
          u.thm[2].s[R][n0] = Math.min(u.thm[2].s[R][n0], j), u.thm[3].s[R][n0] = Math.min(u.thm[3].s[R][n0], Y);
        }
    }
    function $0(u, c, w, L, P) {
      var R, D, j = 0, Y = 0;
      for (R = D = 0; R < M.SBMAX_s; ++D, ++R) {
        for (var t0 = u.bo_s[R], z = u.npart_s, n0 = t0 < z ? t0 : z; D < n0; )
          G(c[D] >= 0), G(w[D] >= 0), j += c[D], Y += w[D], D++;
        if (u.en[L].s[R][P] = j, u.thm[L].s[R][P] = Y, D >= z) {
          ++R;
          break;
        }
        G(c[D] >= 0), G(w[D] >= 0);
        var d0 = u.PSY.bo_s_weight[R], L0 = 1 - d0;
        j = d0 * c[D], Y = d0 * w[D], u.en[L].s[R][P] += j, u.thm[L].s[R][P] += Y, j = L0 * c[D], Y = L0 * w[D];
      }
      for (; R < M.SBMAX_s; ++R)
        u.en[L].s[R][P] = 0, u.thm[L].s[R][P] = 0;
    }
    function S0(u, c, w, L) {
      var P, R, D = 0, j = 0;
      for (P = R = 0; P < M.SBMAX_l; ++R, ++P) {
        for (var Y = u.bo_l[P], t0 = u.npart_l, z = Y < t0 ? Y : t0; R < z; )
          G(c[R] >= 0), G(w[R] >= 0), D += c[R], j += w[R], R++;
        if (u.en[L].l[P] = D, u.thm[L].l[P] = j, R >= t0) {
          ++P;
          break;
        }
        G(c[R] >= 0), G(w[R] >= 0);
        var n0 = u.PSY.bo_l_weight[P], d0 = 1 - n0;
        D = n0 * c[R], j = n0 * w[R], u.en[L].l[P] += D, u.thm[L].l[P] += j, D = d0 * c[R], j = d0 * w[R];
      }
      for (; P < M.SBMAX_l; ++P)
        u.en[L].l[P] = 0, u.thm[L].l[P] = 0;
    }
    function R0(u, c, w, L, P, R) {
      var D = u.internal_flags, j, Y;
      for (Y = j = 0; Y < D.npart_s; ++Y) {
        for (var t0 = 0, z = D.numlines_s[Y], n0 = 0; n0 < z; ++n0, ++j) {
          var d0 = c[R][j];
          t0 += d0;
        }
        w[Y] = t0;
      }
      for (G(Y == D.npart_s), G(j == 129), j = Y = 0; Y < D.npart_s; Y++) {
        var L0 = D.s3ind_s[Y][0], u0 = D.s3_ss[j++] * w[L0];
        for (++L0; L0 <= D.s3ind_s[Y][1]; )
          u0 += D.s3_ss[j] * w[L0], ++j, ++L0;
        var N0 = p * D.nb_s1[P][Y];
        if (L[Y] = Math.min(u0, N0), D.blocktype_old[P & 1] == M.SHORT_TYPE) {
          var N0 = A * D.nb_s2[P][Y], a0 = L[Y];
          L[Y] = Math.min(N0, a0);
        }
        D.nb_s2[P][Y] = D.nb_s1[P][Y], D.nb_s1[P][Y] = u0, G(L[Y] >= 0);
      }
      for (; Y <= M.CBANDS; ++Y)
        w[Y] = 0, L[Y] = 0;
    }
    function p0(u, c, w, L) {
      var P = u.internal_flags;
      u.short_blocks == Z.short_block_coupled && !(c[0] != 0 && c[1] != 0) && (c[0] = c[1] = 0);
      for (var R = 0; R < P.channels_out; R++)
        L[R] = M.NORM_TYPE, u.short_blocks == Z.short_block_dispensed && (c[R] = 1), u.short_blocks == Z.short_block_forced && (c[R] = 0), c[R] != 0 ? (G(P.blocktype_old[R] != M.START_TYPE), P.blocktype_old[R] == M.SHORT_TYPE && (L[R] = M.STOP_TYPE)) : (L[R] = M.SHORT_TYPE, P.blocktype_old[R] == M.NORM_TYPE && (P.blocktype_old[R] = M.START_TYPE), P.blocktype_old[R] == M.STOP_TYPE && (P.blocktype_old[R] = M.SHORT_TYPE)), w[R] = P.blocktype_old[R], P.blocktype_old[R] = L[R];
    }
    function Y0(u, c, w) {
      return w >= 1 ? u : w <= 0 ? c : c > 0 ? Math.pow(u / c, w) * c : 0;
    }
    var J0 = [
      11.8,
      13.6,
      17.2,
      32,
      46.5,
      51.3,
      57.5,
      67.1,
      71.5,
      84.6,
      97.6,
      130
    ];
    function t(u, c) {
      for (var w = 309.07, L = 0; L < M.SBMAX_s - 1; L++)
        for (var P = 0; P < 3; P++) {
          var R = u.thm.s[L][P];
          if (G(L < J0.length), R > 0) {
            var D = R * c, j = u.en.s[L][P];
            j > D && (j > D * 1e10 ? w += J0[L] * (10 * r) : (G(D > 0), w += J0[L] * i0.FAST_LOG10(j / D)));
          }
        }
      return w;
    }
    var o = [
      6.8,
      5.8,
      5.8,
      6.4,
      6.5,
      9.9,
      12.1,
      14.4,
      15,
      18.9,
      21.6,
      26.9,
      34.2,
      40.2,
      46.8,
      56.5,
      60.7,
      73.9,
      85.7,
      93.4,
      126.1
    ];
    function A0(u, c) {
      for (var w = 281.0575, L = 0; L < M.SBMAX_l - 1; L++) {
        var P = u.thm.l[L];
        if (G(L < o.length), P > 0) {
          var R = P * c, D = u.en.l[L];
          D > R && (D > R * 1e10 ? w += o[L] * (10 * r) : (G(R > 0), w += o[L] * i0.FAST_LOG10(D / R)));
        }
      }
      return w;
    }
    function M0(u, c, w, L, P) {
      var R, D;
      for (R = D = 0; R < u.npart_l; ++R) {
        var j = 0, Y = 0, t0;
        for (t0 = 0; t0 < u.numlines_l[R]; ++t0, ++D) {
          var z = c[D];
          G(z >= 0), j += z, Y < z && (Y = z);
        }
        w[R] = j, L[R] = Y, P[R] = j * u.rnumlines_l[R], G(u.rnumlines_l[R] >= 0), G(j >= 0), G(w[R] >= 0), G(L[R] >= 0), G(P[R] >= 0);
      }
    }
    function O0(u, c, w, L) {
      var P = s.length - 1, R = 0, D = w[R] + w[R + 1];
      if (G(D >= 0), D > 0) {
        var j = c[R];
        j < c[R + 1] && (j = c[R + 1]), G(u.numlines_l[R] + u.numlines_l[R + 1] - 1 > 0), D = 20 * (j * 2 - D) / (D * (u.numlines_l[R] + u.numlines_l[R + 1] - 1));
        var Y = 0 | D;
        Y > P && (Y = P), L[R] = Y;
      } else
        L[R] = 0;
      for (R = 1; R < u.npart_l - 1; R++)
        if (D = w[R - 1] + w[R] + w[R + 1], G(D >= 0), D > 0) {
          var j = c[R - 1];
          j < c[R] && (j = c[R]), j < c[R + 1] && (j = c[R + 1]), G(u.numlines_l[R - 1] + u.numlines_l[R] + u.numlines_l[R + 1] - 1 > 0), D = 20 * (j * 3 - D) / (D * (u.numlines_l[R - 1] + u.numlines_l[R] + u.numlines_l[R + 1] - 1));
          var Y = 0 | D;
          Y > P && (Y = P), L[R] = Y;
        } else
          L[R] = 0;
      if (G(R > 0), G(R == u.npart_l - 1), D = w[R - 1] + w[R], G(D >= 0), D > 0) {
        var j = c[R - 1];
        j < c[R] && (j = c[R]), G(u.numlines_l[R - 1] + u.numlines_l[R] - 1 > 0), D = 20 * (j * 2 - D) / (D * (u.numlines_l[R - 1] + u.numlines_l[R] - 1));
        var Y = 0 | D;
        Y > P && (Y = P), L[R] = Y;
      } else
        L[R] = 0;
      G(R == u.npart_l - 1);
    }
    var I0 = [
      -865163e-23 * 2,
      -0.01703172,
      -674764e-23 * 2,
      0.0418072,
      -336639e-22 * 2,
      -0.0876324,
      -154175e-22 * 2,
      0.1863476,
      -552212e-22 * 2,
      -0.627638
    ];
    this.L3psycho_anal_ns = function(u, c, w, L, P, R, D, j, Y, t0) {
      var z = u.internal_flags, n0 = g([
        2,
        M.BLKSIZE
      ]), d0 = g([
        2,
        3,
        M.BLKSIZE_s
      ]), L0 = W(M.CBANDS + 1), u0 = W(M.CBANDS + 1), N0 = W(M.CBANDS + 2), a0 = m(2), B0 = m(2), k0, c0, E0, h0, H0, P0, x0, C0, F0 = g([
        2,
        576
      ]), U0, i1 = m(M.CBANDS + 2), Q0 = m(M.CBANDS + 2);
      for (V.fill(Q0, 0), k0 = z.channels_out, u.mode == s0.JOINT_STEREO && (k0 = 4), u.VBR == x.vbr_off ? U0 = z.ResvMax == 0 ? 0 : z.ResvSize / z.ResvMax * 0.5 : u.VBR == x.vbr_rh || u.VBR == x.vbr_mtrh || u.VBR == x.vbr_mt ? U0 = 0.6 : U0 = 1, c0 = 0; c0 < z.channels_out; c0++) {
        var K0 = c[c0], n1 = w + 576 - 350 - f + 192;
        for (G(I0.length == (f - 1) / 2), h0 = 0; h0 < 576; h0++) {
          var _1, l1;
          for (_1 = K0[n1 + h0 + 10], l1 = 0, H0 = 0; H0 < (f - 1) / 2 - 1; H0 += 2)
            _1 += I0[H0] * (K0[n1 + h0 + H0] + K0[n1 + h0 + f - H0]), l1 += I0[H0 + 1] * (K0[n1 + h0 + H0 + 1] + K0[n1 + h0 + f - H0 - 1]);
          F0[c0][h0] = _1 + l1;
        }
        P[L][c0].en.assign(z.en[c0]), P[L][c0].thm.assign(z.thm[c0]), k0 > 2 && (R[L][c0].en.assign(z.en[c0 + 2]), R[L][c0].thm.assign(z.thm[c0 + 2]));
      }
      for (c0 = 0; c0 < k0; c0++) {
        var h1, u1, t1 = W(12), b1 = [
          0,
          0,
          0,
          0
        ], E1 = W(12), G1 = 1, ee, ae = W(M.CBANDS), re = W(M.CBANDS), Z0 = [
          0,
          0,
          0,
          0
        ], te = W(M.HBLKSIZE), ne = g([
          3,
          M.HBLKSIZE_s
        ]);
        for (G(z.npart_s <= M.CBANDS), G(z.npart_l <= M.CBANDS), h0 = 0; h0 < 3; h0++)
          t1[h0] = z.nsPsy.last_en_subshort[c0][h0 + 6], G(z.nsPsy.last_en_subshort[c0][h0 + 4] > 0), E1[h0] = t1[h0] / z.nsPsy.last_en_subshort[c0][h0 + 4], b1[0] += t1[h0];
        if (c0 == 2)
          for (h0 = 0; h0 < 576; h0++) {
            var P1, K1;
            P1 = F0[0][h0], K1 = F0[1][h0], F0[0][h0] = P1 + K1, F0[1][h0] = P1 - K1;
          }
        var se = F0[c0 & 1], $1 = 0;
        for (h0 = 0; h0 < 9; h0++) {
          for (var Be = $1 + 64, z0 = 1; $1 < Be; $1++)
            z0 < Math.abs(se[$1]) && (z0 = Math.abs(se[$1]));
          z.nsPsy.last_en_subshort[c0][h0] = t1[h0 + 3] = z0, b1[1 + h0 / 3] += z0, z0 > t1[h0 + 3 - 2] ? (G(t1[h0 + 3 - 2] > 0), z0 = z0 / t1[h0 + 3 - 2]) : t1[h0 + 3 - 2] > z0 * 10 ? (G(z0 > 0), z0 = t1[h0 + 3 - 2] / (z0 * 10)) : z0 = 0, E1[h0 + 3] = z0;
        }
        if (u.analysis) {
          var U1 = E1[0];
          for (h0 = 1; h0 < 12; h0++)
            U1 < E1[h0] && (U1 = E1[h0]);
          z.pinfo.ers[L][c0] = z.pinfo.ers_save[c0], z.pinfo.ers_save[c0] = U1;
        }
        for (ee = c0 == 3 ? z.nsPsy.attackthre_s : z.nsPsy.attackthre, h0 = 0; h0 < 12; h0++)
          Z0[h0 / 3] == 0 && E1[h0] > ee && (Z0[h0 / 3] = h0 % 3 + 1);
        for (h0 = 1; h0 < 4; h0++) {
          var Z1;
          b1[h0 - 1] > b1[h0] ? (G(b1[h0] > 0), Z1 = b1[h0 - 1] / b1[h0]) : (G(b1[h0 - 1] > 0), Z1 = b1[h0] / b1[h0 - 1]), Z1 < 1.7 && (Z0[h0] = 0, h0 == 1 && (Z0[0] = 0));
        }
        for (Z0[0] != 0 && z.nsPsy.lastAttacks[c0] != 0 && (Z0[0] = 0), (z.nsPsy.lastAttacks[c0] == 3 || Z0[0] + Z0[1] + Z0[2] + Z0[3] != 0) && (G1 = 0, Z0[1] != 0 && Z0[0] != 0 && (Z0[1] = 0), Z0[2] != 0 && Z0[1] != 0 && (Z0[2] = 0), Z0[3] != 0 && Z0[2] != 0 && (Z0[3] = 0)), c0 < 2 ? B0[c0] = G1 : G1 == 0 && (B0[0] = B0[1] = 0), Y[c0] = z.tot_ener[c0], u1 = d0, h1 = n0, k(u, te, ne, h1, c0 & 1, u1, c0 & 1, L, c0, c, w), M0(z, te, L0, ae, re), O0(z, ae, re, i1), C0 = 0; C0 < 3; C0++) {
          var Q1, s1;
          for (R0(u, ne, u0, N0, c0, C0), $0(z, u0, N0, c0, C0), x0 = 0; x0 < M.SBMAX_s; x0++) {
            if (s1 = z.thm[c0].s[x0][C0], s1 *= N, Z0[C0] >= 2 || Z0[C0 + 1] == 1) {
              var p1 = C0 != 0 ? C0 - 1 : 2, z0 = Y0(z.thm[c0].s[x0][p1], s1, T * U0);
              s1 = Math.min(s1, z0);
            }
            if (Z0[C0] == 1) {
              var p1 = C0 != 0 ? C0 - 1 : 2, z0 = Y0(z.thm[c0].s[x0][p1], s1, y * U0);
              s1 = Math.min(s1, z0);
            } else if (C0 != 0 && Z0[C0 - 1] == 3 || C0 == 0 && z.nsPsy.lastAttacks[c0] == 3) {
              var p1 = C0 != 2 ? C0 + 1 : 0, z0 = Y0(z.thm[c0].s[x0][p1], s1, y * U0);
              s1 = Math.min(s1, z0);
            }
            Q1 = t1[C0 * 3 + 3] + t1[C0 * 3 + 4] + t1[C0 * 3 + 5], t1[C0 * 3 + 5] * 6 < Q1 && (s1 *= 0.5, t1[C0 * 3 + 4] * 6 < Q1 && (s1 *= 0.5)), z.thm[c0].s[x0][C0] = s1;
          }
        }
        for (z.nsPsy.lastAttacks[c0] = Z0[2], P0 = 0, E0 = 0; E0 < z.npart_l; E0++) {
          for (var M1 = z.s3ind[E0][0], W1 = L0[M1] * s[i1[M1]], B1 = z.s3_ll[P0++] * W1; ++M1 <= z.s3ind[E0][1]; )
            W1 = L0[M1] * s[i1[M1]], B1 = J(B1, z.s3_ll[P0++] * W1, M1, M1 - E0, z, 0);
          B1 *= 0.158489319246111, z.blocktype_old[c0 & 1] == M.SHORT_TYPE ? N0[E0] = B1 : N0[E0] = Y0(Math.min(B1, Math.min(n * z.nb_1[c0][E0], S * z.nb_2[c0][E0])), B1, U0), z.nb_2[c0][E0] = z.nb_1[c0][E0], z.nb_1[c0][E0] = B1;
        }
        for (; E0 <= M.CBANDS; ++E0)
          L0[E0] = 0, N0[E0] = 0;
        S0(z, L0, N0, c0);
      }
      if ((u.mode == s0.STEREO || u.mode == s0.JOINT_STEREO) && u.interChRatio > 0 && e0(u, u.interChRatio), u.mode == s0.JOINT_STEREO) {
        var j1;
        o0(z), j1 = u.msfix, Math.abs(j1) > 0 && b0(z, j1, u.ATHlower * z.ATH.adjust);
      }
      for (p0(u, B0, t0, a0), c0 = 0; c0 < k0; c0++) {
        var N1, I1 = 0, V1, O1;
        c0 > 1 ? (N1 = j, I1 = -2, V1 = M.NORM_TYPE, (t0[0] == M.SHORT_TYPE || t0[1] == M.SHORT_TYPE) && (V1 = M.SHORT_TYPE), O1 = R[L][c0 - 2]) : (N1 = D, I1 = 0, V1 = t0[c0], O1 = P[L][c0]), V1 == M.SHORT_TYPE ? N1[I1 + c0] = t(O1, z.masking_lower) : N1[I1 + c0] = A0(O1, z.masking_lower), u.analysis && (z.pinfo.pe[L][c0] = N1[I1 + c0]);
      }
      return 0;
    };
    function T0(u, c, w, L, P, R, D, j) {
      var Y = u.internal_flags;
      if (L < 2)
        f0.fft_long(Y, D[j], L, c, w);
      else if (L == 2)
        for (var t0 = M.BLKSIZE - 1; t0 >= 0; --t0) {
          var z = D[j + 0][t0], n0 = D[j + 1][t0];
          D[j + 0][t0] = (z + n0) * i0.SQRT2 * 0.5, D[j + 1][t0] = (z - n0) * i0.SQRT2 * 0.5;
        }
      R[0] = D[j + 0][0], R[0] *= R[0];
      for (var t0 = M.BLKSIZE / 2 - 1; t0 >= 0; --t0) {
        var d0 = D[j + 0][M.BLKSIZE / 2 - t0], L0 = D[j + 0][M.BLKSIZE / 2 + t0];
        R[M.BLKSIZE / 2 - t0] = (d0 * d0 + L0 * L0) * 0.5;
      }
      for (var u0 = 0, t0 = 11; t0 < M.HBLKSIZE; t0++)
        u0 += R[t0];
      if (Y.tot_ener[L] = u0, u.analysis) {
        for (var t0 = 0; t0 < M.HBLKSIZE; t0++)
          Y.pinfo.energy[P][L][t0] = Y.pinfo.energy_save[L][t0], Y.pinfo.energy_save[L][t0] = R[t0];
        Y.pinfo.pe[P][L] = Y.pe[L];
      }
    }
    function w0(u, c, w, L, P, R, D, j) {
      var Y = u.internal_flags;
      if (P == 0 && L < 2 && f0.fft_short(Y, D[j], L, c, w), L == 2)
        for (var t0 = M.BLKSIZE_s - 1; t0 >= 0; --t0) {
          var z = D[j + 0][P][t0], n0 = D[j + 1][P][t0];
          D[j + 0][P][t0] = (z + n0) * i0.SQRT2 * 0.5, D[j + 1][P][t0] = (z - n0) * i0.SQRT2 * 0.5;
        }
      R[P][0] = D[j + 0][P][0], R[P][0] *= R[P][0];
      for (var t0 = M.BLKSIZE_s / 2 - 1; t0 >= 0; --t0) {
        var d0 = D[j + 0][P][M.BLKSIZE_s / 2 - t0], L0 = D[j + 0][P][M.BLKSIZE_s / 2 + t0];
        R[P][M.BLKSIZE_s / 2 - t0] = (d0 * d0 + L0 * L0) * 0.5;
      }
    }
    function X0(u, c, w, L) {
      var P = u.internal_flags;
      u.athaa_loudapprox == 2 && w < 2 && (P.loudness_sq[c][w] = P.loudness_sq_save[w], P.loudness_sq_save[w] = v(L, P));
    }
    var V0 = [
      -865163e-23 * 2,
      -0.01703172,
      -674764e-23 * 2,
      0.0418072,
      -336639e-22 * 2,
      -0.0876324,
      -154175e-22 * 2,
      0.1863476,
      -552212e-22 * 2,
      -0.627638
    ];
    function m0(u, c, w, L, P, R, D, j, Y, t0) {
      for (var z = g([
        2,
        576
      ]), n0 = u.internal_flags, d0 = n0.channels_out, L0 = u.mode == s0.JOINT_STEREO ? 4 : d0, u0 = 0; u0 < d0; u0++) {
        firbuf = c[u0];
        var N0 = w + 576 - 350 - f + 192;
        G(V0.length == (f - 1) / 2);
        for (var a0 = 0; a0 < 576; a0++) {
          var B0, k0;
          B0 = firbuf[N0 + a0 + 10], k0 = 0;
          for (var c0 = 0; c0 < (f - 1) / 2 - 1; c0 += 2)
            B0 += V0[c0] * (firbuf[N0 + a0 + c0] + firbuf[N0 + a0 + f - c0]), k0 += V0[c0 + 1] * (firbuf[N0 + a0 + c0 + 1] + firbuf[N0 + a0 + f - c0 - 1]);
          z[u0][a0] = B0 + k0;
        }
        P[L][u0].en.assign(n0.en[u0]), P[L][u0].thm.assign(n0.thm[u0]), L0 > 2 && (R[L][u0].en.assign(n0.en[u0 + 2]), R[L][u0].thm.assign(n0.thm[u0 + 2]));
      }
      for (var u0 = 0; u0 < L0; u0++) {
        var E0 = W(12), h0 = W(12), H0 = [
          0,
          0,
          0,
          0
        ], P0 = z[u0 & 1], x0 = 0, C0 = u0 == 3 ? n0.nsPsy.attackthre_s : n0.nsPsy.attackthre, F0 = 1;
        if (u0 == 2)
          for (var a0 = 0, c0 = 576; c0 > 0; ++a0, --c0) {
            var U0 = z[0][a0], i1 = z[1][a0];
            z[0][a0] = U0 + i1, z[1][a0] = U0 - i1;
          }
        for (var a0 = 0; a0 < 3; a0++)
          h0[a0] = n0.nsPsy.last_en_subshort[u0][a0 + 6], G(n0.nsPsy.last_en_subshort[u0][a0 + 4] > 0), E0[a0] = h0[a0] / n0.nsPsy.last_en_subshort[u0][a0 + 4], H0[0] += h0[a0];
        for (var a0 = 0; a0 < 9; a0++) {
          for (var Q0 = x0 + 64, K0 = 1; x0 < Q0; x0++)
            K0 < Math.abs(P0[x0]) && (K0 = Math.abs(P0[x0]));
          n0.nsPsy.last_en_subshort[u0][a0] = h0[a0 + 3] = K0, H0[1 + a0 / 3] += K0, K0 > h0[a0 + 3 - 2] ? (G(h0[a0 + 3 - 2] > 0), K0 = K0 / h0[a0 + 3 - 2]) : h0[a0 + 3 - 2] > K0 * 10 ? (G(K0 > 0), K0 = h0[a0 + 3 - 2] / (K0 * 10)) : K0 = 0, E0[a0 + 3] = K0;
        }
        for (var a0 = 0; a0 < 3; ++a0) {
          var n1 = h0[a0 * 3 + 3] + h0[a0 * 3 + 4] + h0[a0 * 3 + 5], _1 = 1;
          h0[a0 * 3 + 5] * 6 < n1 && (_1 *= 0.5, h0[a0 * 3 + 4] * 6 < n1 && (_1 *= 0.5)), j[u0][a0] = _1;
        }
        if (u.analysis) {
          for (var l1 = E0[0], a0 = 1; a0 < 12; a0++)
            l1 < E0[a0] && (l1 = E0[a0]);
          n0.pinfo.ers[L][u0] = n0.pinfo.ers_save[u0], n0.pinfo.ers_save[u0] = l1;
        }
        for (var a0 = 0; a0 < 12; a0++)
          Y[u0][a0 / 3] == 0 && E0[a0] > C0 && (Y[u0][a0 / 3] = a0 % 3 + 1);
        for (var a0 = 1; a0 < 4; a0++) {
          var h1 = H0[a0 - 1], u1 = H0[a0], t1 = Math.max(h1, u1);
          t1 < 4e4 && h1 < 1.7 * u1 && u1 < 1.7 * h1 && (a0 == 1 && Y[u0][0] <= Y[u0][a0] && (Y[u0][0] = 0), Y[u0][a0] = 0);
        }
        Y[u0][0] <= n0.nsPsy.lastAttacks[u0] && (Y[u0][0] = 0), (n0.nsPsy.lastAttacks[u0] == 3 || Y[u0][0] + Y[u0][1] + Y[u0][2] + Y[u0][3] != 0) && (F0 = 0, Y[u0][1] != 0 && Y[u0][0] != 0 && (Y[u0][1] = 0), Y[u0][2] != 0 && Y[u0][1] != 0 && (Y[u0][2] = 0), Y[u0][3] != 0 && Y[u0][2] != 0 && (Y[u0][3] = 0)), u0 < 2 ? t0[u0] = F0 : F0 == 0 && (t0[0] = t0[1] = 0), D[u0] = n0.tot_ener[u0];
      }
    }
    function q0(u, c, w) {
      if (w == 0)
        for (var L = 0; L < u.npart_s; L++)
          u.nb_s2[c][L] = u.nb_s1[c][L], u.nb_s1[c][L] = 0;
    }
    function g0(u, c) {
      for (var w = 0; w < u.npart_l; w++)
        u.nb_2[c][w] = u.nb_1[c][w], u.nb_1[c][w] = 0;
    }
    function G0(u, c, w, L) {
      var P = s.length - 1, R = 0, D = w[R] + w[R + 1];
      if (G(D >= 0), D > 0) {
        var j = c[R];
        j < c[R + 1] && (j = c[R + 1]), G(u.numlines_s[R] + u.numlines_s[R + 1] - 1 > 0), D = 20 * (j * 2 - D) / (D * (u.numlines_s[R] + u.numlines_s[R + 1] - 1));
        var Y = 0 | D;
        Y > P && (Y = P), L[R] = Y;
      } else
        L[R] = 0;
      for (R = 1; R < u.npart_s - 1; R++)
        if (D = w[R - 1] + w[R] + w[R + 1], G(R + 1 < u.npart_s), G(D >= 0), D > 0) {
          var j = c[R - 1];
          j < c[R] && (j = c[R]), j < c[R + 1] && (j = c[R + 1]), G(u.numlines_s[R - 1] + u.numlines_s[R] + u.numlines_s[R + 1] - 1 > 0), D = 20 * (j * 3 - D) / (D * (u.numlines_s[R - 1] + u.numlines_s[R] + u.numlines_s[R + 1] - 1));
          var Y = 0 | D;
          Y > P && (Y = P), L[R] = Y;
        } else
          L[R] = 0;
      if (G(R > 0), G(R == u.npart_s - 1), D = w[R - 1] + w[R], G(D >= 0), D > 0) {
        var j = c[R - 1];
        j < c[R] && (j = c[R]), G(u.numlines_s[R - 1] + u.numlines_s[R] - 1 > 0), D = 20 * (j * 2 - D) / (D * (u.numlines_s[R - 1] + u.numlines_s[R] - 1));
        var Y = 0 | D;
        Y > P && (Y = P), L[R] = Y;
      } else
        L[R] = 0;
      G(R == u.npart_s - 1);
    }
    function W0(u, c, w, L, P, R) {
      var D = u.internal_flags, j = new float[M.CBANDS](), Y = W(M.CBANDS), t0, z, n0, d0 = new int[M.CBANDS]();
      for (n0 = z = 0; n0 < D.npart_s; ++n0) {
        var L0 = 0, u0 = 0, N0 = D.numlines_s[n0];
        for (t0 = 0; t0 < N0; ++t0, ++z) {
          var a0 = c[R][z];
          L0 += a0, u0 < a0 && (u0 = a0);
        }
        w[n0] = L0, G(L0 >= 0), j[n0] = u0, G(N0 > 0), Y[n0] = L0 / N0, G(Y[n0] >= 0);
      }
      for (G(n0 == D.npart_s), G(z == 129); n0 < M.CBANDS; ++n0)
        j[n0] = 0, Y[n0] = 0;
      for (G0(D, j, Y, d0), z = n0 = 0; n0 < D.npart_s; n0++) {
        var B0 = D.s3ind_s[n0][0], k0 = D.s3ind_s[n0][1], c0, E0, h0, H0, P0;
        for (c0 = d0[B0], E0 = 1, H0 = D.s3_ss[z] * w[B0] * s[d0[B0]], ++z, ++B0; B0 <= k0; )
          c0 += d0[B0], E0 += 1, h0 = D.s3_ss[z] * w[B0] * s[d0[B0]], H0 = $(H0, h0, B0 - n0), ++z, ++B0;
        c0 = (1 + 2 * c0) / (2 * E0), P0 = s[c0] * 0.5, H0 *= P0, L[n0] = H0, D.nb_s2[P][n0] = D.nb_s1[P][n0], D.nb_s1[P][n0] = H0, h0 = j[n0], h0 *= D.minval_s[n0], h0 *= P0, L[n0] > h0 && (L[n0] = h0), D.masking_lower > 1 && (L[n0] *= D.masking_lower), L[n0] > w[n0] && (L[n0] = w[n0]), D.masking_lower < 1 && (L[n0] *= D.masking_lower), G(L[n0] >= 0);
      }
      for (; n0 < M.CBANDS; ++n0)
        w[n0] = 0, L[n0] = 0;
    }
    function e1(u, c, w, L, P) {
      var R = W(M.CBANDS), D = W(M.CBANDS), j = m(M.CBANDS + 2), Y;
      M0(u, c, w, R, D), O0(u, R, D, j);
      var t0 = 0;
      for (Y = 0; Y < u.npart_l; Y++) {
        var z, n0, d0, L0, u0 = u.s3ind[Y][0], N0 = u.s3ind[Y][1], a0 = 0, B0 = 0;
        for (a0 = j[u0], B0 += 1, n0 = u.s3_ll[t0] * w[u0] * s[j[u0]], ++t0, ++u0; u0 <= N0; )
          a0 += j[u0], B0 += 1, z = u.s3_ll[t0] * w[u0] * s[j[u0]], L0 = $(n0, z, u0 - Y), n0 = L0, ++t0, ++u0;
        if (a0 = (1 + 2 * a0) / (2 * B0), d0 = s[a0] * 0.5, n0 *= d0, u.blocktype_old[P & 1] == M.SHORT_TYPE) {
          var k0 = n * u.nb_1[P][Y];
          k0 > 0 ? L[Y] = Math.min(n0, k0) : L[Y] = Math.min(n0, w[Y] * y);
        } else {
          var c0 = S * u.nb_2[P][Y], E0 = n * u.nb_1[P][Y], k0;
          c0 <= 0 && (c0 = n0), E0 <= 0 && (E0 = n0), u.blocktype_old[P & 1] == M.NORM_TYPE ? k0 = Math.min(E0, c0) : k0 = E0, L[Y] = Math.min(n0, k0);
        }
        u.nb_2[P][Y] = u.nb_1[P][Y], u.nb_1[P][Y] = n0, z = R[Y], z *= u.minval_l[Y], z *= d0, L[Y] > z && (L[Y] = z), u.masking_lower > 1 && (L[Y] *= u.masking_lower), L[Y] > w[Y] && (L[Y] = w[Y]), u.masking_lower < 1 && (L[Y] *= u.masking_lower), G(L[Y] >= 0);
      }
      for (; Y < M.CBANDS; ++Y)
        w[Y] = 0, L[Y] = 0;
    }
    function j0(u, c) {
      var w = u.internal_flags;
      u.short_blocks == Z.short_block_coupled && !(c[0] != 0 && c[1] != 0) && (c[0] = c[1] = 0);
      for (var L = 0; L < w.channels_out; L++)
        u.short_blocks == Z.short_block_dispensed && (c[L] = 1), u.short_blocks == Z.short_block_forced && (c[L] = 0);
    }
    function a1(u, c, w) {
      for (var L = u.internal_flags, P = 0; P < L.channels_out; P++) {
        var R = M.NORM_TYPE;
        c[P] != 0 ? (G(L.blocktype_old[P] != M.START_TYPE), L.blocktype_old[P] == M.SHORT_TYPE && (R = M.STOP_TYPE)) : (R = M.SHORT_TYPE, L.blocktype_old[P] == M.NORM_TYPE && (L.blocktype_old[P] = M.START_TYPE), L.blocktype_old[P] == M.STOP_TYPE && (L.blocktype_old[P] = M.SHORT_TYPE)), w[P] = L.blocktype_old[P], L.blocktype_old[P] = R;
      }
    }
    function x1(u, c, w, L, P, R, D) {
      for (var j = R * 2, Y = R > 0 ? Math.pow(10, P) : 1, t0, z, n0 = 0; n0 < D; ++n0) {
        var d0 = u[2][n0], L0 = u[3][n0], u0 = c[0][n0], N0 = c[1][n0], a0 = c[2][n0], B0 = c[3][n0];
        if (u0 <= 1.58 * N0 && N0 <= 1.58 * u0) {
          var k0 = w[n0] * L0, c0 = w[n0] * d0;
          z = Math.max(a0, Math.min(B0, k0)), t0 = Math.max(B0, Math.min(a0, c0));
        } else
          z = a0, t0 = B0;
        if (R > 0) {
          var E0, h0, H0 = L[n0] * Y;
          if (E0 = Math.min(Math.max(u0, H0), Math.max(N0, H0)), a0 = Math.max(z, H0), B0 = Math.max(t0, H0), h0 = a0 + B0, h0 > 0 && E0 * j < h0) {
            var P0 = E0 * j / h0;
            a0 *= P0, B0 *= P0, G(h0 > 0);
          }
          z = Math.min(a0, z), t0 = Math.min(B0, t0);
        }
        z > d0 && (z = d0), t0 > L0 && (t0 = L0), c[2][n0] = z, c[3][n0] = t0;
      }
    }
    this.L3psycho_anal_vbr = function(u, c, w, L, P, R, D, j, Y, t0) {
      var z = u.internal_flags, n0, d0, L0 = W(M.HBLKSIZE), u0 = g([
        3,
        M.HBLKSIZE_s
      ]), N0 = g([
        2,
        M.BLKSIZE
      ]), a0 = g([
        2,
        3,
        M.BLKSIZE_s
      ]), B0 = g([
        4,
        M.CBANDS
      ]), k0 = g([
        4,
        M.CBANDS
      ]), c0 = g([
        4,
        3
      ]), E0 = 0.6, h0 = [
        [
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0
        ]
      ], H0 = m(2), P0 = u.mode == s0.JOINT_STEREO ? 4 : z.channels_out;
      m0(u, c, w, L, P, R, Y, c0, h0, H0), j0(u, H0);
      for (var x0 = 0; x0 < P0; x0++) {
        var C0 = x0 & 1;
        n0 = N0, T0(u, c, w, x0, L, L0, n0, C0), X0(u, L, x0, L0), H0[C0] != 0 ? e1(z, L0, B0[x0], k0[x0], x0) : g0(z, x0);
      }
      H0[0] + H0[1] == 2 && u.mode == s0.JOINT_STEREO && x1(B0, k0, z.mld_cb_l, z.ATH.cb_l, u.ATHlower * z.ATH.adjust, u.msfix, z.npart_l);
      for (var x0 = 0; x0 < P0; x0++) {
        var C0 = x0 & 1;
        H0[C0] != 0 && S0(z, B0[x0], k0[x0], x0);
      }
      for (var F0 = 0; F0 < 3; F0++) {
        for (var x0 = 0; x0 < P0; ++x0) {
          var C0 = x0 & 1;
          H0[C0] != 0 ? q0(z, x0, F0) : (d0 = a0, w0(u, c, w, x0, F0, u0, d0, C0), W0(u, u0, B0[x0], k0[x0], x0, F0));
        }
        H0[0] + H0[1] == 0 && u.mode == s0.JOINT_STEREO && x1(B0, k0, z.mld_cb_s, z.ATH.cb_s, u.ATHlower * z.ATH.adjust, u.msfix, z.npart_s);
        for (var x0 = 0; x0 < P0; ++x0) {
          var C0 = x0 & 1;
          H0[C0] == 0 && $0(z, B0[x0], k0[x0], x0, F0);
        }
      }
      for (var x0 = 0; x0 < P0; x0++) {
        var C0 = x0 & 1;
        if (H0[C0] == 0)
          for (var U0 = 0; U0 < M.SBMAX_s; U0++) {
            for (var i1 = W(3), F0 = 0; F0 < 3; F0++) {
              var Q0 = z.thm[x0].s[U0][F0];
              if (Q0 *= N, h0[x0][F0] >= 2 || h0[x0][F0 + 1] == 1) {
                var K0 = F0 != 0 ? F0 - 1 : 2, n1 = Y0(z.thm[x0].s[U0][K0], Q0, T * E0);
                Q0 = Math.min(Q0, n1);
              } else if (h0[x0][F0] == 1) {
                var K0 = F0 != 0 ? F0 - 1 : 2, n1 = Y0(z.thm[x0].s[U0][K0], Q0, y * E0);
                Q0 = Math.min(Q0, n1);
              } else if (F0 != 0 && h0[x0][F0 - 1] == 3 || F0 == 0 && z.nsPsy.lastAttacks[x0] == 3) {
                var K0 = F0 != 2 ? F0 + 1 : 0, n1 = Y0(z.thm[x0].s[U0][K0], Q0, y * E0);
                Q0 = Math.min(Q0, n1);
              }
              Q0 *= c0[x0][F0], i1[F0] = Q0;
            }
            for (var F0 = 0; F0 < 3; F0++)
              z.thm[x0].s[U0][F0] = i1[F0];
          }
      }
      for (var x0 = 0; x0 < P0; x0++)
        z.nsPsy.lastAttacks[x0] = h0[x0][2];
      a1(u, H0, t0);
      for (var x0 = 0; x0 < P0; x0++) {
        var _1, l1, h1, u1;
        x0 > 1 ? (_1 = j, l1 = -2, h1 = M.NORM_TYPE, (t0[0] == M.SHORT_TYPE || t0[1] == M.SHORT_TYPE) && (h1 = M.SHORT_TYPE), u1 = R[L][x0 - 2]) : (_1 = D, l1 = 0, h1 = t0[x0], u1 = P[L][x0]), h1 == M.SHORT_TYPE ? _1[l1 + x0] = t(u1, z.masking_lower) : _1[l1 + x0] = A0(u1, z.masking_lower), u.analysis && (z.pinfo.pe[L][x0] = _1[l1 + x0]);
      }
      return 0;
    };
    function r1(u, c) {
      var w = u, L;
      return w >= 0 ? L = -w * 27 : L = w * c, L <= -72 ? 0 : Math.exp(L * d);
    }
    function o1(u) {
      var c = 0, w = 0, L = 0, P, R;
      for (L = 0; r1(L, u) > 1e-20; L -= 1)
        ;
      for (P = L, R = 0; Math.abs(R - P) > 1e-12; )
        L = (R + P) / 2, r1(L, u) > 0 ? R = L : P = L;
      c = P;
      var L = 0, P, R;
      for (L = 0; r1(L, u) > 1e-20; L += 1)
        ;
      for (P = 0, R = L; Math.abs(R - P) > 1e-12; )
        L = (R + P) / 2, r1(L, u) > 0 ? P = L : R = L;
      w = R;
      var D = 0, j = 1e3, Y;
      for (Y = 0; Y <= j; ++Y) {
        var L = c + Y * (w - c) / j, t0 = r1(L, u);
        D += t0;
      }
      var z = (j + 1) / (D * (w - c));
      return z;
    }
    function m1(u) {
      var c, w, L, P;
      return c = u, c >= 0 ? c *= 3 : c *= 1.5, c >= 0.5 && c <= 2.5 ? (P = c - 0.5, w = 8 * (P * P - 2 * P)) : w = 0, c += 0.474, L = 15.811389 + 7.5 * c - 17.5 * Math.sqrt(1 + c * c), L <= -60 ? 0 : (c = Math.exp((w + L) * d), c /= 0.6609193, c);
    }
    function f1(u) {
      return u < 0 && (u = 0), u = u * 1e-3, 13 * Math.atan(0.76 * u) + 3.5 * Math.atan(u * u / 56.25);
    }
    function T1(u, c, w, L, P, R, D, j, Y, t0, z, n0) {
      var d0 = W(M.CBANDS + 1), L0 = j / (n0 > 15 ? 1152 : 384), u0 = m(M.HBLKSIZE), N0;
      j /= Y;
      var a0 = 0, B0 = 0;
      for (N0 = 0; N0 < M.CBANDS; N0++) {
        var k0, c0;
        for (k0 = f1(j * a0), d0[N0] = j * a0, c0 = a0; f1(j * c0) - k0 < b && c0 <= Y / 2; c0++)
          ;
        for (u[N0] = c0 - a0, B0 = N0 + 1; a0 < c0; )
          G(a0 < M.HBLKSIZE), u0[a0++] = N0;
        if (a0 > Y / 2) {
          a0 = Y / 2, ++N0;
          break;
        }
      }
      G(N0 < M.CBANDS), d0[N0] = j * a0;
      for (var E0 = 0; E0 < n0; E0++) {
        var h0, H0, P0, x0, C0;
        P0 = t0[E0], x0 = t0[E0 + 1], h0 = 0 | Math.floor(0.5 + z * (P0 - 0.5)), h0 < 0 && (h0 = 0), H0 = 0 | Math.floor(0.5 + z * (x0 - 0.5)), H0 > Y / 2 && (H0 = Y / 2), w[E0] = (u0[h0] + u0[H0]) / 2, c[E0] = u0[H0];
        var F0 = L0 * x0;
        D[E0] = (F0 - d0[c[E0]]) / (d0[c[E0] + 1] - d0[c[E0]]), D[E0] < 0 ? D[E0] = 0 : D[E0] > 1 && (D[E0] = 1), C0 = f1(j * t0[E0] * z), C0 = Math.min(C0, 15.5) / 15.5, R[E0] = Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * C0)) - 2.5);
      }
      a0 = 0;
      for (var U0 = 0; U0 < B0; U0++) {
        var i1 = u[U0], k0, Q0;
        k0 = f1(j * a0), Q0 = f1(j * (a0 + i1 - 1)), L[U0] = 0.5 * (k0 + Q0), k0 = f1(j * (a0 - 0.5)), Q0 = f1(j * (a0 + i1 - 0.5)), P[U0] = Q0 - k0, a0 += i1;
      }
      return B0;
    }
    function S1(u, c, w, L, P, R) {
      var D = g([
        M.CBANDS,
        M.CBANDS
      ]), j, Y = 0;
      if (R)
        for (var t0 = 0; t0 < c; t0++)
          for (j = 0; j < c; j++) {
            var z = m1(w[t0] - w[j]) * L[j];
            D[t0][j] = z * P[t0];
          }
      else
        for (j = 0; j < c; j++)
          for (var n0 = 15 + Math.min(21 / w[j], 12), d0 = o1(n0), t0 = 0; t0 < c; t0++) {
            var z = d0 * r1(w[t0] - w[j], n0) * L[j];
            D[t0][j] = z * P[t0];
          }
      for (var t0 = 0; t0 < c; t0++) {
        for (j = 0; j < c && !(D[t0][j] > 0); j++)
          ;
        for (u[t0][0] = j, j = c - 1; j > 0 && !(D[t0][j] > 0); j--)
          ;
        u[t0][1] = j, Y += u[t0][1] - u[t0][0] + 1;
      }
      for (var L0 = W(Y), u0 = 0, t0 = 0; t0 < c; t0++)
        for (j = u[t0][0]; j <= u[t0][1]; j++)
          L0[u0++] = D[t0][j];
      return L0;
    }
    function y1(u) {
      var c = f1(u);
      return c = Math.min(c, 15.5) / 15.5, Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * c)) - 2.5);
    }
    this.psymodel_init = function(u) {
      var c = u.internal_flags, w, L = !0, P = 13, R = 24, D = 0, j = 0, Y = -8.25, t0 = -4.5, z = W(M.CBANDS), n0 = W(M.CBANDS), d0 = W(M.CBANDS), L0 = u.out_samplerate;
      switch (u.experimentalZ) {
        default:
        case 0:
          L = !0;
          break;
        case 1:
          L = !(u.VBR == x.vbr_mtrh || u.VBR == x.vbr_mt);
          break;
        case 2:
          L = !1;
          break;
        case 3:
          P = 8, D = -1.75, j = -0.0125, Y = -8.25, t0 = -2.25;
          break;
      }
      for (c.ms_ener_ratio_old = 0.25, c.blocktype_old[0] = c.blocktype_old[1] = M.NORM_TYPE, w = 0; w < 4; ++w) {
        for (var a0 = 0; a0 < M.CBANDS; ++a0)
          c.nb_1[w][a0] = 1e20, c.nb_2[w][a0] = 1e20, c.nb_s1[w][a0] = c.nb_s2[w][a0] = 1;
        for (var u0 = 0; u0 < M.SBMAX_l; u0++)
          c.en[w].l[u0] = 1e20, c.thm[w].l[u0] = 1e20;
        for (var a0 = 0; a0 < 3; ++a0) {
          for (var u0 = 0; u0 < M.SBMAX_s; u0++)
            c.en[w].s[u0][a0] = 1e20, c.thm[w].s[u0][a0] = 1e20;
          c.nsPsy.lastAttacks[w] = 0;
        }
        for (var a0 = 0; a0 < 9; a0++)
          c.nsPsy.last_en_subshort[w][a0] = 10;
      }
      for (c.loudness_sq_save[0] = c.loudness_sq_save[1] = 0, c.npart_l = T1(c.numlines_l, c.bo_l, c.bm_l, z, n0, c.mld_l, c.PSY.bo_l_weight, L0, M.BLKSIZE, c.scalefac_band.l, M.BLKSIZE / 1152, M.SBMAX_l), G(c.npart_l < M.CBANDS), w = 0; w < c.npart_l; w++) {
        var N0 = D;
        z[w] >= P && (N0 = j * (z[w] - P) / (R - P) + D * (R - z[w]) / (R - P)), d0[w] = Math.pow(10, N0 / 10), c.numlines_l[w] > 0 ? c.rnumlines_l[w] = 1 / c.numlines_l[w] : c.rnumlines_l[w] = 0;
      }
      c.s3_ll = S1(c.s3ind, c.npart_l, z, n0, d0, L);
      var a0 = 0;
      for (w = 0; w < c.npart_l; w++) {
        var B0;
        B0 = U.MAX_VALUE;
        for (var k0 = 0; k0 < c.numlines_l[w]; k0++, a0++) {
          var c0 = L0 * a0 / (1e3 * M.BLKSIZE), E0;
          E0 = this.ATHformula(c0 * 1e3, u) - 20, E0 = Math.pow(10, 0.1 * E0), E0 *= c.numlines_l[w], B0 > E0 && (B0 = E0);
        }
        c.ATH.cb_l[w] = B0, B0 = -20 + z[w] * 20 / 10, B0 > 6 && (B0 = 100), B0 < -15 && (B0 = -15), B0 -= 8, c.minval_l[w] = Math.pow(10, B0 / 10) * c.numlines_l[w];
      }
      for (c.npart_s = T1(c.numlines_s, c.bo_s, c.bm_s, z, n0, c.mld_s, c.PSY.bo_s_weight, L0, M.BLKSIZE_s, c.scalefac_band.s, M.BLKSIZE_s / 384, M.SBMAX_s), G(c.npart_s < M.CBANDS), a0 = 0, w = 0; w < c.npart_s; w++) {
        var B0, N0 = Y;
        z[w] >= P && (N0 = t0 * (z[w] - P) / (R - P) + Y * (R - z[w]) / (R - P)), d0[w] = Math.pow(10, N0 / 10), B0 = U.MAX_VALUE;
        for (var k0 = 0; k0 < c.numlines_s[w]; k0++, a0++) {
          var c0 = L0 * a0 / (1e3 * M.BLKSIZE_s), E0;
          E0 = this.ATHformula(c0 * 1e3, u) - 20, E0 = Math.pow(10, 0.1 * E0), E0 *= c.numlines_s[w], B0 > E0 && (B0 = E0);
        }
        c.ATH.cb_s[w] = B0, B0 = -7 + z[w] * 7 / 12, z[w] > 12 && (B0 *= 1 + Math.log(1 + B0) * 3.1), z[w] < 12 && (B0 *= 1 + Math.log(1 - B0) * 2.3), B0 < -15 && (B0 = -15), B0 -= 8, c.minval_s[w] = Math.pow(10, B0 / 10) * c.numlines_s[w];
      }
      c.s3_ss = S1(c.s3ind_s, c.npart_s, z, n0, d0, L), _(), f0.init_fft(c), c.decay = Math.exp(-1 * r / (l * L0 / 192));
      var h0;
      h0 = Q, u.exp_nspsytune & 2 && (h0 = 1), Math.abs(u.msfix) > 0 && (h0 = u.msfix), u.msfix = h0;
      for (var H0 = 0; H0 < c.npart_l; H0++)
        c.s3ind[H0][1] > c.npart_l - 1 && (c.s3ind[H0][1] = c.npart_l - 1);
      var P0 = 576 * c.mode_gr / L0;
      if (c.ATH.decay = Math.pow(10, -1.2 * P0), c.ATH.adjust = 0.01, c.ATH.adjustLimit = 1, G(c.bo_l[M.SBMAX_l - 1] <= c.npart_l), G(c.bo_s[M.SBMAX_s - 1] <= c.npart_s), u.ATHtype != -1) {
        var c0, x0 = u.out_samplerate / M.BLKSIZE, C0 = 0;
        for (c0 = 0, w = 0; w < M.BLKSIZE / 2; ++w)
          c0 += x0, c.ATH.eql_w[w] = 1 / Math.pow(10, this.ATHformula(c0, u) / 10), C0 += c.ATH.eql_w[w];
        for (C0 = 1 / C0, w = M.BLKSIZE / 2; --w >= 0; )
          c.ATH.eql_w[w] *= C0;
      }
      for (var H0 = a0 = 0; H0 < c.npart_s; ++H0)
        for (w = 0; w < c.numlines_s[H0]; ++w)
          ++a0;
      G(a0 == 129);
      for (var H0 = a0 = 0; H0 < c.npart_l; ++H0)
        for (w = 0; w < c.numlines_l[H0]; ++w)
          ++a0;
      for (G(a0 == 513), a0 = 0, w = 0; w < c.npart_l; w++) {
        var c0 = L0 * (a0 + c.numlines_l[w] / 2) / (1 * M.BLKSIZE);
        c.mld_cb_l[w] = y1(c0), a0 += c.numlines_l[w];
      }
      for (; w < M.CBANDS; ++w)
        c.mld_cb_l[w] = 1;
      for (a0 = 0, w = 0; w < c.npart_s; w++) {
        var c0 = L0 * (a0 + c.numlines_s[w] / 2) / (1 * M.BLKSIZE_s);
        c.mld_cb_s[w] = y1(c0), a0 += c.numlines_s[w];
      }
      for (; w < M.CBANDS; ++w)
        c.mld_cb_s[w] = 1;
      return 0;
    };
    function A1(u, c) {
      u < -0.3 && (u = 3410), u /= 1e3, u = Math.max(0.1, u);
      var w = 3.64 * Math.pow(u, -0.8) - 6.8 * Math.exp(-0.6 * Math.pow(u - 3.4, 2)) + 6 * Math.exp(-0.15 * Math.pow(u - 8.7, 2)) + (0.6 + 0.04 * c) * 1e-3 * Math.pow(u, 4);
      return w;
    }
    this.ATHformula = function(u, c) {
      var w;
      switch (c.ATHtype) {
        case 0:
          w = A1(u, 9);
          break;
        case 1:
          w = A1(u, -1);
          break;
        case 2:
          w = A1(u, 0);
          break;
        case 3:
          w = A1(u, 1) + 6;
          break;
        case 4:
          w = A1(u, c.ATHcurve);
          break;
        default:
          w = A1(u, 0);
          break;
      }
      return w;
    };
  }
  r0.exports = q;
});
v0.register("2g11P", function(r0, _0) {
  var i = v0("3YDN3");
  i.System, i.VbrMode, i.Float, i.ShortBlock;
  var x = i.Util;
  i.Arrays, i.new_array_n, i.new_byte, i.new_double;
  var U = i.new_float;
  i.new_float_n, i.new_int, i.new_int_n, i.assert;
  var Z = v0("cPNKB");
  function i0() {
    var V = U(Z.BLKSIZE), W = U(Z.BLKSIZE_s / 2), g = [
      0.9238795325112867,
      0.3826834323650898,
      0.9951847266721969,
      0.0980171403295606,
      0.9996988186962042,
      0.02454122852291229,
      0.9999811752826011,
      0.006135884649154475
    ];
    function m(O, M, q) {
      var s0 = 0, f0, r, n;
      q <<= 1;
      var S = M + q;
      f0 = 4;
      do {
        var p, A, b, e, l, N, T;
        T = f0 >> 1, e = f0, l = f0 << 1, N = l + e, f0 = l << 1, r = M, n = r + T;
        do {
          var y, Q, f, d;
          Q = O[r + 0] - O[r + e], y = O[r + 0] + O[r + e], d = O[r + l] - O[r + N], f = O[r + l] + O[r + N], O[r + l] = y - f, O[r + 0] = y + f, O[r + N] = Q - d, O[r + e] = Q + d, Q = O[n + 0] - O[n + e], y = O[n + 0] + O[n + e], d = x.SQRT2 * O[n + N], f = x.SQRT2 * O[n + l], O[n + l] = y - f, O[n + 0] = y + f, O[n + N] = Q - d, O[n + e] = Q + d, n += f0, r += f0;
        } while (r < S);
        for (A = g[s0 + 0], p = g[s0 + 1], b = 1; b < T; b++) {
          var C, v;
          C = 1 - 2 * p * p, v = 2 * p * A, r = M + b, n = M + e - b;
          do {
            var k, I, H, y, Q, K, f, l0, d, E;
            I = v * O[r + e] - C * O[n + e], k = C * O[r + e] + v * O[n + e], Q = O[r + 0] - k, y = O[r + 0] + k, K = O[n + 0] - I, H = O[n + 0] + I, I = v * O[r + N] - C * O[n + N], k = C * O[r + N] + v * O[n + N], d = O[r + l] - k, f = O[r + l] + k, E = O[n + l] - I, l0 = O[n + l] + I, I = p * f - A * E, k = A * f + p * E, O[r + l] = y - k, O[r + 0] = y + k, O[n + N] = K - I, O[n + e] = K + I, I = A * l0 - p * d, k = p * l0 + A * d, O[n + l] = H - k, O[n + 0] = H + k, O[r + N] = Q - I, O[r + e] = Q + I, n += f0, r += f0;
          } while (r < S);
          C = A, A = C * g[s0 + 0] - p * g[s0 + 1], p = C * g[s0 + 1] + p * g[s0 + 0];
        }
        s0 += 2;
      } while (f0 < q);
    }
    var G = [
      0,
      128,
      64,
      192,
      32,
      160,
      96,
      224,
      16,
      144,
      80,
      208,
      48,
      176,
      112,
      240,
      8,
      136,
      72,
      200,
      40,
      168,
      104,
      232,
      24,
      152,
      88,
      216,
      56,
      184,
      120,
      248,
      4,
      132,
      68,
      196,
      36,
      164,
      100,
      228,
      20,
      148,
      84,
      212,
      52,
      180,
      116,
      244,
      12,
      140,
      76,
      204,
      44,
      172,
      108,
      236,
      28,
      156,
      92,
      220,
      60,
      188,
      124,
      252,
      2,
      130,
      66,
      194,
      34,
      162,
      98,
      226,
      18,
      146,
      82,
      210,
      50,
      178,
      114,
      242,
      10,
      138,
      74,
      202,
      42,
      170,
      106,
      234,
      26,
      154,
      90,
      218,
      58,
      186,
      122,
      250,
      6,
      134,
      70,
      198,
      38,
      166,
      102,
      230,
      22,
      150,
      86,
      214,
      54,
      182,
      118,
      246,
      14,
      142,
      78,
      206,
      46,
      174,
      110,
      238,
      30,
      158,
      94,
      222,
      62,
      190,
      126,
      254
    ];
    this.fft_short = function(O, M, q, s0, f0) {
      for (var r = 0; r < 3; r++) {
        var n = Z.BLKSIZE_s / 2, S = 65535 & 192 * (r + 1), p = Z.BLKSIZE_s / 8 - 1;
        do {
          var A, b, e, l, N, T = G[p << 2] & 255;
          A = W[T] * s0[q][f0 + T + S], N = W[127 - T] * s0[q][f0 + T + S + 128], b = A - N, A = A + N, e = W[T + 64] * s0[q][f0 + T + S + 64], N = W[63 - T] * s0[q][f0 + T + S + 192], l = e - N, e = e + N, n -= 4, M[r][n + 0] = A + e, M[r][n + 2] = A - e, M[r][n + 1] = b + l, M[r][n + 3] = b - l, A = W[T + 1] * s0[q][f0 + T + S + 1], N = W[126 - T] * s0[q][f0 + T + S + 129], b = A - N, A = A + N, e = W[T + 65] * s0[q][f0 + T + S + 65], N = W[62 - T] * s0[q][f0 + T + S + 193], l = e - N, e = e + N, M[r][n + Z.BLKSIZE_s / 2 + 0] = A + e, M[r][n + Z.BLKSIZE_s / 2 + 2] = A - e, M[r][n + Z.BLKSIZE_s / 2 + 1] = b + l, M[r][n + Z.BLKSIZE_s / 2 + 3] = b - l;
        } while (--p >= 0);
        m(M[r], n, Z.BLKSIZE_s / 2);
      }
    }, this.fft_long = function(O, M, q, s0, f0) {
      var r = Z.BLKSIZE / 8 - 1, n = Z.BLKSIZE / 2;
      do {
        var S, p, A, b, e, l = G[r] & 255;
        S = V[l] * s0[q][f0 + l], e = V[l + 512] * s0[q][f0 + l + 512], p = S - e, S = S + e, A = V[l + 256] * s0[q][f0 + l + 256], e = V[l + 768] * s0[q][f0 + l + 768], b = A - e, A = A + e, n -= 4, M[n + 0] = S + A, M[n + 2] = S - A, M[n + 1] = p + b, M[n + 3] = p - b, S = V[l + 1] * s0[q][f0 + l + 1], e = V[l + 513] * s0[q][f0 + l + 513], p = S - e, S = S + e, A = V[l + 257] * s0[q][f0 + l + 257], e = V[l + 769] * s0[q][f0 + l + 769], b = A - e, A = A + e, M[n + Z.BLKSIZE / 2 + 0] = S + A, M[n + Z.BLKSIZE / 2 + 2] = S - A, M[n + Z.BLKSIZE / 2 + 1] = p + b, M[n + Z.BLKSIZE / 2 + 3] = p - b;
      } while (--r >= 0);
      m(M, n, Z.BLKSIZE / 2);
    }, this.init_fft = function(O) {
      for (var M = 0; M < Z.BLKSIZE; M++)
        V[M] = 0.42 - 0.5 * Math.cos(2 * Math.PI * (M + 0.5) / Z.BLKSIZE) + 0.08 * Math.cos(4 * Math.PI * (M + 0.5) / Z.BLKSIZE);
      for (var M = 0; M < Z.BLKSIZE_s / 2; M++)
        W[M] = 0.5 * (1 - Math.cos(2 * Math.PI * (M + 0.5) / Z.BLKSIZE_s));
    };
  }
  r0.exports = i0;
});
v0.register("cPNKB", function(r0, _0) {
  var i = v0("3YDN3"), x = i.System, U = i.VbrMode;
  i.Float, i.ShortBlock, i.Util, i.Arrays;
  var Z = i.new_array_n;
  i.new_byte, i.new_double;
  var i0 = i.new_float, V = i.new_float_n, W = i.new_int;
  i.new_int_n;
  var g = i.assert;
  m.ENCDELAY = 576, m.POSTDELAY = 1152, m.MDCTDELAY = 48, m.FFTOFFSET = 224 + m.MDCTDELAY, m.DECDELAY = 528, m.SBLIMIT = 32, m.CBANDS = 64, m.SBPSY_l = 21, m.SBPSY_s = 12, m.SBMAX_l = 22, m.SBMAX_s = 13, m.PSFB21 = 6, m.PSFB12 = 6, m.BLKSIZE = 1024, m.HBLKSIZE = m.BLKSIZE / 2 + 1, m.BLKSIZE_s = 256, m.HBLKSIZE_s = m.BLKSIZE_s / 2 + 1, m.NORM_TYPE = 0, m.START_TYPE = 1, m.SHORT_TYPE = 2, m.STOP_TYPE = 3, m.MPG_MD_LR_LR = 0, m.MPG_MD_LR_I = 1, m.MPG_MD_MS_LR = 2, m.MPG_MD_MS_I = 3, m.fircoef = [
    -0.1039435,
    -0.1892065,
    -0.0432472 * 5,
    -0.155915,
    779609e-23 * 5,
    0.0467745 * 5,
    0.50455,
    0.756825,
    0.187098 * 5
  ];
  function m() {
    var G = v0("drj3v"), O = v0("hvy40"), M = v0("jL6I1"), q = m.FFTOFFSET, s0 = m.MPG_MD_MS_LR, f0 = null;
    this.psy = null;
    var r = null, n = null, S = null;
    this.setModules = function(l, N, T, y) {
      f0 = l, this.psy = N, r = N, n = y, S = T;
    };
    var p = new G();
    function A(l) {
      var N, T;
      if (l.ATH.useAdjust == 0) {
        l.ATH.adjust = 1;
        return;
      }
      if (T = l.loudness_sq[0][0], N = l.loudness_sq[1][0], l.channels_out == 2 ? (T += l.loudness_sq[0][1], N += l.loudness_sq[1][1]) : (T += T, N += N), l.mode_gr == 2 && (T = Math.max(T, N)), T *= 0.5, T *= l.ATH.aaSensitivityP, T > 0.03125)
        l.ATH.adjust >= 1 ? l.ATH.adjust = 1 : l.ATH.adjust < l.ATH.adjustLimit && (l.ATH.adjust = l.ATH.adjustLimit), l.ATH.adjustLimit = 1;
      else {
        var y = 31.98 * T + 625e-6;
        l.ATH.adjust >= y ? (l.ATH.adjust *= y * 0.075 + 0.925, l.ATH.adjust < y && (l.ATH.adjust = y)) : l.ATH.adjustLimit >= y ? l.ATH.adjust = y : l.ATH.adjust < l.ATH.adjustLimit && (l.ATH.adjust = l.ATH.adjustLimit), l.ATH.adjustLimit = y;
      }
    }
    function b(l) {
      var N, T;
      for (g(0 <= l.bitrate_index && l.bitrate_index < 16), g(0 <= l.mode_ext && l.mode_ext < 4), l.bitrate_stereoMode_Hist[l.bitrate_index][4]++, l.bitrate_stereoMode_Hist[15][4]++, l.channels_out == 2 && (l.bitrate_stereoMode_Hist[l.bitrate_index][l.mode_ext]++, l.bitrate_stereoMode_Hist[15][l.mode_ext]++), N = 0; N < l.mode_gr; ++N)
        for (T = 0; T < l.channels_out; ++T) {
          var y = l.l3_side.tt[N][T].block_type | 0;
          l.l3_side.tt[N][T].mixed_block_flag != 0 && (y = 4), l.bitrate_blockType_Hist[l.bitrate_index][y]++, l.bitrate_blockType_Hist[l.bitrate_index][5]++, l.bitrate_blockType_Hist[15][y]++, l.bitrate_blockType_Hist[15][5]++;
        }
    }
    function e(l, N) {
      var T = l.internal_flags, y, Q;
      if (T.lame_encode_frame_init == 0) {
        var f, d, C = i0(2014), v = i0(2014);
        for (T.lame_encode_frame_init = 1, f = 0, d = 0; f < 286 + 576 * (1 + T.mode_gr); ++f)
          f < 576 * T.mode_gr ? (C[f] = 0, T.channels_out == 2 && (v[f] = 0)) : (C[f] = N[0][d], T.channels_out == 2 && (v[f] = N[1][d]), ++d);
        for (Q = 0; Q < T.mode_gr; Q++)
          for (y = 0; y < T.channels_out; y++)
            T.l3_side.tt[Q][y].block_type = m.SHORT_TYPE;
        p.mdct_sub48(T, C, v), g(576 >= m.FFTOFFSET), g(T.mf_size >= m.BLKSIZE + l.framesize - m.FFTOFFSET), g(T.mf_size >= 512 + l.framesize - 32);
      }
    }
    this.lame_encode_mp3_frame = function(l, N, T, y, Q, f) {
      var d, C = Z([
        2,
        2
      ]);
      C[0][0] = new O(), C[0][1] = new O(), C[1][0] = new O(), C[1][1] = new O();
      var v = Z([
        2,
        2
      ]);
      v[0][0] = new O(), v[0][1] = new O(), v[1][0] = new O(), v[1][1] = new O();
      var k, I = [
        null,
        null
      ], H = l.internal_flags, K = V([
        2,
        4
      ]), l0 = [
        0.5,
        0.5
      ], E = [
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ], B = [
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ], s, _, a;
      if (I[0] = N, I[1] = T, H.lame_encode_frame_init == 0 && e(l, I), H.padding = 0, (H.slot_lag -= H.frac_SpF) < 0 && (H.slot_lag += l.out_samplerate, H.padding = 1), H.psymodel != 0) {
        var h, F = [
          null,
          null
        ], J = 0, X = W(2);
        for (a = 0; a < H.mode_gr; a++) {
          for (_ = 0; _ < H.channels_out; _++)
            F[_] = I[_], J = 576 + a * 576 - m.FFTOFFSET;
          if (l.VBR == U.vbr_mtrh || l.VBR == U.vbr_mt ? h = r.L3psycho_anal_vbr(l, F, J, a, C, v, E[a], B[a], K[a], X) : h = r.L3psycho_anal_ns(l, F, J, a, C, v, E[a], B[a], K[a], X), h != 0)
            return -4;
          for (l.mode == M.JOINT_STEREO && (l0[a] = K[a][2] + K[a][3], l0[a] > 0 && (l0[a] = K[a][3] / l0[a])), _ = 0; _ < H.channels_out; _++) {
            var $ = H.l3_side.tt[a][_];
            $.block_type = X[_], $.mixed_block_flag = 0;
          }
        }
      } else
        for (a = 0; a < H.mode_gr; a++)
          for (_ = 0; _ < H.channels_out; _++)
            H.l3_side.tt[a][_].block_type = m.NORM_TYPE, H.l3_side.tt[a][_].mixed_block_flag = 0, B[a][_] = E[a][_] = 700;
      if (A(H), p.mdct_sub48(H, I[0], I[1]), H.mode_ext = m.MPG_MD_LR_LR, l.force_ms)
        H.mode_ext = m.MPG_MD_MS_LR;
      else if (l.mode == M.JOINT_STEREO) {
        var e0 = 0, o0 = 0;
        for (a = 0; a < H.mode_gr; a++)
          for (_ = 0; _ < H.channels_out; _++)
            e0 += B[a][_], o0 += E[a][_];
        if (e0 <= 1 * o0) {
          var b0 = H.l3_side.tt[0], $0 = H.l3_side.tt[H.mode_gr - 1];
          b0[0].block_type == b0[1].block_type && $0[0].block_type == $0[1].block_type && (H.mode_ext = m.MPG_MD_MS_LR);
        }
      }
      if (H.mode_ext == s0 ? (k = v, s = B) : (k = C, s = E), l.analysis && H.pinfo != null)
        for (a = 0; a < H.mode_gr; a++)
          for (_ = 0; _ < H.channels_out; _++)
            H.pinfo.ms_ratio[a] = H.ms_ratio[a], H.pinfo.ms_ener_ratio[a] = l0[a], H.pinfo.blocktype[a][_] = H.l3_side.tt[a][_].block_type, H.pinfo.pe[a][_] = s[a][_], x.arraycopy(H.l3_side.tt[a][_].xr, 0, H.pinfo.xr[a][_], 0, 576), H.mode_ext == s0 && (H.pinfo.ers[a][_] = H.pinfo.ers[a][_ + 2], x.arraycopy(H.pinfo.energy[a][_ + 2], 0, H.pinfo.energy[a][_], 0, H.pinfo.energy[a][_].length));
      if (l.VBR == U.vbr_off || l.VBR == U.vbr_abr) {
        var S0, R0;
        for (S0 = 0; S0 < 18; S0++)
          H.nsPsy.pefirbuf[S0] = H.nsPsy.pefirbuf[S0 + 1];
        for (R0 = 0, a = 0; a < H.mode_gr; a++)
          for (_ = 0; _ < H.channels_out; _++)
            R0 += s[a][_];
        for (H.nsPsy.pefirbuf[18] = R0, R0 = H.nsPsy.pefirbuf[9], S0 = 0; S0 < 9; S0++)
          R0 += (H.nsPsy.pefirbuf[S0] + H.nsPsy.pefirbuf[18 - S0]) * m.fircoef[S0];
        for (R0 = 3350 * H.mode_gr * H.channels_out / R0, a = 0; a < H.mode_gr; a++)
          for (_ = 0; _ < H.channels_out; _++)
            s[a][_] *= R0;
      }
      if (H.iteration_loop.iteration_loop(l, s, l0, k), f0.format_bitstream(l), d = f0.copy_buffer(H, y, Q, f, 1), l.bWriteVbrTag && n.addVbrFrame(l), l.analysis && H.pinfo != null) {
        for (_ = 0; _ < H.channels_out; _++) {
          var p0;
          for (p0 = 0; p0 < q; p0++)
            H.pinfo.pcmdata[_][p0] = H.pinfo.pcmdata[_][p0 + l.framesize];
          for (p0 = q; p0 < 1600; p0++)
            H.pinfo.pcmdata[_][p0] = I[_][p0 - q];
        }
        S.set_frame_pinfo(l, k);
      }
      return b(H), d;
    };
  }
  r0.exports = m;
});
v0.register("drj3v", function(r0, _0) {
  var i = v0("3YDN3"), x = i.System;
  i.VbrMode, i.Float, i.ShortBlock;
  var U = i.Util, Z = i.Arrays;
  i.new_array_n, i.new_byte, i.new_double;
  var i0 = i.new_float;
  i.new_float_n, i.new_int, i.new_int_n, i.assert;
  var V = v0("cPNKB");
  function W() {
    var g = [
      -0.1482523854003001,
      32.308141959636465,
      296.40344946382766,
      883.1344870032432,
      11113.947376231741,
      1057.2713659324597,
      305.7402417275812,
      30.825928907280012,
      /* 15 */
      3.8533188138216365,
      59.42900443849514,
      709.5899960123345,
      5281.91112291017,
      -5829.66483675846,
      -817.6293103748613,
      -76.91656988279972,
      -4.594269939176596,
      0.9063471690191471,
      0.1960342806591213,
      -0.15466694054279598,
      34.324387823855965,
      301.8067566458425,
      817.599602898885,
      11573.795901679885,
      1181.2520595540152,
      321.59731579894424,
      31.232021761053772,
      /* 14 */
      3.7107095756221318,
      53.650946155329365,
      684.167428119626,
      5224.56624370173,
      -6366.391851890084,
      -908.9766368219582,
      -89.83068876699639,
      -5.411397422890401,
      0.8206787908286602,
      0.3901806440322567,
      -0.16070888947830023,
      36.147034243915876,
      304.11815768187864,
      732.7429163887613,
      11989.60988270091,
      1300.012278487897,
      335.28490093152146,
      31.48816102859945,
      /* 13 */
      3.373875931311736,
      47.232241542899175,
      652.7371796173471,
      5132.414255594984,
      -6909.087078780055,
      -1001.9990371107289,
      -103.62185754286375,
      -6.104916304710272,
      0.7416505462720353,
      0.5805693545089249,
      -0.16636367662261495,
      37.751650073343995,
      303.01103387567713,
      627.9747488785183,
      12358.763425278165,
      1412.2779918482834,
      346.7496836825721,
      31.598286663170416,
      /* 12 */
      3.1598635433980946,
      40.57878626349686,
      616.1671130880391,
      5007.833007176154,
      -7454.040671756168,
      -1095.7960341867115,
      -118.24411666465777,
      -6.818469345853504,
      0.6681786379192989,
      0.7653668647301797,
      -0.1716176790982088,
      39.11551877123304,
      298.3413246578966,
      503.5259106886539,
      12679.589408408976,
      1516.5821921214542,
      355.9850766329023,
      31.395241710249053,
      /* 11 */
      2.9164211881972335,
      33.79716964664243,
      574.8943997801362,
      4853.234992253242,
      -7997.57021486075,
      -1189.7624067269965,
      -133.6444792601766,
      -7.7202770609839915,
      0.5993769336819237,
      0.9427934736519954,
      -0.17645823955292173,
      40.21879108166477,
      289.9982036694474,
      359.3226160751053,
      12950.259102786438,
      1612.1013903507662,
      362.85067106591504,
      31.045922092242872,
      /* 10 */
      2.822222032597987,
      26.988862316190684,
      529.8996541764288,
      4671.371946949588,
      -8535.899136645805,
      -1282.5898586244496,
      -149.58553632943463,
      -8.643494270763135,
      0.5345111359507916,
      1.111140466039205,
      -0.36174739330527045,
      41.04429910497807,
      277.5463268268618,
      195.6386023135583,
      13169.43812144731,
      1697.6433561479398,
      367.40983966190305,
      30.557037410382826,
      /* 9 */
      2.531473372857427,
      20.070154905927314,
      481.50208566532336,
      4464.970341588308,
      -9065.36882077239,
      -1373.62841526722,
      -166.1660487028118,
      -9.58289321133207,
      0.4729647758913199,
      1.268786568327291,
      -0.36970682634889585,
      41.393213350082036,
      261.2935935556502,
      12.935476055240873,
      13336.131683328815,
      1772.508612059496,
      369.76534388639965,
      29.751323653701338,
      2.4023193045459172,
      13.304795348228817,
      430.5615775526625,
      4237.0568611071185,
      -9581.931701634761,
      -1461.6913552409758,
      -183.12733958476446,
      -10.718010163869403,
      0.41421356237309503,
      /* tan(PI/8) */
      1.414213562373095,
      -0.37677560326535325,
      41.619486213528496,
      241.05423794991074,
      -187.94665032361226,
      13450.063605744153,
      1836.153896465782,
      369.4908799925761,
      29.001847876923147,
      /* 7 */
      2.0714759319987186,
      6.779591200894186,
      377.7767837205709,
      3990.386575512536,
      -10081.709459700915,
      -1545.947424837898,
      -200.3762958015653,
      -11.864482073055006,
      0.3578057213145241,
      1.546020906725474,
      -0.3829366947518991,
      41.1516456456653,
      216.47684307105183,
      -406.1569483347166,
      13511.136535077321,
      1887.8076599260432,
      367.3025214564151,
      28.136213436723654,
      /* 6 */
      1.913880671464418,
      0.3829366947518991,
      323.85365704338597,
      3728.1472257487526,
      -10561.233882199509,
      -1625.2025997821418,
      -217.62525175416,
      -13.015432208941645,
      0.3033466836073424,
      1.66293922460509,
      -0.5822628872992417,
      40.35639251440489,
      188.20071124269245,
      -640.2706748618148,
      13519.21490106562,
      1927.6022433578062,
      362.8197642637487,
      26.968821921868447,
      /* 5 */
      1.7463817695935329,
      -5.62650678237171,
      269.3016715297017,
      3453.386536448852,
      -11016.145278780888,
      -1698.6569643425091,
      -234.7658734267683,
      -14.16351421663124,
      0.2504869601913055,
      1.76384252869671,
      -0.5887180101749253,
      39.23429103868072,
      155.76096234403798,
      -889.2492977967378,
      13475.470561874661,
      1955.0535223723712,
      356.4450994756727,
      25.894952980042156,
      /* 4 */
      1.5695032905781554,
      -11.181939564328772,
      214.80884394039484,
      3169.1640829158237,
      -11443.321309975563,
      -1765.1588461316153,
      -251.68908574481912,
      -15.49755935939164,
      0.198912367379658,
      1.847759065022573,
      -0.7912582233652842,
      37.39369355329111,
      119.699486012458,
      -1151.0956593239027,
      13380.446257078214,
      1970.3952110853447,
      348.01959814116185,
      24.731487364283044,
      /* 3 */
      1.3850130831637748,
      -16.421408865300393,
      161.05030052864092,
      2878.3322807850063,
      -11838.991423510031,
      -1823.985884688674,
      -268.2854986386903,
      -16.81724543849939,
      0.1483359875383474,
      1.913880671464418,
      -0.7960642926861912,
      35.2322109610459,
      80.01928065061526,
      -1424.0212633405113,
      13235.794061869668,
      1973.804052543835,
      337.9908651258184,
      23.289159354463873,
      1.3934255946442087,
      -21.099669467133474,
      108.48348407242611,
      2583.700758091299,
      -12199.726194855148,
      -1874.2780658979746,
      -284.2467154529415,
      -18.11369784385905,
      0.09849140335716425,
      1.961570560806461,
      -0.998795456205172,
      32.56307803611191,
      36.958364584370486,
      -1706.075448829146,
      13043.287458812016,
      1965.3831106103316,
      326.43182772364605,
      22.175018750622293,
      1.198638339011324,
      -25.371248002043963,
      57.53505923036915,
      2288.41886619975,
      -12522.674544337233,
      -1914.8400385312243,
      -299.26241273417224,
      -19.37805630698734,
      0.04912684976946725,
      1.990369453344394,
      0.035780907 * U.SQRT2 * 0.5 / 2384e-9,
      0.017876148 * U.SQRT2 * 0.5 / 2384e-9,
      3134727e-9 * U.SQRT2 * 0.5 / 2384e-9,
      2457142e-9 * U.SQRT2 * 0.5 / 2384e-9,
      971317e-9 * U.SQRT2 * 0.5 / 2384e-9,
      218868e-9 * U.SQRT2 * 0.5 / 2384e-9,
      101566e-9 * U.SQRT2 * 0.5 / 2384e-9,
      13828e-9 * U.SQRT2 * 0.5 / 2384e-9,
      12804.797818791945,
      1945.5515939597317,
      313.4244966442953,
      20.801593959731544,
      1995.1556208053692,
      9.000838926174497,
      -29.20218120805369
    ], m = 12, G = 36, O = [
      [
        2382191739347913e-28,
        6423305872147834e-28,
        9400849094049688e-28,
        1122435026096556e-27,
        1183840321267481e-27,
        1122435026096556e-27,
        940084909404969e-27,
        6423305872147839e-28,
        2382191739347918e-28,
        5456116108943412e-27,
        4878985199565852e-27,
        4240448995017367e-27,
        3559909094758252e-27,
        2858043359288075e-27,
        2156177623817898e-27,
        1475637723558783e-27,
        8371015190102974e-28,
        2599706096327376e-28,
        -5456116108943412e-27,
        -4878985199565852e-27,
        -4240448995017367e-27,
        -3559909094758252e-27,
        -2858043359288076e-27,
        -2156177623817898e-27,
        -1475637723558783e-27,
        -8371015190102975e-28,
        -2599706096327376e-28,
        -2382191739347923e-28,
        -6423305872147843e-28,
        -9400849094049696e-28,
        -1122435026096556e-27,
        -1183840321267481e-27,
        -1122435026096556e-27,
        -9400849094049694e-28,
        -642330587214784e-27,
        -2382191739347918e-28
      ],
      [
        2382191739347913e-28,
        6423305872147834e-28,
        9400849094049688e-28,
        1122435026096556e-27,
        1183840321267481e-27,
        1122435026096556e-27,
        9400849094049688e-28,
        6423305872147841e-28,
        2382191739347918e-28,
        5456116108943413e-27,
        4878985199565852e-27,
        4240448995017367e-27,
        3559909094758253e-27,
        2858043359288075e-27,
        2156177623817898e-27,
        1475637723558782e-27,
        8371015190102975e-28,
        2599706096327376e-28,
        -5461314069809755e-27,
        -4921085770524055e-27,
        -4343405037091838e-27,
        -3732668368707687e-27,
        -3093523840190885e-27,
        -2430835727329465e-27,
        -1734679010007751e-27,
        -974825365660928e-27,
        -2797435120168326e-28,
        0,
        0,
        0,
        0,
        0,
        0,
        -2283748241799531e-28,
        -4037858874020686e-28,
        -2146547464825323e-28
      ],
      [
        0.1316524975873958,
        /* win[SHORT_TYPE] */
        0.414213562373095,
        0.7673269879789602,
        1.091308501069271,
        /* tantab_l */
        1.303225372841206,
        1.56968557711749,
        1.920982126971166,
        2.414213562373094,
        3.171594802363212,
        4.510708503662055,
        7.595754112725146,
        22.90376554843115,
        0.984807753012208,
        /* cx */
        0.6427876096865394,
        0.3420201433256688,
        0.9396926207859084,
        -0.1736481776669303,
        -0.7660444431189779,
        0.8660254037844387,
        0.5,
        -0.5144957554275265,
        /* ca */
        -0.4717319685649723,
        -0.3133774542039019,
        -0.1819131996109812,
        -0.09457419252642064,
        -0.04096558288530405,
        -0.01419856857247115,
        -0.003699974673760037,
        0.8574929257125442,
        /* cs */
        0.8817419973177052,
        0.9496286491027329,
        0.9833145924917901,
        0.9955178160675857,
        0.9991605581781475,
        0.999899195244447,
        0.9999931550702802
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        2283748241799531e-28,
        4037858874020686e-28,
        2146547464825323e-28,
        5461314069809755e-27,
        4921085770524055e-27,
        4343405037091838e-27,
        3732668368707687e-27,
        3093523840190885e-27,
        2430835727329466e-27,
        1734679010007751e-27,
        974825365660928e-27,
        2797435120168326e-28,
        -5456116108943413e-27,
        -4878985199565852e-27,
        -4240448995017367e-27,
        -3559909094758253e-27,
        -2858043359288075e-27,
        -2156177623817898e-27,
        -1475637723558782e-27,
        -8371015190102975e-28,
        -2599706096327376e-28,
        -2382191739347913e-28,
        -6423305872147834e-28,
        -9400849094049688e-28,
        -1122435026096556e-27,
        -1183840321267481e-27,
        -1122435026096556e-27,
        -9400849094049688e-28,
        -6423305872147841e-28,
        -2382191739347918e-28
      ]
    ], M = O[V.SHORT_TYPE], q = O[V.SHORT_TYPE], s0 = O[V.SHORT_TYPE], f0 = O[V.SHORT_TYPE], r = [
      0,
      1,
      16,
      17,
      8,
      9,
      24,
      25,
      4,
      5,
      20,
      21,
      12,
      13,
      28,
      29,
      2,
      3,
      18,
      19,
      10,
      11,
      26,
      27,
      6,
      7,
      22,
      23,
      14,
      15,
      30,
      31
    ];
    function n(A, b, e) {
      for (var l = 10, N = b + 238 - 14 - 286, T = -15; T < 0; T++) {
        var y, Q, f;
        y = g[l + -10], Q = A[N + -224] * y, f = A[b + 224] * y, y = g[l + -9], Q += A[N + -160] * y, f += A[b + 160] * y, y = g[l + -8], Q += A[N + -96] * y, f += A[b + 96] * y, y = g[l + -7], Q += A[N + -32] * y, f += A[b + 32] * y, y = g[l + -6], Q += A[N + 32] * y, f += A[b + -32] * y, y = g[l + -5], Q += A[N + 96] * y, f += A[b + -96] * y, y = g[l + -4], Q += A[N + 160] * y, f += A[b + -160] * y, y = g[l + -3], Q += A[N + 224] * y, f += A[b + -224] * y, y = g[l + -2], Q += A[b + -256] * y, f -= A[N + 256] * y, y = g[l + -1], Q += A[b + -192] * y, f -= A[N + 192] * y, y = g[l + 0], Q += A[b + -128] * y, f -= A[N + 128] * y, y = g[l + 1], Q += A[b + -64] * y, f -= A[N + 64] * y, y = g[l + 2], Q += A[b + 0] * y, f -= A[N + 0] * y, y = g[l + 3], Q += A[b + 64] * y, f -= A[N + -64] * y, y = g[l + 4], Q += A[b + 128] * y, f -= A[N + -128] * y, y = g[l + 5], Q += A[b + 192] * y, f -= A[N + -192] * y, Q *= g[l + 6], y = f - Q, e[30 + T * 2] = f + Q, e[31 + T * 2] = g[l + 7] * y, l += 18, b--, N++;
      }
      var Q, f, d, C;
      f = A[b + -16] * g[l + -10], Q = A[b + -32] * g[l + -2], f += (A[b + -48] - A[b + 16]) * g[l + -9], Q += A[b + -96] * g[l + -1], f += (A[b + -80] + A[b + 48]) * g[l + -8], Q += A[b + -160] * g[l + 0], f += (A[b + -112] - A[b + 80]) * g[l + -7], Q += A[b + -224] * g[l + 1], f += (A[b + -144] + A[b + 112]) * g[l + -6], Q -= A[b + 32] * g[l + 2], f += (A[b + -176] - A[b + 144]) * g[l + -5], Q -= A[b + 96] * g[l + 3], f += (A[b + -208] + A[b + 176]) * g[l + -4], Q -= A[b + 160] * g[l + 4], f += (A[b + -240] - A[b + 208]) * g[l + -3], Q -= A[b + 224], d = Q - f, C = Q + f, f = e[14], Q = e[15] - f, e[31] = C + f, e[30] = d + Q, e[15] = d - Q, e[14] = C - f;
      var v;
      v = e[28] - e[0], e[0] += e[28], e[28] = v * g[l + -36 + 7], v = e[29] - e[1], e[1] += e[29], e[29] = v * g[l + -36 + 7], v = e[26] - e[2], e[2] += e[26], e[26] = v * g[l + -72 + 7], v = e[27] - e[3], e[3] += e[27], e[27] = v * g[l + -72 + 7], v = e[24] - e[4], e[4] += e[24], e[24] = v * g[l + -108 + 7], v = e[25] - e[5], e[5] += e[25], e[25] = v * g[l + -108 + 7], v = e[22] - e[6], e[6] += e[22], e[22] = v * U.SQRT2, v = e[23] - e[7], e[7] += e[23], e[23] = v * U.SQRT2 - e[7], e[7] -= e[6], e[22] -= e[7], e[23] -= e[22], v = e[6], e[6] = e[31] - v, e[31] = e[31] + v, v = e[7], e[7] = e[30] - v, e[30] = e[30] + v, v = e[22], e[22] = e[15] - v, e[15] = e[15] + v, v = e[23], e[23] = e[14] - v, e[14] = e[14] + v, v = e[20] - e[8], e[8] += e[20], e[20] = v * g[l + -180 + 7], v = e[21] - e[9], e[9] += e[21], e[21] = v * g[l + -180 + 7], v = e[18] - e[10], e[10] += e[18], e[18] = v * g[l + -216 + 7], v = e[19] - e[11], e[11] += e[19], e[19] = v * g[l + -216 + 7], v = e[16] - e[12], e[12] += e[16], e[16] = v * g[l + -252 + 7], v = e[17] - e[13], e[13] += e[17], e[17] = v * g[l + -252 + 7], v = -e[20] + e[24], e[20] += e[24], e[24] = v * g[l + -216 + 7], v = -e[21] + e[25], e[21] += e[25], e[25] = v * g[l + -216 + 7], v = e[4] - e[8], e[4] += e[8], e[8] = v * g[l + -216 + 7], v = e[5] - e[9], e[5] += e[9], e[9] = v * g[l + -216 + 7], v = e[0] - e[12], e[0] += e[12], e[12] = v * g[l + -72 + 7], v = e[1] - e[13], e[1] += e[13], e[13] = v * g[l + -72 + 7], v = e[16] - e[28], e[16] += e[28], e[28] = v * g[l + -72 + 7], v = -e[17] + e[29], e[17] += e[29], e[29] = v * g[l + -72 + 7], v = U.SQRT2 * (e[2] - e[10]), e[2] += e[10], e[10] = v, v = U.SQRT2 * (e[3] - e[11]), e[3] += e[11], e[11] = v, v = U.SQRT2 * (-e[18] + e[26]), e[18] += e[26], e[26] = v - e[18], v = U.SQRT2 * (-e[19] + e[27]), e[19] += e[27], e[27] = v - e[19], v = e[2], e[19] -= e[3], e[3] -= v, e[2] = e[31] - v, e[31] += v, v = e[3], e[11] -= e[19], e[18] -= v, e[3] = e[30] - v, e[30] += v, v = e[18], e[27] -= e[11], e[19] -= v, e[18] = e[15] - v, e[15] += v, v = e[19], e[10] -= v, e[19] = e[14] - v, e[14] += v, v = e[10], e[11] -= v, e[10] = e[23] - v, e[23] += v, v = e[11], e[26] -= v, e[11] = e[22] - v, e[22] += v, v = e[26], e[27] -= v, e[26] = e[7] - v, e[7] += v, v = e[27], e[27] = e[6] - v, e[6] += v, v = U.SQRT2 * (e[0] - e[4]), e[0] += e[4], e[4] = v, v = U.SQRT2 * (e[1] - e[5]), e[1] += e[5], e[5] = v, v = U.SQRT2 * (e[16] - e[20]), e[16] += e[20], e[20] = v, v = U.SQRT2 * (e[17] - e[21]), e[17] += e[21], e[21] = v, v = -U.SQRT2 * (e[8] - e[12]), e[8] += e[12], e[12] = v - e[8], v = -U.SQRT2 * (e[9] - e[13]), e[9] += e[13], e[13] = v - e[9], v = -U.SQRT2 * (e[25] - e[29]), e[25] += e[29], e[29] = v - e[25], v = -U.SQRT2 * (e[24] + e[28]), e[24] -= e[28], e[28] = v - e[24], v = e[24] - e[16], e[24] = v, v = e[20] - v, e[20] = v, v = e[28] - v, e[28] = v, v = e[25] - e[17], e[25] = v, v = e[21] - v, e[21] = v, v = e[29] - v, e[29] = v, v = e[17] - e[1], e[17] = v, v = e[9] - v, e[9] = v, v = e[25] - v, e[25] = v, v = e[5] - v, e[5] = v, v = e[21] - v, e[21] = v, v = e[13] - v, e[13] = v, v = e[29] - v, e[29] = v, v = e[1] - e[0], e[1] = v, v = e[16] - v, e[16] = v, v = e[17] - v, e[17] = v, v = e[8] - v, e[8] = v, v = e[9] - v, e[9] = v, v = e[24] - v, e[24] = v, v = e[25] - v, e[25] = v, v = e[4] - v, e[4] = v, v = e[5] - v, e[5] = v, v = e[20] - v, e[20] = v, v = e[21] - v, e[21] = v, v = e[12] - v, e[12] = v, v = e[13] - v, e[13] = v, v = e[28] - v, e[28] = v, v = e[29] - v, e[29] = v, v = e[0], e[0] += e[31], e[31] -= v, v = e[1], e[1] += e[30], e[30] -= v, v = e[16], e[16] += e[15], e[15] -= v, v = e[17], e[17] += e[14], e[14] -= v, v = e[8], e[8] += e[23], e[23] -= v, v = e[9], e[9] += e[22], e[22] -= v, v = e[24], e[24] += e[7], e[7] -= v, v = e[25], e[25] += e[6], e[6] -= v, v = e[4], e[4] += e[27], e[27] -= v, v = e[5], e[5] += e[26], e[26] -= v, v = e[20], e[20] += e[11], e[11] -= v, v = e[21], e[21] += e[10], e[10] -= v, v = e[12], e[12] += e[19], e[19] -= v, v = e[13], e[13] += e[18], e[18] -= v, v = e[28], e[28] += e[3], e[3] -= v, v = e[29], e[29] += e[2], e[2] -= v;
    }
    function S(A, b) {
      for (var e = 0; e < 3; e++) {
        var l, N, T, y, Q, f;
        y = A[b + 6] * O[V.SHORT_TYPE][0] - A[b + 15], l = A[b + 0] * O[V.SHORT_TYPE][2] - A[b + 9], N = y + l, T = y - l, y = A[b + 15] * O[V.SHORT_TYPE][0] + A[b + 6], l = A[b + 9] * O[V.SHORT_TYPE][2] + A[b + 0], Q = y + l, f = -y + l, l = (A[b + 3] * O[V.SHORT_TYPE][1] - A[b + 12]) * 2069978111953089e-26, y = (A[b + 12] * O[V.SHORT_TYPE][1] + A[b + 3]) * 2069978111953089e-26, A[b + 0] = N * 190752519173728e-25 + l, A[b + 15] = -Q * 190752519173728e-25 + y, T = T * 16519652744032674e-27, Q = Q * 0.5 * 1907525191737281e-26 + y, A[b + 3] = T - Q, A[b + 6] = T + Q, N = N * 0.5 * 1907525191737281e-26 - l, f = f * 16519652744032674e-27, A[b + 9] = N + f, A[b + 12] = N - f, b++;
      }
    }
    function p(A, b, e) {
      var l, N, T, y, Q, f, d, C, v, k;
      T = e[17] - e[9], Q = e[15] - e[11], f = e[14] - e[12], d = e[0] + e[8], C = e[1] + e[7], v = e[2] + e[6], k = e[3] + e[5], A[b + 17] = d + v - k - (C - e[4]), N = (d + v - k) * q[19] + (C - e[4]), l = (T - Q - f) * q[18], A[b + 5] = l + N, A[b + 6] = l - N, y = (e[16] - e[10]) * q[18], C = C * q[19] + e[4], l = T * q[12] + y + Q * q[13] + f * q[14], N = -d * q[16] + C - v * q[17] + k * q[15], A[b + 1] = l + N, A[b + 2] = l - N, l = T * q[13] - y - Q * q[14] + f * q[12], N = -d * q[17] + C - v * q[15] + k * q[16], A[b + 9] = l + N, A[b + 10] = l - N, l = T * q[14] - y + Q * q[12] - f * q[13], N = d * q[15] - C + v * q[16] - k * q[17], A[b + 13] = l + N, A[b + 14] = l - N;
      var I, H, K, l0, E, B, s, _;
      I = e[8] - e[0], K = e[6] - e[2], l0 = e[5] - e[3], E = e[17] + e[9], B = e[16] + e[10], s = e[15] + e[11], _ = e[14] + e[12], A[b + 0] = E + s + _ + (B + e[13]), l = (E + s + _) * q[19] - (B + e[13]), N = (I - K + l0) * q[18], A[b + 11] = l + N, A[b + 12] = l - N, H = (e[7] - e[1]) * q[18], B = e[13] - B * q[19], l = E * q[15] - B + s * q[16] + _ * q[17], N = I * q[14] + H + K * q[12] + l0 * q[13], A[b + 3] = l + N, A[b + 4] = l - N, l = -E * q[17] + B - s * q[15] - _ * q[16], N = I * q[13] + H - K * q[14] - l0 * q[12], A[b + 7] = l + N, A[b + 8] = l - N, l = -E * q[16] + B - s * q[17] - _ * q[15], N = I * q[12] - H + K * q[13] - l0 * q[14], A[b + 15] = l + N, A[b + 16] = l - N;
    }
    this.mdct_sub48 = function(A, b, e) {
      for (var l = b, N = 286, T = 0; T < A.channels_out; T++) {
        for (var y = 0; y < A.mode_gr; y++) {
          for (var Q, f = A.l3_side.tt[y][T], d = f.xr, C = 0, v = A.sb_sample[T][1 - y], k = 0, I = 0; I < 9; I++)
            for (n(l, N, v[k]), n(l, N + 32, v[k + 1]), k += 2, N += 64, Q = 1; Q < 32; Q += 2)
              v[k - 1][Q] *= -1;
          for (Q = 0; Q < 32; Q++, C += 18) {
            var H = f.block_type, K = A.sb_sample[T][y], l0 = A.sb_sample[T][1 - y];
            if (f.mixed_block_flag != 0 && Q < 2 && (H = 0), A.amp_filter[Q] < 1e-12)
              Z.fill(d, C + 0, C + 18, 0);
            else {
              if (A.amp_filter[Q] < 1)
                for (var I = 0; I < 18; I++)
                  l0[I][r[Q]] *= A.amp_filter[Q];
              if (H == V.SHORT_TYPE) {
                for (var I = -m / 4; I < 0; I++) {
                  var E = O[V.SHORT_TYPE][I + 3];
                  d[C + I * 3 + 9] = K[9 + I][r[Q]] * E - K[8 - I][r[Q]], d[C + I * 3 + 18] = K[14 - I][r[Q]] * E + K[15 + I][r[Q]], d[C + I * 3 + 10] = K[15 + I][r[Q]] * E - K[14 - I][r[Q]], d[C + I * 3 + 19] = l0[2 - I][r[Q]] * E + l0[3 + I][r[Q]], d[C + I * 3 + 11] = l0[3 + I][r[Q]] * E - l0[2 - I][r[Q]], d[C + I * 3 + 20] = l0[8 - I][r[Q]] * E + l0[9 + I][r[Q]];
                }
                S(d, C);
              } else {
                for (var B = i0(18), I = -G / 4; I < 0; I++) {
                  var s, _;
                  s = O[H][I + 27] * l0[I + 9][r[Q]] + O[H][I + 36] * l0[8 - I][r[Q]], _ = O[H][I + 9] * K[I + 9][r[Q]] - O[H][I + 18] * K[8 - I][r[Q]], B[I + 9] = s - _ * M[3 + I + 9], B[I + 18] = s * M[3 + I + 9] + _;
                }
                p(d, C, B);
              }
            }
            if (H != V.SHORT_TYPE && Q != 0)
              for (var I = 7; I >= 0; --I) {
                var a, h;
                a = d[C + I] * s0[20 + I] + d[C + -1 - I] * f0[28 + I], h = d[C + I] * f0[28 + I] - d[C + -1 - I] * s0[20 + I], d[C + -1 - I] = a, d[C + I] = h;
              }
          }
        }
        if (l = e, N = 286, A.mode_gr == 1)
          for (var F = 0; F < 18; F++)
            x.arraycopy(A.sb_sample[T][1][F], 0, A.sb_sample[T][0][F], 0, 32);
      }
    };
  }
  r0.exports = W;
});
v0.register("hvy40", function(r0, _0) {
  var i = v0("51XxS");
  function x() {
    this.thm = new i(), this.en = new i();
  }
  r0.exports = x;
});
v0.register("51XxS", function(r0, _0) {
  var i = v0("cPNKB"), x = v0("3YDN3"), U = x.System;
  x.VbrMode, x.Float, x.ShortBlock, x.Util, x.Arrays, x.new_array_n, x.new_byte, x.new_double;
  var Z = x.new_float, i0 = x.new_float_n;
  x.new_int, x.new_int_n, x.assert;
  function V() {
    this.l = Z(i.SBMAX_l), this.s = i0([
      i.SBMAX_s,
      3
    ]);
    var W = this;
    this.assign = function(g) {
      U.arraycopy(g.l, 0, W.l, 0, i.SBMAX_l);
      for (var m = 0; m < i.SBMAX_s; m++)
        for (var G = 0; G < 3; G++)
          W.s[m][G] = g.s[m][G];
    };
  }
  r0.exports = V;
});
v0.register("jL6I1", function(r0, _0) {
  function i(x) {
    var U = x;
    this.ordinal = function() {
      return U;
    };
  }
  i.STEREO = new i(0), i.JOINT_STEREO = new i(1), i.DUAL_CHANNEL = new i(2), i.MONO = new i(3), i.NOT_SET = new i(4), r0.exports = i;
});
v0.register("5HJeD", function(r0, _0) {
  var i = v0("jL6I1");
  function x() {
    this.class_id = 0, this.num_samples = 0, this.num_channels = 0, this.in_samplerate = 0, this.out_samplerate = 0, this.scale = 0, this.scale_left = 0, this.scale_right = 0, this.analysis = !1, this.bWriteVbrTag = !1, this.decode_only = !1, this.quality = 0, this.mode = i.STEREO, this.force_ms = !1, this.free_format = !1, this.findReplayGain = !1, this.decode_on_the_fly = !1, this.write_id3tag_automatic = !1, this.brate = 0, this.compression_ratio = 0, this.copyright = 0, this.original = 0, this.extension = 0, this.emphasis = 0, this.error_protection = 0, this.strict_ISO = !1, this.disable_reservoir = !1, this.quant_comp = 0, this.quant_comp_short = 0, this.experimentalY = !1, this.experimentalZ = 0, this.exp_nspsytune = 0, this.preset = 0, this.VBR = null, this.VBR_q_frac = 0, this.VBR_q = 0, this.VBR_mean_bitrate_kbps = 0, this.VBR_min_bitrate_kbps = 0, this.VBR_max_bitrate_kbps = 0, this.VBR_hard_min = 0, this.lowpassfreq = 0, this.highpassfreq = 0, this.lowpasswidth = 0, this.highpasswidth = 0, this.maskingadjust = 0, this.maskingadjust_short = 0, this.ATHonly = !1, this.ATHshort = !1, this.noATH = !1, this.ATHtype = 0, this.ATHcurve = 0, this.ATHlower = 0, this.athaa_type = 0, this.athaa_loudapprox = 0, this.athaa_sensitivity = 0, this.short_blocks = null, this.useTemporal = !1, this.interChRatio = 0, this.msfix = 0, this.tune = !1, this.tune_value_a = 0, this.version = 0, this.encoder_delay = 0, this.encoder_padding = 0, this.framesize = 0, this.frameNum = 0, this.lame_allocated_gfp = 0, this.internal_flags = null;
  }
  r0.exports = x;
});
v0.register("4SDnr", function(r0, _0) {
  var i = v0("3YDN3");
  i.System, i.VbrMode, i.Float, i.ShortBlock, i.Util, i.Arrays, i.new_array_n;
  var x = i.new_byte, U = i.new_double, Z = i.new_float, i0 = i.new_float_n, V = i.new_int, W = i.new_int_n;
  i.assert;
  var g = v0("eWXBy"), m = v0("7imnH"), G = v0("7yzUB"), O = v0("jTmCQ"), M = v0("51XxS"), q = v0("cPNKB"), s0 = v0("arIi9");
  f0.MFSIZE = 3456 + q.ENCDELAY - q.MDCTDELAY, f0.MAX_HEADER_BUF = 256, f0.MAX_BITS_PER_CHANNEL = 4095, f0.MAX_BITS_PER_GRANULE = 7680, f0.BPC = 320;
  function f0() {
    var r = 40;
    this.Class_ID = 0, this.lame_encode_frame_init = 0, this.iteration_init_init = 0, this.fill_buffer_resample_init = 0, this.mfbuf = i0([
      2,
      f0.MFSIZE
    ]), this.mode_gr = 0, this.channels_in = 0, this.channels_out = 0, this.resample_ratio = 0, this.mf_samples_to_encode = 0, this.mf_size = 0, this.VBR_min_bitrate = 0, this.VBR_max_bitrate = 0, this.bitrate_index = 0, this.samplerate_index = 0, this.mode_ext = 0, this.lowpass1 = 0, this.lowpass2 = 0, this.highpass1 = 0, this.highpass2 = 0, this.noise_shaping = 0, this.noise_shaping_amp = 0, this.substep_shaping = 0, this.psymodel = 0, this.noise_shaping_stop = 0, this.subblock_gain = 0, this.use_best_huffman = 0, this.full_outer_loop = 0, this.l3_side = new g(), this.ms_ratio = Z(2), this.padding = 0, this.frac_SpF = 0, this.slot_lag = 0, this.tag_spec = null, this.nMusicCRC = 0, this.OldValue = V(2), this.CurrentStep = V(2), this.masking_lower = 0, this.bv_scf = V(576), this.pseudohalf = V(s0.SFBMAX), this.sfb21_extra = !1, this.inbuf_old = new Array(2), this.blackfilt = new Array(2 * f0.BPC + 1), this.itime = U(2), this.sideinfo_len = 0, this.sb_sample = i0([
      2,
      2,
      18,
      q.SBLIMIT
    ]), this.amp_filter = Z(32);
    function n() {
      this.write_timing = 0, this.ptr = 0, this.buf = x(r);
    }
    this.header = new Array(f0.MAX_HEADER_BUF), this.h_ptr = 0, this.w_ptr = 0, this.ancillary_flag = 0, this.ResvSize = 0, this.ResvMax = 0, this.scalefac_band = new m(), this.minval_l = Z(q.CBANDS), this.minval_s = Z(q.CBANDS), this.nb_1 = i0([
      4,
      q.CBANDS
    ]), this.nb_2 = i0([
      4,
      q.CBANDS
    ]), this.nb_s1 = i0([
      4,
      q.CBANDS
    ]), this.nb_s2 = i0([
      4,
      q.CBANDS
    ]), this.s3_ss = null, this.s3_ll = null, this.decay = 0, this.thm = new Array(4), this.en = new Array(4), this.tot_ener = Z(4), this.loudness_sq = i0([
      2,
      2
    ]), this.loudness_sq_save = Z(2), this.mld_l = Z(q.SBMAX_l), this.mld_s = Z(q.SBMAX_s), this.bm_l = V(q.SBMAX_l), this.bo_l = V(q.SBMAX_l), this.bm_s = V(q.SBMAX_s), this.bo_s = V(q.SBMAX_s), this.npart_l = 0, this.npart_s = 0, this.s3ind = W([
      q.CBANDS,
      2
    ]), this.s3ind_s = W([
      q.CBANDS,
      2
    ]), this.numlines_s = V(q.CBANDS), this.numlines_l = V(q.CBANDS), this.rnumlines_l = Z(q.CBANDS), this.mld_cb_l = Z(q.CBANDS), this.mld_cb_s = Z(q.CBANDS), this.numlines_s_num1 = 0, this.numlines_l_num1 = 0, this.pe = Z(4), this.ms_ratio_s_old = 0, this.ms_ratio_l_old = 0, this.ms_ener_ratio_old = 0, this.blocktype_old = V(2), this.nsPsy = new G(), this.VBR_seek_table = new O(), this.ATH = null, this.PSY = null, this.nogap_total = 0, this.nogap_current = 0, this.decode_on_the_fly = !0, this.findReplayGain = !0, this.findPeakSample = !0, this.PeakSample = 0, this.RadioGain = 0, this.AudiophileGain = 0, this.rgdata = null, this.noclipGainChange = 0, this.noclipScale = 0, this.bitrate_stereoMode_Hist = W([
      16,
      5
    ]), this.bitrate_blockType_Hist = W([
      16,
      6
    ]), this.pinfo = null, this.hip = null, this.in_buffer_nsamples = 0, this.in_buffer_0 = null, this.in_buffer_1 = null, this.iteration_loop = null;
    for (var S = 0; S < this.en.length; S++)
      this.en[S] = new M();
    for (var S = 0; S < this.thm.length; S++)
      this.thm[S] = new M();
    for (var S = 0; S < this.header.length; S++)
      this.header[S] = new n();
  }
  r0.exports = f0;
});
v0.register("eWXBy", function(r0, _0) {
  var i = v0("3YDN3");
  i.System, i.VbrMode, i.Float, i.ShortBlock, i.Util, i.Arrays, i.new_array_n, i.new_byte, i.new_double, i.new_float, i.new_float_n;
  var x = i.new_int;
  i.new_int_n, i.assert;
  var U = v0("7weBo");
  function Z() {
    this.tt = [
      [
        null,
        null
      ],
      [
        null,
        null
      ]
    ], this.main_data_begin = 0, this.private_bits = 0, this.resvDrain_pre = 0, this.resvDrain_post = 0, this.scfsi = [
      x(4),
      x(4)
    ];
    for (var i0 = 0; i0 < 2; i0++)
      for (var V = 0; V < 2; V++)
        this.tt[i0][V] = new U();
  }
  r0.exports = Z;
});
v0.register("7weBo", function(r0, _0) {
  var i = v0("3YDN3");
  i.System, i.VbrMode, i.Float, i.ShortBlock, i.Util, i.Arrays, i.new_array_n, i.new_byte, i.new_double;
  var x = i.new_float;
  i.new_float_n;
  var U = i.new_int;
  i.new_int_n, i.assert;
  var Z = v0("arIi9");
  function i0() {
    this.xr = x(576), this.l3_enc = U(576), this.scalefac = U(Z.SFBMAX), this.xrpow_max = 0, this.part2_3_length = 0, this.big_values = 0, this.count1 = 0, this.global_gain = 0, this.scalefac_compress = 0, this.block_type = 0, this.mixed_block_flag = 0, this.table_select = U(3), this.subblock_gain = U(4), this.region0_count = 0, this.region1_count = 0, this.preflag = 0, this.scalefac_scale = 0, this.count1table_select = 0, this.part2_length = 0, this.sfb_lmax = 0, this.sfb_smin = 0, this.psy_lmax = 0, this.sfbmax = 0, this.psymax = 0, this.sfbdivide = 0, this.width = U(Z.SFBMAX), this.window = U(Z.SFBMAX), this.count1bits = 0, this.sfb_partition_table = null, this.slen = U(4), this.max_nonzero_coeff = 0;
    var V = this;
    function W(m) {
      return new Int32Array(m);
    }
    function g(m) {
      return new Float32Array(m);
    }
    this.assign = function(m) {
      V.xr = g(m.xr), V.l3_enc = W(m.l3_enc), V.scalefac = W(m.scalefac), V.xrpow_max = m.xrpow_max, V.part2_3_length = m.part2_3_length, V.big_values = m.big_values, V.count1 = m.count1, V.global_gain = m.global_gain, V.scalefac_compress = m.scalefac_compress, V.block_type = m.block_type, V.mixed_block_flag = m.mixed_block_flag, V.table_select = W(m.table_select), V.subblock_gain = W(m.subblock_gain), V.region0_count = m.region0_count, V.region1_count = m.region1_count, V.preflag = m.preflag, V.scalefac_scale = m.scalefac_scale, V.count1table_select = m.count1table_select, V.part2_length = m.part2_length, V.sfb_lmax = m.sfb_lmax, V.sfb_smin = m.sfb_smin, V.psy_lmax = m.psy_lmax, V.sfbmax = m.sfbmax, V.psymax = m.psymax, V.sfbdivide = m.sfbdivide, V.width = W(m.width), V.window = W(m.window), V.count1bits = m.count1bits, V.sfb_partition_table = m.sfb_partition_table.slice(0), V.slen = W(m.slen), V.max_nonzero_coeff = m.max_nonzero_coeff;
    };
  }
  r0.exports = i0;
});
v0.register("arIi9", function(r0, _0) {
  var i = v0("cPNKB"), x = {};
  x.SFBMAX = i.SBMAX_s * 3, r0.exports = x;
});
v0.register("7imnH", function(r0, _0) {
  var i = v0("3YDN3"), x = i.System;
  i.VbrMode, i.Float, i.ShortBlock, i.Util, i.Arrays, i.new_array_n, i.new_byte, i.new_double, i.new_float, i.new_float_n;
  var U = i.new_int;
  i.new_int_n, i.assert;
  var Z = v0("cPNKB");
  function i0(V, W, g, m) {
    this.l = U(1 + Z.SBMAX_l), this.s = U(1 + Z.SBMAX_s), this.psfb21 = U(1 + Z.PSFB21), this.psfb12 = U(1 + Z.PSFB12);
    var G = this.l, O = this.s;
    arguments.length == 4 && (this.arrL = arguments[0], this.arrS = arguments[1], this.arr21 = arguments[2], this.arr12 = arguments[3], x.arraycopy(this.arrL, 0, G, 0, Math.min(this.arrL.length, this.l.length)), x.arraycopy(this.arrS, 0, O, 0, Math.min(this.arrS.length, this.s.length)), x.arraycopy(this.arr21, 0, this.psfb21, 0, Math.min(this.arr21.length, this.psfb21.length)), x.arraycopy(this.arr12, 0, this.psfb12, 0, Math.min(this.arr12.length, this.psfb12.length)));
  }
  r0.exports = i0;
});
v0.register("7yzUB", function(r0, _0) {
  var i = v0("3YDN3");
  i.System, i.VbrMode, i.Float, i.ShortBlock, i.Util, i.Arrays, i.new_array_n, i.new_byte, i.new_double;
  var x = i.new_float, U = i.new_float_n, Z = i.new_int;
  i.new_int_n, i.assert;
  var i0 = v0("cPNKB");
  function V() {
    this.last_en_subshort = U([
      4,
      9
    ]), this.lastAttacks = Z(4), this.pefirbuf = x(19), this.longfact = x(i0.SBMAX_l), this.shortfact = x(i0.SBMAX_s), this.attackthre = 0, this.attackthre_s = 0;
  }
  r0.exports = V;
});
v0.register("jTmCQ", function(r0, _0) {
  function i() {
    this.sum = 0, this.seen = 0, this.want = 0, this.pos = 0, this.size = 0, this.bag = null, this.nVbrNumFrames = 0, this.nBytesWritten = 0, this.TotalFrameSize = 0;
  }
  r0.exports = i;
});
v0.register("cU3Yf", function(r0, _0) {
  var i = v0("3YDN3");
  i.System, i.VbrMode, i.Float, i.ShortBlock, i.Util, i.Arrays, i.new_array_n, i.new_byte, i.new_double;
  var x = i.new_float;
  i.new_float_n, i.new_int, i.new_int_n, i.assert;
  var U = v0("cPNKB");
  function Z() {
    this.useAdjust = 0, this.aaSensitivityP = 0, this.adjust = 0, this.adjustLimit = 0, this.decay = 0, this.floor = 0, this.l = x(U.SBMAX_l), this.s = x(U.SBMAX_s), this.psfb21 = x(U.PSFB21), this.psfb12 = x(U.PSFB12), this.cb_l = x(U.CBANDS), this.cb_s = x(U.CBANDS), this.eql_w = x(U.BLKSIZE / 2);
  }
  r0.exports = Z;
});
v0.register("2qGTD", function(r0, _0) {
  var i = v0("3YDN3");
  i.System, i.VbrMode, i.Float, i.ShortBlock, i.Util, i.Arrays, i.new_array_n, i.new_byte, i.new_double;
  var x = i.new_float;
  i.new_float_n;
  var U = i.new_int;
  i.new_int_n, i.assert;
  var Z = v0("b8dhq");
  function i0() {
    this.linprebuf = x(Z.MAX_ORDER * 2), this.linpre = 0, this.lstepbuf = x(Z.MAX_SAMPLES_PER_WINDOW + Z.MAX_ORDER), this.lstep = 0, this.loutbuf = x(Z.MAX_SAMPLES_PER_WINDOW + Z.MAX_ORDER), this.lout = 0, this.rinprebuf = x(Z.MAX_ORDER * 2), this.rinpre = 0, this.rstepbuf = x(Z.MAX_SAMPLES_PER_WINDOW + Z.MAX_ORDER), this.rstep = 0, this.routbuf = x(Z.MAX_SAMPLES_PER_WINDOW + Z.MAX_ORDER), this.rout = 0, this.sampleWindow = 0, this.totsamp = 0, this.lsum = 0, this.rsum = 0, this.freqindex = 0, this.first = 0, this.A = U(0 | Z.STEPS_per_dB * Z.MAX_dB), this.B = U(0 | Z.STEPS_per_dB * Z.MAX_dB);
  }
  r0.exports = i0;
});
v0.register("b8dhq", function(r0, _0) {
  var i = v0("3YDN3"), x = i.System;
  i.VbrMode, i.Float, i.ShortBlock, i.Util;
  var U = i.Arrays;
  i.new_array_n, i.new_byte, i.new_double, i.new_float, i.new_float_n, i.new_int, i.new_int_n, i.assert, Z.STEPS_per_dB = 100, Z.MAX_dB = 120, Z.GAIN_NOT_ENOUGH_SAMPLES = -24601, Z.GAIN_ANALYSIS_ERROR = 0, Z.GAIN_ANALYSIS_OK = 1, Z.INIT_GAIN_ANALYSIS_ERROR = 0, Z.INIT_GAIN_ANALYSIS_OK = 1, Z.YULE_ORDER = 10, Z.MAX_ORDER = Z.YULE_ORDER, Z.MAX_SAMP_FREQ = 48e3, Z.RMS_WINDOW_TIME_NUMERATOR = 1, Z.RMS_WINDOW_TIME_DENOMINATOR = 20, Z.MAX_SAMPLES_PER_WINDOW = Z.MAX_SAMP_FREQ * Z.RMS_WINDOW_TIME_NUMERATOR / Z.RMS_WINDOW_TIME_DENOMINATOR + 1;
  function Z() {
    var i0 = 64.82;
    Z.YULE_ORDER;
    var V = 0.95;
    Z.MAX_SAMP_FREQ;
    var W = Z.RMS_WINDOW_TIME_NUMERATOR, g = Z.RMS_WINDOW_TIME_DENOMINATOR;
    Z.MAX_SAMPLES_PER_WINDOW;
    var m = [
      [
        0.038575994352,
        -3.84664617118067,
        -0.02160367184185,
        7.81501653005538,
        -0.00123395316851,
        -11.34170355132042,
        -9291677959e-14,
        13.05504219327545,
        -0.01655260341619,
        -12.28759895145294,
        0.02161526843274,
        9.4829380631979,
        -0.02074045215285,
        -5.87257861775999,
        0.00594298065125,
        2.75465861874613,
        0.00306428023191,
        -0.86984376593551,
        12025322027e-14,
        0.13919314567432,
        0.00288463683916
      ],
      [
        0.0541865640643,
        -3.47845948550071,
        -0.02911007808948,
        6.36317777566148,
        -0.00848709379851,
        -8.54751527471874,
        -0.00851165645469,
        9.4769360780128,
        -0.00834990904936,
        -8.81498681370155,
        0.02245293253339,
        6.85401540936998,
        -0.02596338512915,
        -4.39470996079559,
        0.01624864962975,
        2.19611684890774,
        -0.00240879051584,
        -0.75104302451432,
        0.00674613682247,
        0.13149317958808,
        -0.00187763777362
      ],
      [
        0.15457299681924,
        -2.37898834973084,
        -0.09331049056315,
        2.84868151156327,
        -0.06247880153653,
        -2.64577170229825,
        0.02163541888798,
        2.23697657451713,
        -0.05588393329856,
        -1.67148153367602,
        0.04781476674921,
        1.00595954808547,
        0.00222312597743,
        -0.45953458054983,
        0.03174092540049,
        0.16378164858596,
        -0.01390589421898,
        -0.05032077717131,
        0.00651420667831,
        0.0234789740702,
        -0.00881362733839
      ],
      [
        0.30296907319327,
        -1.61273165137247,
        -0.22613988682123,
        1.0797749225997,
        -0.08587323730772,
        -0.2565625775407,
        0.03282930172664,
        -0.1627671912044,
        -0.00915702933434,
        -0.22638893773906,
        -0.02364141202522,
        0.39120800788284,
        -0.00584456039913,
        -0.22138138954925,
        0.06276101321749,
        0.04500235387352,
        -828086748e-14,
        0.02005851806501,
        0.00205861885564,
        0.00302439095741,
        -0.02950134983287
      ],
      [
        0.33642304856132,
        -1.49858979367799,
        -0.2557224142557,
        0.87350271418188,
        -0.11828570177555,
        0.12205022308084,
        0.11921148675203,
        -0.80774944671438,
        -0.07834489609479,
        0.47854794562326,
        -0.0046997791438,
        -0.12453458140019,
        -0.0058950022444,
        -0.04067510197014,
        0.05724228140351,
        0.08333755284107,
        0.00832043980773,
        -0.04237348025746,
        -0.0163538138454,
        0.02977207319925,
        -0.0176017656815
      ],
      [
        0.4491525660845,
        -0.62820619233671,
        -0.14351757464547,
        0.29661783706366,
        -0.22784394429749,
        -0.372563729424,
        -0.01419140100551,
        0.00213767857124,
        0.04078262797139,
        -0.42029820170918,
        -0.12398163381748,
        0.22199650564824,
        0.04097565135648,
        0.00613424350682,
        0.10478503600251,
        0.06747620744683,
        -0.01863887810927,
        0.05784820375801,
        -0.03193428438915,
        0.03222754072173,
        0.00541907748707
      ],
      [
        0.56619470757641,
        -1.04800335126349,
        -0.75464456939302,
        0.29156311971249,
        0.1624213774223,
        -0.26806001042947,
        0.16744243493672,
        0.00819999645858,
        -0.18901604199609,
        0.45054734505008,
        0.3093178284183,
        -0.33032403314006,
        -0.27562961986224,
        0.0673936833311,
        0.00647310677246,
        -0.04784254229033,
        0.08647503780351,
        0.01639907836189,
        -0.0378898455484,
        0.01807364323573,
        -0.00588215443421
      ],
      [
        0.58100494960553,
        -0.51035327095184,
        -0.53174909058578,
        -0.31863563325245,
        -0.14289799034253,
        -0.20256413484477,
        0.17520704835522,
        0.1472815413433,
        0.02377945217615,
        0.38952639978999,
        0.15558449135573,
        -0.23313271880868,
        -0.25344790059353,
        -0.05246019024463,
        0.01628462406333,
        -0.02505961724053,
        0.06920467763959,
        0.02442357316099,
        -0.03721611395801,
        0.01818801111503,
        -0.00749618797172
      ],
      [
        0.53648789255105,
        -0.2504987195602,
        -0.42163034350696,
        -0.43193942311114,
        -0.00275953611929,
        -0.03424681017675,
        0.04267842219415,
        -0.04678328784242,
        -0.10214864179676,
        0.26408300200955,
        0.14590772289388,
        0.15113130533216,
        -0.02459864859345,
        -0.17556493366449,
        -0.11202315195388,
        -0.18823009262115,
        -0.04060034127,
        0.05477720428674,
        0.0478866554818,
        0.0470440968812,
        -0.02217936801134
      ]
    ], G = [
      [
        0.98621192462708,
        -1.97223372919527,
        -1.97242384925416,
        0.97261396931306,
        0.98621192462708
      ],
      [
        0.98500175787242,
        -1.96977855582618,
        -1.97000351574484,
        0.9702284756635,
        0.98500175787242
      ],
      [
        0.97938932735214,
        -1.95835380975398,
        -1.95877865470428,
        0.95920349965459,
        0.97938932735214
      ],
      [
        0.97531843204928,
        -1.95002759149878,
        -1.95063686409857,
        0.95124613669835,
        0.97531843204928
      ],
      [
        0.97316523498161,
        -1.94561023566527,
        -1.94633046996323,
        0.94705070426118,
        0.97316523498161
      ],
      [
        0.96454515552826,
        -1.92783286977036,
        -1.92909031105652,
        0.93034775234268,
        0.96454515552826
      ],
      [
        0.96009142950541,
        -1.91858953033784,
        -1.92018285901082,
        0.92177618768381,
        0.96009142950541
      ],
      [
        0.95856916599601,
        -1.9154210807478,
        -1.91713833199203,
        0.91885558323625,
        0.95856916599601
      ],
      [
        0.94597685600279,
        -1.88903307939452,
        -1.89195371200558,
        0.89487434461664,
        0.94597685600279
      ]
    ];
    function O(r, n, S, p, A, b) {
      for (; A-- != 0; )
        S[p] = 1e-10 + r[n + 0] * b[0] - S[p - 1] * b[1] + r[n - 1] * b[2] - S[p - 2] * b[3] + r[n - 2] * b[4] - S[p - 3] * b[5] + r[n - 3] * b[6] - S[p - 4] * b[7] + r[n - 4] * b[8] - S[p - 5] * b[9] + r[n - 5] * b[10] - S[p - 6] * b[11] + r[n - 6] * b[12] - S[p - 7] * b[13] + r[n - 7] * b[14] - S[p - 8] * b[15] + r[n - 8] * b[16] - S[p - 9] * b[17] + r[n - 9] * b[18] - S[p - 10] * b[19] + r[n - 10] * b[20], ++p, ++n;
    }
    function M(r, n, S, p, A, b) {
      for (; A-- != 0; )
        S[p] = r[n + 0] * b[0] - S[p - 1] * b[1] + r[n - 1] * b[2] - S[p - 2] * b[3] + r[n - 2] * b[4], ++p, ++n;
    }
    function q(r, n) {
      for (var S = 0; S < MAX_ORDER; S++)
        r.linprebuf[S] = r.lstepbuf[S] = r.loutbuf[S] = r.rinprebuf[S] = r.rstepbuf[S] = r.routbuf[S] = 0;
      switch (0 | n) {
        case 48e3:
          r.reqindex = 0;
          break;
        case 44100:
          r.reqindex = 1;
          break;
        case 32e3:
          r.reqindex = 2;
          break;
        case 24e3:
          r.reqindex = 3;
          break;
        case 22050:
          r.reqindex = 4;
          break;
        case 16e3:
          r.reqindex = 5;
          break;
        case 12e3:
          r.reqindex = 6;
          break;
        case 11025:
          r.reqindex = 7;
          break;
        case 8e3:
          r.reqindex = 8;
          break;
        default:
          return INIT_GAIN_ANALYSIS_ERROR;
      }
      return r.sampleWindow = 0 | (n * W + g - 1) / g, r.lsum = 0, r.rsum = 0, r.totsamp = 0, U.ill(r.A, 0), INIT_GAIN_ANALYSIS_OK;
    }
    this.InitGainAnalysis = function(r, n) {
      return q(r, n) != INIT_GAIN_ANALYSIS_OK ? INIT_GAIN_ANALYSIS_ERROR : (r.linpre = MAX_ORDER, r.rinpre = MAX_ORDER, r.lstep = MAX_ORDER, r.rstep = MAX_ORDER, r.lout = MAX_ORDER, r.rout = MAX_ORDER, U.fill(r.B, 0), INIT_GAIN_ANALYSIS_OK);
    };
    function s0(r) {
      return r * r;
    }
    this.AnalyzeSamples = function(r, n, S, p, A, b, e) {
      var l, N, T, y, Q, f, d;
      if (b == 0)
        return GAIN_ANALYSIS_OK;
      switch (d = 0, Q = b, e) {
        case 1:
          p = n, A = S;
          break;
        case 2:
          break;
        default:
          return GAIN_ANALYSIS_ERROR;
      }
      for (b < MAX_ORDER ? (x.arraycopy(n, S, r.linprebuf, MAX_ORDER, b), x.arraycopy(p, A, r.rinprebuf, MAX_ORDER, b)) : (x.arraycopy(n, S, r.linprebuf, MAX_ORDER, MAX_ORDER), x.arraycopy(p, A, r.rinprebuf, MAX_ORDER, MAX_ORDER)); Q > 0; ) {
        f = Q > r.sampleWindow - r.totsamp ? r.sampleWindow - r.totsamp : Q, d < MAX_ORDER ? (l = r.linpre + d, N = r.linprebuf, T = r.rinpre + d, y = r.rinprebuf, f > MAX_ORDER - d && (f = MAX_ORDER - d)) : (l = S + d, N = n, T = A + d, y = p), O(N, l, r.lstepbuf, r.lstep + r.totsamp, f, m[r.reqindex]), O(y, T, r.rstepbuf, r.rstep + r.totsamp, f, m[r.reqindex]), M(r.lstepbuf, r.lstep + r.totsamp, r.loutbuf, r.lout + r.totsamp, f, G[r.reqindex]), M(r.rstepbuf, r.rstep + r.totsamp, r.routbuf, r.rout + r.totsamp, f, G[r.reqindex]), l = r.lout + r.totsamp, N = r.loutbuf, T = r.rout + r.totsamp, y = r.routbuf;
        for (var C = f % 8; C-- != 0; )
          r.lsum += s0(N[l++]), r.rsum += s0(y[T++]);
        for (C = f / 8; C-- != 0; )
          r.lsum += s0(N[l + 0]) + s0(N[l + 1]) + s0(N[l + 2]) + s0(N[l + 3]) + s0(N[l + 4]) + s0(N[l + 5]) + s0(N[l + 6]) + s0(N[l + 7]), l += 8, r.rsum += s0(y[T + 0]) + s0(y[T + 1]) + s0(y[T + 2]) + s0(y[T + 3]) + s0(y[T + 4]) + s0(y[T + 5]) + s0(y[T + 6]) + s0(y[T + 7]), T += 8;
        if (Q -= f, d += f, r.totsamp += f, r.totsamp == r.sampleWindow) {
          var v = Z.STEPS_per_dB * 10 * Math.log10((r.lsum + r.rsum) / r.totsamp * 0.5 + 1e-37), k = v <= 0 ? 0 : 0 | v;
          k >= r.A.length && (k = r.A.length - 1), r.A[k]++, r.lsum = r.rsum = 0, x.arraycopy(r.loutbuf, r.totsamp, r.loutbuf, 0, MAX_ORDER), x.arraycopy(r.routbuf, r.totsamp, r.routbuf, 0, MAX_ORDER), x.arraycopy(r.lstepbuf, r.totsamp, r.lstepbuf, 0, MAX_ORDER), x.arraycopy(r.rstepbuf, r.totsamp, r.rstepbuf, 0, MAX_ORDER), r.totsamp = 0;
        }
        if (r.totsamp > r.sampleWindow)
          return GAIN_ANALYSIS_ERROR;
      }
      return b < MAX_ORDER ? (x.arraycopy(r.linprebuf, b, r.linprebuf, 0, MAX_ORDER - b), x.arraycopy(r.rinprebuf, b, r.rinprebuf, 0, MAX_ORDER - b), x.arraycopy(n, S, r.linprebuf, MAX_ORDER - b, b), x.arraycopy(p, A, r.rinprebuf, MAX_ORDER - b, b)) : (x.arraycopy(n, S + b - MAX_ORDER, r.linprebuf, 0, MAX_ORDER), x.arraycopy(p, A + b - MAX_ORDER, r.rinprebuf, 0, MAX_ORDER)), GAIN_ANALYSIS_OK;
    };
    function f0(r, n) {
      var S, p = 0;
      for (S = 0; S < n; S++)
        p += r[S];
      if (p == 0)
        return GAIN_NOT_ENOUGH_SAMPLES;
      var A = 0 | Math.ceil(p * (1 - V));
      for (S = n; S-- > 0 && !((A -= r[S]) <= 0); )
        ;
      return i0 - S / Z.STEPS_per_dB;
    }
    this.GetTitleGain = function(r) {
      for (var n = f0(r.A, r.A.length), S = 0; S < r.A.length; S++)
        r.B[S] += r.A[S], r.A[S] = 0;
      for (var S = 0; S < MAX_ORDER; S++)
        r.linprebuf[S] = r.lstepbuf[S] = r.loutbuf[S] = r.rinprebuf[S] = r.rstepbuf[S] = r.routbuf[S] = 0;
      return r.totsamp = 0, r.lsum = r.rsum = 0, n;
    };
  }
  r0.exports = Z;
});
v0.register("e32wu", function(r0, _0) {
  var i = v0("3YDN3");
  i.System, i.VbrMode, i.Float, i.ShortBlock, i.Util, i.Arrays, i.new_array_n, i.new_byte, i.new_double;
  var x = i.new_float;
  i.new_float_n;
  var U = i.new_int;
  i.new_int_n;
  var Z = i.assert, i0 = v0("lL4Le"), V = v0("cPNKB"), W = v0("arIi9"), g = v0("4SDnr");
  function m(G) {
    var O = G;
    this.quantize = O, this.iteration_loop = function(M, q, s0, f0) {
      var r = M.internal_flags, n = x(W.SFBMAX), S = x(576), p = U(2), A = 0, b, e = r.l3_side, l = new i0(A);
      this.quantize.rv.ResvFrameBegin(M, l), A = l.bits;
      for (var N = 0; N < r.mode_gr; N++) {
        b = this.quantize.qupvt.on_pe(M, q, p, A, N, N), r.mode_ext == V.MPG_MD_MS_LR && (this.quantize.ms_convert(r.l3_side, N), this.quantize.qupvt.reduce_side(p, s0[N], A, b));
        for (var T = 0; T < r.channels_out; T++) {
          var y, Q, f = e.tt[N][T];
          f.block_type != V.SHORT_TYPE ? (y = 0, Q = r.PSY.mask_adjust - y) : (y = 0, Q = r.PSY.mask_adjust_short - y), r.masking_lower = Math.pow(10, Q * 0.1), this.quantize.init_outer_loop(r, f), this.quantize.init_xrpow(r, f, S) && (this.quantize.qupvt.calc_xmin(M, f0[N][T], f, n), this.quantize.outer_loop(M, f, n, S, T, p[T])), this.quantize.iteration_finish_one(r, N, T), Z(f.part2_3_length <= g.MAX_BITS_PER_CHANNEL), Z(f.part2_3_length <= p[T]);
        }
      }
      this.quantize.rv.ResvFrameEnd(r, A);
    };
  }
  r0.exports = m;
});
v0.register("lL4Le", function(r0, _0) {
  function i(x) {
    this.bits = x;
  }
  r0.exports = i;
});
v0.register("ctaQC", function(r0, _0) {
  var i = v0("3YDN3"), x = i.System;
  i.VbrMode, i.Float, i.ShortBlock, i.Util;
  var U = i.Arrays;
  i.new_array_n;
  var Z = i.new_byte;
  i.new_double, i.new_float;
  var i0 = i.new_float_n, V = i.new_int;
  i.new_int_n;
  var W = i.assert, g = v0("65Sx2"), m = v0("dQDcS"), G = v0("cPNKB"), O = v0("4SDnr");
  M.EQ = function(q, s0) {
    return Math.abs(q) > Math.abs(s0) ? Math.abs(q - s0) <= Math.abs(q) * 1e-6 : Math.abs(q - s0) <= Math.abs(s0) * 1e-6;
  }, M.NEQ = function(q, s0) {
    return !M.EQ(q, s0);
  };
  function M() {
    var q = v0("kk1yk"), s0 = this, f0 = 32773, r = 32, n = null, S = null, p = null, A = null;
    this.setModules = function(s, _, a, h) {
      n = s, S = _, p = a, A = h;
    };
    var b = null, e = 0, l = 0, N = 0;
    this.getframebits = function(s) {
      var _ = s.internal_flags, a;
      _.bitrate_index != 0 ? a = m.bitrate_table[s.version][_.bitrate_index] : a = s.brate, W(8 <= a && a <= 640);
      var h = 0 | (s.version + 1) * 72e3 * a / s.out_samplerate + _.padding;
      return 8 * h;
    };
    function T(s) {
      x.arraycopy(s.header[s.w_ptr].buf, 0, b, l, s.sideinfo_len), l += s.sideinfo_len, e += s.sideinfo_len * 8, s.w_ptr = s.w_ptr + 1 & O.MAX_HEADER_BUF - 1;
    }
    function y(s, _, a) {
      for (W(a < r - 2); a > 0; ) {
        var h;
        N == 0 && (N = 8, l++, W(l < q.LAME_MAXMP3BUFFER), W(s.header[s.w_ptr].write_timing >= e), s.header[s.w_ptr].write_timing == e && T(s), b[l] = 0), h = Math.min(a, N), a -= h, N -= h, W(a < r), W(N < r), b[l] |= _ >> a << N, e += h;
      }
    }
    function Q(s, _, a) {
      for (W(a < r - 2); a > 0; ) {
        var h;
        N == 0 && (N = 8, l++, W(l < q.LAME_MAXMP3BUFFER), b[l] = 0), h = Math.min(a, N), a -= h, N -= h, W(a < r), W(N < r), b[l] |= _ >> a << N, e += h;
      }
    }
    function f(s, _) {
      var a = s.internal_flags, h;
      if (W(_ >= 0), _ >= 8 && (y(a, 76, 8), _ -= 8), _ >= 8 && (y(a, 65, 8), _ -= 8), _ >= 8 && (y(a, 77, 8), _ -= 8), _ >= 8 && (y(a, 69, 8), _ -= 8), _ >= 32) {
        var F = p.getLameShortVersion();
        if (_ >= 32)
          for (h = 0; h < F.length && _ >= 8; ++h)
            _ -= 8, y(a, F.charAt(h), 8);
      }
      for (; _ >= 1; _ -= 1)
        y(a, a.ancillary_flag, 1), a.ancillary_flag ^= s.disable_reservoir ? 0 : 1;
      W(_ == 0);
    }
    function d(s, _, a) {
      for (var h = s.header[s.h_ptr].ptr; a > 0; ) {
        var F = Math.min(a, 8 - (h & 7));
        a -= F, W(a < r), s.header[s.h_ptr].buf[h >> 3] |= _ >> a << 8 - (h & 7) - F, h += F;
      }
      s.header[s.h_ptr].ptr = h;
    }
    function C(s, _) {
      s <<= 8;
      for (var a = 0; a < 8; a++)
        s <<= 1, _ <<= 1, (_ ^ s) & 65536 && (_ ^= f0);
      return _;
    }
    this.CRC_writeheader = function(s, _) {
      var a = 65535;
      a = C(_[2] & 255, a), a = C(_[3] & 255, a);
      for (var h = 6; h < s.sideinfo_len; h++)
        a = C(_[h] & 255, a);
      _[4] = byte(a >> 8), _[5] = byte(a & 255);
    };
    function v(s, _) {
      var a = s.internal_flags, h, F, J;
      if (h = a.l3_side, a.header[a.h_ptr].ptr = 0, U.fill(a.header[a.h_ptr].buf, 0, a.sideinfo_len, 0), s.out_samplerate < 16e3 ? d(a, 4094, 12) : d(a, 4095, 12), d(a, s.version, 1), d(a, 1, 2), d(a, s.error_protection ? 0 : 1, 1), d(a, a.bitrate_index, 4), d(a, a.samplerate_index, 2), d(a, a.padding, 1), d(a, s.extension, 1), d(a, s.mode.ordinal(), 2), d(a, a.mode_ext, 2), d(a, s.copyright, 1), d(a, s.original, 1), d(a, s.emphasis, 2), s.error_protection && d(a, 0, 16), s.version == 1) {
        for (W(h.main_data_begin >= 0), d(a, h.main_data_begin, 9), a.channels_out == 2 ? d(a, h.private_bits, 3) : d(a, h.private_bits, 5), J = 0; J < a.channels_out; J++) {
          var X;
          for (X = 0; X < 4; X++)
            d(a, h.scfsi[J][X], 1);
        }
        for (F = 0; F < 2; F++)
          for (J = 0; J < a.channels_out; J++) {
            var $ = h.tt[F][J];
            d(a, $.part2_3_length + $.part2_length, 12), d(a, $.big_values / 2, 9), d(a, $.global_gain, 8), d(a, $.scalefac_compress, 4), $.block_type != G.NORM_TYPE ? (d(a, 1, 1), d(a, $.block_type, 2), d(a, $.mixed_block_flag, 1), $.table_select[0] == 14 && ($.table_select[0] = 16), d(a, $.table_select[0], 5), $.table_select[1] == 14 && ($.table_select[1] = 16), d(a, $.table_select[1], 5), d(a, $.subblock_gain[0], 3), d(a, $.subblock_gain[1], 3), d(a, $.subblock_gain[2], 3)) : (d(a, 0, 1), $.table_select[0] == 14 && ($.table_select[0] = 16), d(a, $.table_select[0], 5), $.table_select[1] == 14 && ($.table_select[1] = 16), d(a, $.table_select[1], 5), $.table_select[2] == 14 && ($.table_select[2] = 16), d(a, $.table_select[2], 5), W(0 <= $.region0_count && $.region0_count < 16), W(0 <= $.region1_count && $.region1_count < 8), d(a, $.region0_count, 4), d(a, $.region1_count, 3)), d(a, $.preflag, 1), d(a, $.scalefac_scale, 1), d(a, $.count1table_select, 1);
          }
      } else
        for (W(h.main_data_begin >= 0), d(a, h.main_data_begin, 8), d(a, h.private_bits, a.channels_out), F = 0, J = 0; J < a.channels_out; J++) {
          var $ = h.tt[F][J];
          d(a, $.part2_3_length + $.part2_length, 12), d(a, $.big_values / 2, 9), d(a, $.global_gain, 8), d(a, $.scalefac_compress, 9), $.block_type != G.NORM_TYPE ? (d(a, 1, 1), d(a, $.block_type, 2), d(a, $.mixed_block_flag, 1), $.table_select[0] == 14 && ($.table_select[0] = 16), d(a, $.table_select[0], 5), $.table_select[1] == 14 && ($.table_select[1] = 16), d(a, $.table_select[1], 5), d(a, $.subblock_gain[0], 3), d(a, $.subblock_gain[1], 3), d(a, $.subblock_gain[2], 3)) : (d(a, 0, 1), $.table_select[0] == 14 && ($.table_select[0] = 16), d(a, $.table_select[0], 5), $.table_select[1] == 14 && ($.table_select[1] = 16), d(a, $.table_select[1], 5), $.table_select[2] == 14 && ($.table_select[2] = 16), d(a, $.table_select[2], 5), W(0 <= $.region0_count && $.region0_count < 16), W(0 <= $.region1_count && $.region1_count < 8), d(a, $.region0_count, 4), d(a, $.region1_count, 3)), d(a, $.scalefac_scale, 1), d(a, $.count1table_select, 1);
        }
      s.error_protection && CRC_writeheader(a, a.header[a.h_ptr].buf);
      var e0 = a.h_ptr;
      W(a.header[e0].ptr == a.sideinfo_len * 8), a.h_ptr = e0 + 1 & O.MAX_HEADER_BUF - 1, a.header[a.h_ptr].write_timing = a.header[e0].write_timing + _, a.h_ptr == a.w_ptr && x.err.println(`Error: MAX_HEADER_BUF too small in bitstream.c 
`);
    }
    function k(s, _) {
      var a = m.ht[_.count1table_select + 32], h, F = 0, J = _.big_values, X = _.big_values;
      for (W(_.count1table_select < 2), h = (_.count1 - _.big_values) / 4; h > 0; --h) {
        var $ = 0, e0 = 0, o0;
        o0 = _.l3_enc[J + 0], o0 != 0 && (e0 += 8, _.xr[X + 0] < 0 && $++, W(o0 <= 1)), o0 = _.l3_enc[J + 1], o0 != 0 && (e0 += 4, $ *= 2, _.xr[X + 1] < 0 && $++, W(o0 <= 1)), o0 = _.l3_enc[J + 2], o0 != 0 && (e0 += 2, $ *= 2, _.xr[X + 2] < 0 && $++, W(o0 <= 1)), o0 = _.l3_enc[J + 3], o0 != 0 && (e0++, $ *= 2, _.xr[X + 3] < 0 && $++, W(o0 <= 1)), J += 4, X += 4, y(s, $ + a.table[e0], a.hlen[e0]), F += a.hlen[e0];
      }
      return F;
    }
    function I(s, _, a, h, F) {
      var J = m.ht[_], X = 0;
      if (W(_ < 32), _ == 0)
        return X;
      for (var $ = a; $ < h; $ += 2) {
        var e0 = 0, o0 = 0, b0 = J.xlen, $0 = J.xlen, S0 = 0, R0 = F.l3_enc[$], p0 = F.l3_enc[$ + 1];
        if (R0 != 0 && (F.xr[$] < 0 && S0++, e0--), _ > 15) {
          if (R0 > 14) {
            var Y0 = R0 - 15;
            W(Y0 <= J.linmax), S0 |= Y0 << 1, o0 = b0, R0 = 15;
          }
          if (p0 > 14) {
            var J0 = p0 - 15;
            W(J0 <= J.linmax), S0 <<= b0, S0 |= J0, o0 += b0, p0 = 15;
          }
          $0 = 16;
        }
        p0 != 0 && (S0 <<= 1, F.xr[$ + 1] < 0 && S0++, e0--), W((R0 | p0) < 16), R0 = R0 * $0 + p0, o0 -= e0, e0 += J.hlen[R0], W(e0 <= r), W(o0 <= r), y(s, J.table[R0], e0), y(s, S0, o0), X += e0 + o0;
      }
      return X;
    }
    function H(s, _) {
      var a = 3 * s.scalefac_band.s[3];
      a > _.big_values && (a = _.big_values);
      var h = I(s, _.table_select[0], 0, a, _);
      return h += I(s, _.table_select[1], a, _.big_values, _), h;
    }
    function K(s, _) {
      var a, h, F, J;
      a = _.big_values, W(0 <= a && a <= 576);
      var X = _.region0_count + 1;
      return W(0 <= X), W(X < s.scalefac_band.l.length), F = s.scalefac_band.l[X], X += _.region1_count + 1, W(0 <= X), W(X < s.scalefac_band.l.length), J = s.scalefac_band.l[X], F > a && (F = a), J > a && (J = a), h = I(s, _.table_select[0], 0, F, _), h += I(s, _.table_select[1], F, J, _), h += I(s, _.table_select[2], J, a, _), h;
    }
    function l0(s) {
      var _, a, h, F, J = 0, X = s.internal_flags, $ = X.l3_side;
      if (s.version == 1)
        for (_ = 0; _ < 2; _++)
          for (a = 0; a < X.channels_out; a++) {
            var e0 = $.tt[_][a], o0 = g.slen1_tab[e0.scalefac_compress], b0 = g.slen2_tab[e0.scalefac_compress];
            for (F = 0, h = 0; h < e0.sfbdivide; h++)
              e0.scalefac[h] != -1 && (y(X, e0.scalefac[h], o0), F += o0);
            for (; h < e0.sfbmax; h++)
              e0.scalefac[h] != -1 && (y(X, e0.scalefac[h], b0), F += b0);
            W(F == e0.part2_length), e0.block_type == G.SHORT_TYPE ? F += H(X, e0) : F += K(X, e0), F += k(X, e0), W(F == e0.part2_3_length + e0.part2_length), J += F;
          }
      else
        for (_ = 0, a = 0; a < X.channels_out; a++) {
          var e0 = $.tt[_][a], $0, S0, R0 = 0;
          if (W(e0.sfb_partition_table != null), F = 0, h = 0, S0 = 0, e0.block_type == G.SHORT_TYPE) {
            for (; S0 < 4; S0++) {
              var p0 = e0.sfb_partition_table[S0] / 3, Y0 = e0.slen[S0];
              for ($0 = 0; $0 < p0; $0++, h++)
                y(X, Math.max(e0.scalefac[h * 3 + 0], 0), Y0), y(X, Math.max(e0.scalefac[h * 3 + 1], 0), Y0), y(X, Math.max(e0.scalefac[h * 3 + 2], 0), Y0), R0 += 3 * Y0;
            }
            F += H(X, e0);
          } else {
            for (; S0 < 4; S0++) {
              var p0 = e0.sfb_partition_table[S0], Y0 = e0.slen[S0];
              for ($0 = 0; $0 < p0; $0++, h++)
                y(X, Math.max(e0.scalefac[h], 0), Y0), R0 += Y0;
            }
            F += K(X, e0);
          }
          F += k(X, e0), W(F == e0.part2_3_length), W(R0 == e0.part2_length), J += R0 + F;
        }
      return J;
    }
    function E() {
      this.total = 0;
    }
    function B(s, _) {
      var a = s.internal_flags, h, F, J, X, $;
      return $ = a.w_ptr, X = a.h_ptr - 1, X == -1 && (X = O.MAX_HEADER_BUF - 1), h = a.header[X].write_timing - e, _.total = h, h >= 0 && (F = 1 + X - $, X < $ && (F = 1 + X - $ + O.MAX_HEADER_BUF), h -= F * 8 * a.sideinfo_len), J = s0.getframebits(s), h += J, _.total += J, _.total % 8 != 0 ? _.total = 1 + _.total / 8 : _.total = _.total / 8, _.total += l + 1, h < 0 && x.err.println(`strange error flushing buffer ... 
`), h;
    }
    this.flush_bitstream = function(s) {
      var _ = s.internal_flags, a, h, F = _.h_ptr - 1;
      if (F == -1 && (F = O.MAX_HEADER_BUF - 1), a = _.l3_side, !((h = B(s, new E())) < 0)) {
        if (f(s, h), W(_.header[F].write_timing + this.getframebits(s) == e), _.ResvSize = 0, a.main_data_begin = 0, _.findReplayGain) {
          var J = n.GetTitleGain(_.rgdata);
          W(NEQ(J, GainAnalysis.GAIN_NOT_ENOUGH_SAMPLES)), _.RadioGain = Math.floor(J * 10 + 0.5) | 0;
        }
        _.findPeakSample && (_.noclipGainChange = Math.ceil(Math.log10(_.PeakSample / 32767) * 200) | 0, _.noclipGainChange > 0 && (EQ(s.scale, 1) || EQ(s.scale, 0)) ? _.noclipScale = Math.floor(32767 / _.PeakSample * 100) / 100 : _.noclipScale = -1);
      }
    }, this.add_dummy_byte = function(s, _, a) {
      for (var h = s.internal_flags, F; a-- > 0; )
        for (Q(h, _, 8), F = 0; F < O.MAX_HEADER_BUF; ++F)
          h.header[F].write_timing += 8;
    }, this.format_bitstream = function(s) {
      var _ = s.internal_flags, a;
      a = _.l3_side;
      var h = this.getframebits(s);
      f(s, a.resvDrain_pre), v(s, h);
      var F = 8 * _.sideinfo_len;
      if (F += l0(s), f(s, a.resvDrain_post), F += a.resvDrain_post, a.main_data_begin += (h - F) / 8, B(s, new E()) != _.ResvSize && x.err.println("Internal buffer inconsistency. flushbits <> ResvSize"), a.main_data_begin * 8 != _.ResvSize && (x.err.printf(`bit reservoir error: 
l3_side.main_data_begin: %d 
Resvoir size:             %d 
resv drain (post)         %d 
resv drain (pre)          %d 
header and sideinfo:      %d 
data bits:                %d 
total bits:               %d (remainder: %d) 
bitsperframe:             %d 
`, 8 * a.main_data_begin, _.ResvSize, a.resvDrain_post, a.resvDrain_pre, 8 * _.sideinfo_len, F - a.resvDrain_post - 8 * _.sideinfo_len, F, F % 8, h), x.err.println("This is a fatal error.  It has several possible causes:"), x.err.println("90%%  LAME compiled with buggy version of gcc using advanced optimizations"), x.err.println(" 9%%  Your system is overclocked"), x.err.println(" 1%%  bug in LAME encoding library"), _.ResvSize = a.main_data_begin * 8), W(e % 8 == 0), e > 1e9) {
        var J;
        for (J = 0; J < O.MAX_HEADER_BUF; ++J)
          _.header[J].write_timing -= e;
        e = 0;
      }
      return 0;
    }, this.copy_buffer = function(s, _, a, h, F) {
      var J = l + 1;
      if (J <= 0)
        return 0;
      if (h != 0 && J > h)
        return -1;
      if (x.arraycopy(b, 0, _, a, J), l = -1, N = 0, F != 0) {
        var X = V(1);
        if (X[0] = s.nMusicCRC, A.updateMusicCRC(X, _, a, J), s.nMusicCRC = X[0], J > 0 && (s.VBR_seek_table.nBytesWritten += J), s.decode_on_the_fly) {
          for (var $ = i0([
            2,
            1152
          ]), e0 = J, o0 = -1, b0; o0 != 0; )
            if (o0 = S.hip_decode1_unclipped(s.hip, _, a, e0, $[0], $[1]), e0 = 0, o0 == -1 && (o0 = 0), o0 > 0) {
              if (W(o0 <= 1152), s.findPeakSample) {
                for (b0 = 0; b0 < o0; b0++)
                  $[0][b0] > s.PeakSample ? s.PeakSample = $[0][b0] : -$[0][b0] > s.PeakSample && (s.PeakSample = -$[0][b0]);
                if (s.channels_out > 1)
                  for (b0 = 0; b0 < o0; b0++)
                    $[1][b0] > s.PeakSample ? s.PeakSample = $[1][b0] : -$[1][b0] > s.PeakSample && (s.PeakSample = -$[1][b0]);
              }
              if (s.findReplayGain && n.AnalyzeSamples(s.rgdata, $[0], 0, $[1], 0, o0, s.channels_out) == GainAnalysis.GAIN_ANALYSIS_ERROR)
                return -6;
            }
        }
      }
      return J;
    }, this.init_bit_stream_w = function(s) {
      b = Z(q.LAME_MAXMP3BUFFER), s.h_ptr = s.w_ptr = 0, s.header[s.h_ptr].write_timing = 0, l = -1, N = 0, e = 0;
    };
  }
  r0.exports = M;
});
v0.register("65Sx2", function(r0, _0) {
  var i = v0("3YDN3"), x = i.System;
  i.VbrMode, i.Float, i.ShortBlock, i.Util;
  var U = i.Arrays;
  i.new_array_n, i.new_byte, i.new_double, i.new_float, i.new_float_n;
  var Z = i.new_int;
  i.new_int_n;
  var i0 = i.assert, V = v0("cPNKB"), W = v0("dQDcS"), g = v0("7weBo"), m = v0("84mea");
  function G() {
    var O = null;
    this.qupvt = null, this.setModules = function(E) {
      this.qupvt = E, O = E;
    };
    function M(E) {
      this.bits = 0 | E;
    }
    var q = [
      [
        0,
        0
      ],
      /* 0 bands */
      [
        0,
        0
      ],
      /* 1 bands */
      [
        0,
        0
      ],
      /* 2 bands */
      [
        0,
        0
      ],
      /* 3 bands */
      [
        0,
        0
      ],
      /* 4 bands */
      [
        0,
        1
      ],
      /* 5 bands */
      [
        1,
        1
      ],
      /* 6 bands */
      [
        1,
        1
      ],
      /* 7 bands */
      [
        1,
        2
      ],
      /* 8 bands */
      [
        2,
        2
      ],
      /* 9 bands */
      [
        2,
        3
      ],
      /* 10 bands */
      [
        2,
        3
      ],
      /* 11 bands */
      [
        3,
        4
      ],
      /* 12 bands */
      [
        3,
        4
      ],
      /* 13 bands */
      [
        3,
        4
      ],
      /* 14 bands */
      [
        4,
        5
      ],
      /* 15 bands */
      [
        4,
        5
      ],
      /* 16 bands */
      [
        4,
        6
      ],
      /* 17 bands */
      [
        5,
        6
      ],
      /* 18 bands */
      [
        5,
        6
      ],
      /* 19 bands */
      [
        5,
        7
      ],
      /* 20 bands */
      [
        6,
        7
      ],
      /* 21 bands */
      [
        6,
        7
      ]
    ];
    function s0(E, B, s, _, a, h) {
      var F = 0.5946 / B;
      for (i0(E > 0), E = E >> 1; E-- != 0; )
        a[h++] = F > s[_++] ? 0 : 1, a[h++] = F > s[_++] ? 0 : 1;
    }
    function f0(E, B, s, _, a, h) {
      i0(E > 0), E = E >> 1;
      var F = E % 2;
      for (E = E >> 1; E-- != 0; ) {
        var J, X, $, e0, o0, b0, $0, S0;
        J = s[_++] * B, X = s[_++] * B, o0 = 0 | J, $ = s[_++] * B, b0 = 0 | X, e0 = s[_++] * B, $0 = 0 | $, J += O.adj43[o0], S0 = 0 | e0, X += O.adj43[b0], a[h++] = 0 | J, $ += O.adj43[$0], a[h++] = 0 | X, e0 += O.adj43[S0], a[h++] = 0 | $, a[h++] = 0 | e0;
      }
      if (F != 0) {
        var J, X, o0, b0;
        J = s[_++] * B, X = s[_++] * B, o0 = 0 | J, b0 = 0 | X, J += O.adj43[o0], X += O.adj43[b0], a[h++] = 0 | J, a[h++] = 0 | X;
      }
    }
    function r(E, B, s, _, a) {
      var h, F, J = 0, X, $ = 0, e0 = 0, o0 = 0, b0 = B, $0 = 0, S0 = b0, R0 = 0, p0 = E, Y0 = 0;
      for (X = a != null && _.global_gain == a.global_gain, _.block_type == V.SHORT_TYPE ? F = 38 : F = 21, h = 0; h <= F; h++) {
        var J0 = -1;
        if ((X || _.block_type == V.NORM_TYPE) && (J0 = _.global_gain - (_.scalefac[h] + (_.preflag != 0 ? O.pretab[h] : 0) << _.scalefac_scale + 1) - _.subblock_gain[_.window[h]] * 8), i0(_.width[h] >= 0), X && a.step[h] == J0)
          $ != 0 && (f0($, s, p0, Y0, S0, R0), $ = 0), e0 != 0 && (s0(e0, s, p0, Y0, S0, R0), e0 = 0);
        else {
          var t = _.width[h];
          if (J + _.width[h] > _.max_nonzero_coeff) {
            var o;
            o = _.max_nonzero_coeff - J + 1, U.fill(B, _.max_nonzero_coeff, 576, 0), t = o, t < 0 && (t = 0), h = F + 1;
          }
          if ($ == 0 && e0 == 0 && (S0 = b0, R0 = $0, p0 = E, Y0 = o0), a != null && a.sfb_count1 > 0 && h >= a.sfb_count1 && a.step[h] > 0 && J0 >= a.step[h] ? ($ != 0 && (f0($, s, p0, Y0, S0, R0), $ = 0, S0 = b0, R0 = $0, p0 = E, Y0 = o0), e0 += t) : (e0 != 0 && (s0(e0, s, p0, Y0, S0, R0), e0 = 0, S0 = b0, R0 = $0, p0 = E, Y0 = o0), $ += t), t <= 0) {
            e0 != 0 && (s0(e0, s, p0, Y0, S0, R0), e0 = 0), $ != 0 && (f0($, s, p0, Y0, S0, R0), $ = 0);
            break;
          }
        }
        h <= F && ($0 += _.width[h], o0 += _.width[h], J += _.width[h]);
      }
      $ != 0 && (f0($, s, p0, Y0, S0, R0), $ = 0), e0 != 0 && (s0(e0, s, p0, Y0, S0, R0), e0 = 0);
    }
    function n(E, B, s) {
      var _ = 0, a = 0;
      do {
        var h = E[B++], F = E[B++];
        _ < h && (_ = h), a < F && (a = F);
      } while (B < s);
      return _ < a && (_ = a), _;
    }
    function S(E, B, s, _, a, h) {
      var F = W.ht[_].xlen * 65536 + W.ht[a].xlen, J = 0, X;
      do {
        var $ = E[B++], e0 = E[B++];
        $ != 0 && ($ > 14 && ($ = 15, J += F), $ *= 16), e0 != 0 && (e0 > 14 && (e0 = 15, J += F), $ += e0), J += W.largetbl[$];
      } while (B < s);
      return X = J & 65535, J >>= 16, J > X && (J = X, _ = a), h.bits += J, _;
    }
    function p(E, B, s, _) {
      var a = 0, h = W.ht[1].hlen;
      do {
        var F = E[B + 0] * 2 + E[B + 1];
        B += 2, a += h[F];
      } while (B < s);
      return _.bits += a, 1;
    }
    function A(E, B, s, _, a) {
      var h = 0, F, J = W.ht[_].xlen, X;
      _ == 2 ? X = W.table23 : X = W.table56;
      do {
        var $ = E[B + 0] * J + E[B + 1];
        B += 2, h += X[$];
      } while (B < s);
      return F = h & 65535, h >>= 16, h > F && (h = F, _++), a.bits += h, _;
    }
    function b(E, B, s, _, a) {
      var h = 0, F = 0, J = 0, X = W.ht[_].xlen, $ = W.ht[_].hlen, e0 = W.ht[_ + 1].hlen, o0 = W.ht[_ + 2].hlen;
      do {
        var b0 = E[B + 0] * X + E[B + 1];
        B += 2, h += $[b0], F += e0[b0], J += o0[b0];
      } while (B < s);
      var $0 = _;
      return h > F && (h = F, $0++), h > J && (h = J, $0 = _ + 2), a.bits += h, $0;
    }
    var e = [
      1,
      2,
      5,
      7,
      7,
      10,
      10,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13
    ];
    function l(E, B, s, _) {
      var a = n(E, B, s);
      switch (a) {
        case 0:
          return a;
        case 1:
          return p(E, B, s, _);
        case 2:
        case 3:
          return A(E, B, s, e[a - 1], _);
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
          return b(E, B, s, e[a - 1], _);
        default:
          if (a > m.IXMAX_VAL)
            return _.bits = m.LARGE_BITS, -1;
          a -= 15;
          var h;
          for (h = 24; h < 32 && !(W.ht[h].linmax >= a); h++)
            ;
          var F;
          for (F = h - 8; F < 24 && !(W.ht[F].linmax >= a); F++)
            ;
          return S(E, B, s, F, h, _);
      }
    }
    this.noquant_count_bits = function(E, B, s) {
      var _ = B.l3_enc, a = Math.min(576, B.max_nonzero_coeff + 2 >> 1 << 1);
      for (s != null && (s.sfb_count1 = 0); a > 1 && !(_[a - 1] | _[a - 2]); a -= 2)
        ;
      B.count1 = a;
      for (var h = 0, F = 0; a > 3; a -= 4) {
        var J;
        if (((_[a - 1] | _[a - 2] | _[a - 3] | _[a - 4]) & 2147483647) > 1)
          break;
        J = ((_[a - 4] * 2 + _[a - 3]) * 2 + _[a - 2]) * 2 + _[a - 1], h += W.t32l[J], F += W.t33l[J];
      }
      var X = h;
      if (B.count1table_select = 0, h > F && (X = F, B.count1table_select = 1), B.count1bits = X, B.big_values = a, a == 0)
        return X;
      if (B.block_type == V.SHORT_TYPE)
        h = 3 * E.scalefac_band.s[3], h > B.big_values && (h = B.big_values), F = B.big_values;
      else if (B.block_type == V.NORM_TYPE) {
        if (i0(a <= 576), h = B.region0_count = E.bv_scf[a - 2], F = B.region1_count = E.bv_scf[a - 1], i0(h + F + 2 < V.SBPSY_l), F = E.scalefac_band.l[h + F + 2], h = E.scalefac_band.l[h + 1], F < a) {
          var $ = new M(X);
          B.table_select[2] = l(_, F, a, $), X = $.bits;
        }
      } else
        B.region0_count = 7, B.region1_count = V.SBMAX_l - 1 - 7 - 1, h = E.scalefac_band.l[8], F = a, h > F && (h = F);
      if (h = Math.min(h, a), F = Math.min(F, a), i0(h >= 0), i0(F >= 0), 0 < h) {
        var $ = new M(X);
        B.table_select[0] = l(_, 0, h, $), X = $.bits;
      }
      if (h < F) {
        var $ = new M(X);
        B.table_select[1] = l(_, h, F, $), X = $.bits;
      }
      if (E.use_best_huffman == 2 && (B.part2_3_length = X, best_huffman_divide(E, B), X = B.part2_3_length), s != null && B.block_type == V.NORM_TYPE) {
        for (var e0 = 0; E.scalefac_band.l[e0] < B.big_values; )
          e0++;
        s.sfb_count1 = e0;
      }
      return X;
    }, this.count_bits = function(E, B, s, _) {
      var a = s.l3_enc, h = m.IXMAX_VAL / O.IPOW20(s.global_gain);
      if (s.xrpow_max > h)
        return m.LARGE_BITS;
      if (r(B, a, O.IPOW20(s.global_gain), s, _), E.substep_shaping & 2)
        for (var F = 0, J = s.global_gain + s.scalefac_scale, X = 0.634521682242439 / O.IPOW20(J), $ = 0; $ < s.sfbmax; $++) {
          var e0 = s.width[$];
          if (i0(e0 >= 0), E.pseudohalf[$] == 0)
            F += e0;
          else {
            var o0;
            for (o0 = F, F += e0; o0 < F; ++o0)
              a[o0] = B[o0] >= X ? a[o0] : 0;
          }
        }
      return this.noquant_count_bits(E, s, _);
    };
    function N(E, B, s, _, a, h, F) {
      for (var J = B.big_values, X = 0; X <= 22; X++)
        _[X] = m.LARGE_BITS;
      for (var X = 0; X < 16; X++) {
        var $ = E.scalefac_band.l[X + 1];
        if ($ >= J)
          break;
        var e0 = 0, o0 = new M(e0), b0 = l(s, 0, $, o0);
        e0 = o0.bits;
        for (var $0 = 0; $0 < 8; $0++) {
          var S0 = E.scalefac_band.l[X + $0 + 2];
          if (S0 >= J)
            break;
          var R0 = e0;
          o0 = new M(R0);
          var p0 = l(s, $, S0, o0);
          R0 = o0.bits, _[X + $0] > R0 && (_[X + $0] = R0, a[X + $0] = X, h[X + $0] = b0, F[X + $0] = p0);
        }
      }
    }
    function T(E, B, s, _, a, h, F, J) {
      for (var X = B.big_values, $ = 2; $ < V.SBMAX_l + 1; $++) {
        var e0 = E.scalefac_band.l[$];
        if (e0 >= X)
          break;
        var o0 = a[$ - 2] + B.count1bits;
        if (s.part2_3_length <= o0)
          break;
        var b0 = new M(o0), $0 = l(_, e0, X, b0);
        o0 = b0.bits, !(s.part2_3_length <= o0) && (s.assign(B), s.part2_3_length = o0, s.region0_count = h[$ - 2], s.region1_count = $ - 2 - h[$ - 2], s.table_select[0] = F[$ - 2], s.table_select[1] = J[$ - 2], s.table_select[2] = $0);
      }
    }
    this.best_huffman_divide = function(E, B) {
      var s = new g(), _ = B.l3_enc, a = Z(23), h = Z(23), F = Z(23), J = Z(23);
      if (!(B.block_type == V.SHORT_TYPE && E.mode_gr == 1)) {
        s.assign(B), B.block_type == V.NORM_TYPE && (N(E, B, _, a, h, F, J), T(E, s, B, _, a, h, F, J));
        var X = s.big_values;
        if (!(X == 0 || (_[X - 2] | _[X - 1]) > 1) && (X = B.count1 + 2, !(X > 576))) {
          s.assign(B), s.count1 = X;
          var $ = 0, e0 = 0;
          for (i0(X <= 576); X > s.big_values; X -= 4) {
            var o0 = ((_[X - 4] * 2 + _[X - 3]) * 2 + _[X - 2]) * 2 + _[X - 1];
            $ += W.t32l[o0], e0 += W.t33l[o0];
          }
          if (s.big_values = X, s.count1table_select = 0, $ > e0 && ($ = e0, s.count1table_select = 1), s.count1bits = $, s.block_type == V.NORM_TYPE)
            T(E, s, B, _, a, h, F, J);
          else {
            if (s.part2_3_length = $, $ = E.scalefac_band.l[8], $ > X && ($ = X), $ > 0) {
              var b0 = new M(s.part2_3_length);
              s.table_select[0] = l(_, 0, $, b0), s.part2_3_length = b0.bits;
            }
            if (X > $) {
              var b0 = new M(s.part2_3_length);
              s.table_select[1] = l(_, $, X, b0), s.part2_3_length = b0.bits;
            }
            B.part2_3_length > s.part2_3_length && B.assign(s);
          }
        }
      }
    };
    var y = [
      1,
      1,
      1,
      1,
      8,
      2,
      2,
      2,
      4,
      4,
      4,
      8,
      8,
      8,
      16,
      16
    ], Q = [
      1,
      2,
      4,
      8,
      1,
      2,
      4,
      8,
      2,
      4,
      8,
      2,
      4,
      8,
      4,
      8
    ], f = [
      0,
      0,
      0,
      0,
      3,
      1,
      1,
      1,
      2,
      2,
      2,
      3,
      3,
      3,
      4,
      4
    ], d = [
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      1,
      2,
      3,
      1,
      2,
      3,
      2,
      3
    ];
    G.slen1_tab = f, G.slen2_tab = d;
    function C(E, B) {
      for (var s, _ = B.tt[1][E], a = B.tt[0][E], h = 0; h < W.scfsi_band.length - 1; h++) {
        for (s = W.scfsi_band[h]; s < W.scfsi_band[h + 1] && !(a.scalefac[s] != _.scalefac[s] && _.scalefac[s] >= 0); s++)
          ;
        if (s == W.scfsi_band[h + 1]) {
          for (s = W.scfsi_band[h]; s < W.scfsi_band[h + 1]; s++)
            _.scalefac[s] = -1;
          B.scfsi[E][h] = 1;
        }
      }
      var F = 0, J = 0;
      for (s = 0; s < 11; s++)
        _.scalefac[s] != -1 && (J++, F < _.scalefac[s] && (F = _.scalefac[s]));
      for (var X = 0, $ = 0; s < V.SBPSY_l; s++)
        _.scalefac[s] != -1 && ($++, X < _.scalefac[s] && (X = _.scalefac[s]));
      for (var h = 0; h < 16; h++)
        if (F < y[h] && X < Q[h]) {
          var e0 = f[h] * J + d[h] * $;
          _.part2_length > e0 && (_.part2_length = e0, _.scalefac_compress = h);
        }
    }
    this.best_scalefac_store = function(E, B, s, _) {
      var a = _.tt[B][s], h, F, J, X, $ = 0;
      for (J = 0, h = 0; h < a.sfbmax; h++) {
        var e0 = a.width[h];
        for (i0(e0 >= 0), J += e0, X = -e0; X < 0 && a.l3_enc[X + J] == 0; X++)
          ;
        X == 0 && (a.scalefac[h] = $ = -2);
      }
      if (a.scalefac_scale == 0 && a.preflag == 0) {
        var o0 = 0;
        for (h = 0; h < a.sfbmax; h++)
          a.scalefac[h] > 0 && (o0 |= a.scalefac[h]);
        if (!(o0 & 1) && o0 != 0) {
          for (h = 0; h < a.sfbmax; h++)
            a.scalefac[h] > 0 && (a.scalefac[h] >>= 1);
          a.scalefac_scale = $ = 1;
        }
      }
      if (a.preflag == 0 && a.block_type != V.SHORT_TYPE && E.mode_gr == 2) {
        for (h = 11; h < V.SBPSY_l && !(a.scalefac[h] < O.pretab[h] && a.scalefac[h] != -2); h++)
          ;
        if (h == V.SBPSY_l) {
          for (h = 11; h < V.SBPSY_l; h++)
            a.scalefac[h] > 0 && (a.scalefac[h] -= O.pretab[h]);
          a.preflag = $ = 1;
        }
      }
      for (F = 0; F < 4; F++)
        _.scfsi[s][F] = 0;
      for (E.mode_gr == 2 && B == 1 && _.tt[0][s].block_type != V.SHORT_TYPE && _.tt[1][s].block_type != V.SHORT_TYPE && (C(s, _), $ = 0), h = 0; h < a.sfbmax; h++)
        a.scalefac[h] == -2 && (a.scalefac[h] = 0);
      $ != 0 && (E.mode_gr == 2 ? this.scale_bitcount(a) : this.scale_bitcount_lsf(E, a));
    };
    function v(E, B) {
      for (var s = 0; s < B; ++s)
        if (E[s] < 0)
          return !1;
      return !0;
    }
    var k = [
      0,
      18,
      36,
      54,
      54,
      36,
      54,
      72,
      54,
      72,
      90,
      72,
      90,
      108,
      108,
      126
    ], I = [
      0,
      18,
      36,
      54,
      51,
      35,
      53,
      71,
      52,
      70,
      88,
      69,
      87,
      105,
      104,
      122
    ], H = [
      0,
      10,
      20,
      30,
      33,
      21,
      31,
      41,
      32,
      42,
      52,
      43,
      53,
      63,
      64,
      74
    ];
    this.scale_bitcount = function(E) {
      var B, s, _ = 0, a = 0, h, F = E.scalefac;
      if (i0(v(F, E.sfbmax)), E.block_type == V.SHORT_TYPE)
        h = k, E.mixed_block_flag != 0 && (h = I);
      else if (h = H, E.preflag == 0) {
        for (s = 11; s < V.SBPSY_l && !(F[s] < O.pretab[s]); s++)
          ;
        if (s == V.SBPSY_l)
          for (E.preflag = 1, s = 11; s < V.SBPSY_l; s++)
            F[s] -= O.pretab[s];
      }
      for (s = 0; s < E.sfbdivide; s++)
        _ < F[s] && (_ = F[s]);
      for (; s < E.sfbmax; s++)
        a < F[s] && (a = F[s]);
      for (E.part2_length = m.LARGE_BITS, B = 0; B < 16; B++)
        _ < y[B] && a < Q[B] && E.part2_length > h[B] && (E.part2_length = h[B], E.scalefac_compress = B);
      return E.part2_length == m.LARGE_BITS;
    };
    var K = [
      [
        15,
        15,
        7,
        7
      ],
      [
        15,
        15,
        7,
        0
      ],
      [
        7,
        3,
        0,
        0
      ],
      [
        15,
        31,
        31,
        0
      ],
      [
        7,
        7,
        7,
        0
      ],
      [
        3,
        3,
        0,
        0
      ]
    ];
    this.scale_bitcount_lsf = function(E, B) {
      var s, _, a, h, F, J, X, $, e0 = Z(4), o0 = B.scalefac;
      for (B.preflag != 0 ? s = 2 : s = 0, X = 0; X < 4; X++)
        e0[X] = 0;
      if (B.block_type == V.SHORT_TYPE) {
        _ = 1;
        var b0 = O.nr_of_sfb_block[s][_];
        for ($ = 0, a = 0; a < 4; a++)
          for (h = b0[a] / 3, X = 0; X < h; X++, $++)
            for (F = 0; F < 3; F++)
              o0[$ * 3 + F] > e0[a] && (e0[a] = o0[$ * 3 + F]);
      } else {
        _ = 0;
        var b0 = O.nr_of_sfb_block[s][_];
        for ($ = 0, a = 0; a < 4; a++)
          for (h = b0[a], X = 0; X < h; X++, $++)
            o0[$] > e0[a] && (e0[a] = o0[$]);
      }
      for (J = !1, a = 0; a < 4; a++)
        e0[a] > K[s][a] && (J = !0);
      if (!J) {
        var $0, S0, R0, p0;
        for (B.sfb_partition_table = O.nr_of_sfb_block[s][_], a = 0; a < 4; a++)
          B.slen[a] = l0[e0[a]];
        switch ($0 = B.slen[0], S0 = B.slen[1], R0 = B.slen[2], p0 = B.slen[3], s) {
          case 0:
            B.scalefac_compress = ($0 * 5 + S0 << 4) + (R0 << 2) + p0;
            break;
          case 1:
            B.scalefac_compress = 400 + ($0 * 5 + S0 << 2) + R0;
            break;
          case 2:
            B.scalefac_compress = 500 + $0 * 3 + S0;
            break;
          default:
            x.err.printf(`intensity stereo not implemented yet
`);
            break;
        }
      }
      if (!J)
        for (i0(B.sfb_partition_table != null), B.part2_length = 0, a = 0; a < 4; a++)
          B.part2_length += B.slen[a] * B.sfb_partition_table[a];
      return J;
    };
    var l0 = [
      0,
      1,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4
    ];
    this.huffman_init = function(E) {
      for (var B = 2; B <= 576; B += 2) {
        for (var s = 0, _; E.scalefac_band.l[++s] < B; )
          ;
        for (_ = q[s][0]; E.scalefac_band.l[_ + 1] > B; )
          _--;
        for (_ < 0 && (_ = q[s][0]), E.bv_scf[B - 2] = _, _ = q[s][1]; E.scalefac_band.l[_ + E.bv_scf[B - 2] + 2] > B; )
          _--;
        _ < 0 && (_ = q[s][1]), E.bv_scf[B - 1] = _;
      }
    };
  }
  r0.exports = G;
});
v0.register("dQDcS", function(r0, _0) {
  function i(U, Z, i0, V) {
    this.xlen = U, this.linmax = Z, this.table = i0, this.hlen = V;
  }
  var x = {};
  x.t1HB = [
    1,
    1,
    1,
    0
  ], x.t2HB = [
    1,
    2,
    1,
    3,
    1,
    1,
    3,
    2,
    0
  ], x.t3HB = [
    3,
    2,
    1,
    1,
    1,
    1,
    3,
    2,
    0
  ], x.t5HB = [
    1,
    2,
    6,
    5,
    3,
    1,
    4,
    4,
    7,
    5,
    7,
    1,
    6,
    1,
    1,
    0
  ], x.t6HB = [
    7,
    3,
    5,
    1,
    6,
    2,
    3,
    2,
    5,
    4,
    4,
    1,
    3,
    3,
    2,
    0
  ], x.t7HB = [
    1,
    2,
    10,
    19,
    16,
    10,
    3,
    3,
    7,
    10,
    5,
    3,
    11,
    4,
    13,
    17,
    8,
    4,
    12,
    11,
    18,
    15,
    11,
    2,
    7,
    6,
    9,
    14,
    3,
    1,
    6,
    4,
    5,
    3,
    2,
    0
  ], x.t8HB = [
    3,
    4,
    6,
    18,
    12,
    5,
    5,
    1,
    2,
    16,
    9,
    3,
    7,
    3,
    5,
    14,
    7,
    3,
    19,
    17,
    15,
    13,
    10,
    4,
    13,
    5,
    8,
    11,
    5,
    1,
    12,
    4,
    4,
    1,
    1,
    0
  ], x.t9HB = [
    7,
    5,
    9,
    14,
    15,
    7,
    6,
    4,
    5,
    5,
    6,
    7,
    7,
    6,
    8,
    8,
    8,
    5,
    15,
    6,
    9,
    10,
    5,
    1,
    11,
    7,
    9,
    6,
    4,
    1,
    14,
    4,
    6,
    2,
    6,
    0
  ], x.t10HB = [
    1,
    2,
    10,
    23,
    35,
    30,
    12,
    17,
    3,
    3,
    8,
    12,
    18,
    21,
    12,
    7,
    11,
    9,
    15,
    21,
    32,
    40,
    19,
    6,
    14,
    13,
    22,
    34,
    46,
    23,
    18,
    7,
    20,
    19,
    33,
    47,
    27,
    22,
    9,
    3,
    31,
    22,
    41,
    26,
    21,
    20,
    5,
    3,
    14,
    13,
    10,
    11,
    16,
    6,
    5,
    1,
    9,
    8,
    7,
    8,
    4,
    4,
    2,
    0
  ], x.t11HB = [
    3,
    4,
    10,
    24,
    34,
    33,
    21,
    15,
    5,
    3,
    4,
    10,
    32,
    17,
    11,
    10,
    11,
    7,
    13,
    18,
    30,
    31,
    20,
    5,
    25,
    11,
    19,
    59,
    27,
    18,
    12,
    5,
    35,
    33,
    31,
    58,
    30,
    16,
    7,
    5,
    28,
    26,
    32,
    19,
    17,
    15,
    8,
    14,
    14,
    12,
    9,
    13,
    14,
    9,
    4,
    1,
    11,
    4,
    6,
    6,
    6,
    3,
    2,
    0
  ], x.t12HB = [
    9,
    6,
    16,
    33,
    41,
    39,
    38,
    26,
    7,
    5,
    6,
    9,
    23,
    16,
    26,
    11,
    17,
    7,
    11,
    14,
    21,
    30,
    10,
    7,
    17,
    10,
    15,
    12,
    18,
    28,
    14,
    5,
    32,
    13,
    22,
    19,
    18,
    16,
    9,
    5,
    40,
    17,
    31,
    29,
    17,
    13,
    4,
    2,
    27,
    12,
    11,
    15,
    10,
    7,
    4,
    1,
    27,
    12,
    8,
    12,
    6,
    3,
    1,
    0
  ], x.t13HB = [
    1,
    5,
    14,
    21,
    34,
    51,
    46,
    71,
    42,
    52,
    68,
    52,
    67,
    44,
    43,
    19,
    3,
    4,
    12,
    19,
    31,
    26,
    44,
    33,
    31,
    24,
    32,
    24,
    31,
    35,
    22,
    14,
    15,
    13,
    23,
    36,
    59,
    49,
    77,
    65,
    29,
    40,
    30,
    40,
    27,
    33,
    42,
    16,
    22,
    20,
    37,
    61,
    56,
    79,
    73,
    64,
    43,
    76,
    56,
    37,
    26,
    31,
    25,
    14,
    35,
    16,
    60,
    57,
    97,
    75,
    114,
    91,
    54,
    73,
    55,
    41,
    48,
    53,
    23,
    24,
    58,
    27,
    50,
    96,
    76,
    70,
    93,
    84,
    77,
    58,
    79,
    29,
    74,
    49,
    41,
    17,
    47,
    45,
    78,
    74,
    115,
    94,
    90,
    79,
    69,
    83,
    71,
    50,
    59,
    38,
    36,
    15,
    72,
    34,
    56,
    95,
    92,
    85,
    91,
    90,
    86,
    73,
    77,
    65,
    51,
    44,
    43,
    42,
    43,
    20,
    30,
    44,
    55,
    78,
    72,
    87,
    78,
    61,
    46,
    54,
    37,
    30,
    20,
    16,
    53,
    25,
    41,
    37,
    44,
    59,
    54,
    81,
    66,
    76,
    57,
    54,
    37,
    18,
    39,
    11,
    35,
    33,
    31,
    57,
    42,
    82,
    72,
    80,
    47,
    58,
    55,
    21,
    22,
    26,
    38,
    22,
    53,
    25,
    23,
    38,
    70,
    60,
    51,
    36,
    55,
    26,
    34,
    23,
    27,
    14,
    9,
    7,
    34,
    32,
    28,
    39,
    49,
    75,
    30,
    52,
    48,
    40,
    52,
    28,
    18,
    17,
    9,
    5,
    45,
    21,
    34,
    64,
    56,
    50,
    49,
    45,
    31,
    19,
    12,
    15,
    10,
    7,
    6,
    3,
    48,
    23,
    20,
    39,
    36,
    35,
    53,
    21,
    16,
    23,
    13,
    10,
    6,
    1,
    4,
    2,
    16,
    15,
    17,
    27,
    25,
    20,
    29,
    11,
    17,
    12,
    16,
    8,
    1,
    1,
    0,
    1
  ], x.t15HB = [
    7,
    12,
    18,
    53,
    47,
    76,
    124,
    108,
    89,
    123,
    108,
    119,
    107,
    81,
    122,
    63,
    13,
    5,
    16,
    27,
    46,
    36,
    61,
    51,
    42,
    70,
    52,
    83,
    65,
    41,
    59,
    36,
    19,
    17,
    15,
    24,
    41,
    34,
    59,
    48,
    40,
    64,
    50,
    78,
    62,
    80,
    56,
    33,
    29,
    28,
    25,
    43,
    39,
    63,
    55,
    93,
    76,
    59,
    93,
    72,
    54,
    75,
    50,
    29,
    52,
    22,
    42,
    40,
    67,
    57,
    95,
    79,
    72,
    57,
    89,
    69,
    49,
    66,
    46,
    27,
    77,
    37,
    35,
    66,
    58,
    52,
    91,
    74,
    62,
    48,
    79,
    63,
    90,
    62,
    40,
    38,
    125,
    32,
    60,
    56,
    50,
    92,
    78,
    65,
    55,
    87,
    71,
    51,
    73,
    51,
    70,
    30,
    109,
    53,
    49,
    94,
    88,
    75,
    66,
    122,
    91,
    73,
    56,
    42,
    64,
    44,
    21,
    25,
    90,
    43,
    41,
    77,
    73,
    63,
    56,
    92,
    77,
    66,
    47,
    67,
    48,
    53,
    36,
    20,
    71,
    34,
    67,
    60,
    58,
    49,
    88,
    76,
    67,
    106,
    71,
    54,
    38,
    39,
    23,
    15,
    109,
    53,
    51,
    47,
    90,
    82,
    58,
    57,
    48,
    72,
    57,
    41,
    23,
    27,
    62,
    9,
    86,
    42,
    40,
    37,
    70,
    64,
    52,
    43,
    70,
    55,
    42,
    25,
    29,
    18,
    11,
    11,
    118,
    68,
    30,
    55,
    50,
    46,
    74,
    65,
    49,
    39,
    24,
    16,
    22,
    13,
    14,
    7,
    91,
    44,
    39,
    38,
    34,
    63,
    52,
    45,
    31,
    52,
    28,
    19,
    14,
    8,
    9,
    3,
    123,
    60,
    58,
    53,
    47,
    43,
    32,
    22,
    37,
    24,
    17,
    12,
    15,
    10,
    2,
    1,
    71,
    37,
    34,
    30,
    28,
    20,
    17,
    26,
    21,
    16,
    10,
    6,
    8,
    6,
    2,
    0
  ], x.t16HB = [
    1,
    5,
    14,
    44,
    74,
    63,
    110,
    93,
    172,
    149,
    138,
    242,
    225,
    195,
    376,
    17,
    3,
    4,
    12,
    20,
    35,
    62,
    53,
    47,
    83,
    75,
    68,
    119,
    201,
    107,
    207,
    9,
    15,
    13,
    23,
    38,
    67,
    58,
    103,
    90,
    161,
    72,
    127,
    117,
    110,
    209,
    206,
    16,
    45,
    21,
    39,
    69,
    64,
    114,
    99,
    87,
    158,
    140,
    252,
    212,
    199,
    387,
    365,
    26,
    75,
    36,
    68,
    65,
    115,
    101,
    179,
    164,
    155,
    264,
    246,
    226,
    395,
    382,
    362,
    9,
    66,
    30,
    59,
    56,
    102,
    185,
    173,
    265,
    142,
    253,
    232,
    400,
    388,
    378,
    445,
    16,
    111,
    54,
    52,
    100,
    184,
    178,
    160,
    133,
    257,
    244,
    228,
    217,
    385,
    366,
    715,
    10,
    98,
    48,
    91,
    88,
    165,
    157,
    148,
    261,
    248,
    407,
    397,
    372,
    380,
    889,
    884,
    8,
    85,
    84,
    81,
    159,
    156,
    143,
    260,
    249,
    427,
    401,
    392,
    383,
    727,
    713,
    708,
    7,
    154,
    76,
    73,
    141,
    131,
    256,
    245,
    426,
    406,
    394,
    384,
    735,
    359,
    710,
    352,
    11,
    139,
    129,
    67,
    125,
    247,
    233,
    229,
    219,
    393,
    743,
    737,
    720,
    885,
    882,
    439,
    4,
    243,
    120,
    118,
    115,
    227,
    223,
    396,
    746,
    742,
    736,
    721,
    712,
    706,
    223,
    436,
    6,
    202,
    224,
    222,
    218,
    216,
    389,
    386,
    381,
    364,
    888,
    443,
    707,
    440,
    437,
    1728,
    4,
    747,
    211,
    210,
    208,
    370,
    379,
    734,
    723,
    714,
    1735,
    883,
    877,
    876,
    3459,
    865,
    2,
    377,
    369,
    102,
    187,
    726,
    722,
    358,
    711,
    709,
    866,
    1734,
    871,
    3458,
    870,
    434,
    0,
    12,
    10,
    7,
    11,
    10,
    17,
    11,
    9,
    13,
    12,
    10,
    7,
    5,
    3,
    1,
    3
  ], x.t24HB = [
    15,
    13,
    46,
    80,
    146,
    262,
    248,
    434,
    426,
    669,
    653,
    649,
    621,
    517,
    1032,
    88,
    14,
    12,
    21,
    38,
    71,
    130,
    122,
    216,
    209,
    198,
    327,
    345,
    319,
    297,
    279,
    42,
    47,
    22,
    41,
    74,
    68,
    128,
    120,
    221,
    207,
    194,
    182,
    340,
    315,
    295,
    541,
    18,
    81,
    39,
    75,
    70,
    134,
    125,
    116,
    220,
    204,
    190,
    178,
    325,
    311,
    293,
    271,
    16,
    147,
    72,
    69,
    135,
    127,
    118,
    112,
    210,
    200,
    188,
    352,
    323,
    306,
    285,
    540,
    14,
    263,
    66,
    129,
    126,
    119,
    114,
    214,
    202,
    192,
    180,
    341,
    317,
    301,
    281,
    262,
    12,
    249,
    123,
    121,
    117,
    113,
    215,
    206,
    195,
    185,
    347,
    330,
    308,
    291,
    272,
    520,
    10,
    435,
    115,
    111,
    109,
    211,
    203,
    196,
    187,
    353,
    332,
    313,
    298,
    283,
    531,
    381,
    17,
    427,
    212,
    208,
    205,
    201,
    193,
    186,
    177,
    169,
    320,
    303,
    286,
    268,
    514,
    377,
    16,
    335,
    199,
    197,
    191,
    189,
    181,
    174,
    333,
    321,
    305,
    289,
    275,
    521,
    379,
    371,
    11,
    668,
    184,
    183,
    179,
    175,
    344,
    331,
    314,
    304,
    290,
    277,
    530,
    383,
    373,
    366,
    10,
    652,
    346,
    171,
    168,
    164,
    318,
    309,
    299,
    287,
    276,
    263,
    513,
    375,
    368,
    362,
    6,
    648,
    322,
    316,
    312,
    307,
    302,
    292,
    284,
    269,
    261,
    512,
    376,
    370,
    364,
    359,
    4,
    620,
    300,
    296,
    294,
    288,
    282,
    273,
    266,
    515,
    380,
    374,
    369,
    365,
    361,
    357,
    2,
    1033,
    280,
    278,
    274,
    267,
    264,
    259,
    382,
    378,
    372,
    367,
    363,
    360,
    358,
    356,
    0,
    43,
    20,
    19,
    17,
    15,
    13,
    11,
    9,
    7,
    6,
    4,
    7,
    5,
    3,
    1,
    3
  ], x.t32HB = [
    1,
    10,
    8,
    20,
    12,
    20,
    16,
    32,
    14,
    12,
    24,
    0,
    28,
    16,
    24,
    16
  ], x.t33HB = [
    15,
    28,
    26,
    48,
    22,
    40,
    36,
    64,
    14,
    24,
    20,
    32,
    12,
    16,
    8,
    0
  ], x.t1l = [
    1,
    4,
    3,
    5
  ], x.t2l = [
    1,
    4,
    7,
    4,
    5,
    7,
    6,
    7,
    8
  ], x.t3l = [
    2,
    3,
    7,
    4,
    4,
    7,
    6,
    7,
    8
  ], x.t5l = [
    1,
    4,
    7,
    8,
    4,
    5,
    8,
    9,
    7,
    8,
    9,
    10,
    8,
    8,
    9,
    10
  ], x.t6l = [
    3,
    4,
    6,
    8,
    4,
    4,
    6,
    7,
    5,
    6,
    7,
    8,
    7,
    7,
    8,
    9
  ], x.t7l = [
    1,
    4,
    7,
    9,
    9,
    10,
    4,
    6,
    8,
    9,
    9,
    10,
    7,
    7,
    9,
    10,
    10,
    11,
    8,
    9,
    10,
    11,
    11,
    11,
    8,
    9,
    10,
    11,
    11,
    12,
    9,
    10,
    11,
    12,
    12,
    12
  ], x.t8l = [
    2,
    4,
    7,
    9,
    9,
    10,
    4,
    4,
    6,
    10,
    10,
    10,
    7,
    6,
    8,
    10,
    10,
    11,
    9,
    10,
    10,
    11,
    11,
    12,
    9,
    9,
    10,
    11,
    12,
    12,
    10,
    10,
    11,
    11,
    13,
    13
  ], x.t9l = [
    3,
    4,
    6,
    7,
    9,
    10,
    4,
    5,
    6,
    7,
    8,
    10,
    5,
    6,
    7,
    8,
    9,
    10,
    7,
    7,
    8,
    9,
    9,
    10,
    8,
    8,
    9,
    9,
    10,
    11,
    9,
    9,
    10,
    10,
    11,
    11
  ], x.t10l = [
    1,
    4,
    7,
    9,
    10,
    10,
    10,
    11,
    4,
    6,
    8,
    9,
    10,
    11,
    10,
    10,
    7,
    8,
    9,
    10,
    11,
    12,
    11,
    11,
    8,
    9,
    10,
    11,
    12,
    12,
    11,
    12,
    9,
    10,
    11,
    12,
    12,
    12,
    12,
    12,
    10,
    11,
    12,
    12,
    13,
    13,
    12,
    13,
    9,
    10,
    11,
    12,
    12,
    12,
    13,
    13,
    10,
    10,
    11,
    12,
    12,
    13,
    13,
    13
  ], x.t11l = [
    2,
    4,
    6,
    8,
    9,
    10,
    9,
    10,
    4,
    5,
    6,
    8,
    10,
    10,
    9,
    10,
    6,
    7,
    8,
    9,
    10,
    11,
    10,
    10,
    8,
    8,
    9,
    11,
    10,
    12,
    10,
    11,
    9,
    10,
    10,
    11,
    11,
    12,
    11,
    12,
    9,
    10,
    11,
    12,
    12,
    13,
    12,
    13,
    9,
    9,
    9,
    10,
    11,
    12,
    12,
    12,
    9,
    9,
    10,
    11,
    12,
    12,
    12,
    12
  ], x.t12l = [
    4,
    4,
    6,
    8,
    9,
    10,
    10,
    10,
    4,
    5,
    6,
    7,
    9,
    9,
    10,
    10,
    6,
    6,
    7,
    8,
    9,
    10,
    9,
    10,
    7,
    7,
    8,
    8,
    9,
    10,
    10,
    10,
    8,
    8,
    9,
    9,
    10,
    10,
    10,
    11,
    9,
    9,
    10,
    10,
    10,
    11,
    10,
    11,
    9,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12
  ], x.t13l = [
    1,
    5,
    7,
    8,
    9,
    10,
    10,
    11,
    10,
    11,
    12,
    12,
    13,
    13,
    14,
    14,
    4,
    6,
    8,
    9,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    13,
    14,
    14,
    14,
    7,
    8,
    9,
    10,
    11,
    11,
    12,
    12,
    11,
    12,
    12,
    13,
    13,
    14,
    15,
    15,
    8,
    9,
    10,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    15,
    15,
    9,
    9,
    11,
    11,
    12,
    12,
    13,
    13,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    16,
    10,
    10,
    11,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    13,
    15,
    15,
    16,
    16,
    10,
    11,
    12,
    12,
    13,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    15,
    15,
    16,
    16,
    11,
    11,
    12,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    15,
    16,
    18,
    18,
    10,
    10,
    11,
    12,
    12,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    16,
    17,
    17,
    11,
    11,
    12,
    12,
    13,
    13,
    13,
    15,
    14,
    15,
    15,
    16,
    16,
    16,
    18,
    17,
    11,
    12,
    12,
    13,
    13,
    14,
    14,
    15,
    14,
    15,
    16,
    15,
    16,
    17,
    18,
    19,
    12,
    12,
    12,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    15,
    16,
    17,
    17,
    17,
    18,
    12,
    13,
    13,
    14,
    14,
    15,
    14,
    15,
    16,
    16,
    17,
    17,
    17,
    18,
    18,
    18,
    13,
    13,
    14,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    16,
    17,
    18,
    17,
    18,
    18,
    14,
    14,
    14,
    15,
    15,
    15,
    17,
    16,
    16,
    19,
    17,
    17,
    17,
    19,
    18,
    18,
    13,
    14,
    15,
    16,
    16,
    16,
    17,
    16,
    17,
    17,
    18,
    18,
    21,
    20,
    21,
    18
  ], x.t15l = [
    3,
    5,
    6,
    8,
    8,
    9,
    10,
    10,
    10,
    11,
    11,
    12,
    12,
    12,
    13,
    14,
    5,
    5,
    7,
    8,
    9,
    9,
    10,
    10,
    10,
    11,
    11,
    12,
    12,
    12,
    13,
    13,
    6,
    7,
    7,
    8,
    9,
    9,
    10,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    13,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    11,
    12,
    12,
    12,
    13,
    13,
    13,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    13,
    13,
    13,
    9,
    9,
    9,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    13,
    13,
    13,
    14,
    10,
    9,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    13,
    13,
    14,
    14,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    14,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    14,
    14,
    14,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    15,
    14,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    15,
    12,
    12,
    11,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    13,
    13,
    14,
    14,
    15,
    15,
    12,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    14,
    15,
    15,
    13,
    13,
    13,
    13,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    14,
    15,
    13,
    13,
    13,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    14,
    15,
    15,
    15,
    15
  ], x.t16_5l = [
    1,
    5,
    7,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    12,
    13,
    13,
    13,
    14,
    11,
    4,
    6,
    8,
    9,
    10,
    11,
    11,
    11,
    12,
    12,
    12,
    13,
    14,
    13,
    14,
    11,
    7,
    8,
    9,
    10,
    11,
    11,
    12,
    12,
    13,
    12,
    13,
    13,
    13,
    14,
    14,
    12,
    9,
    9,
    10,
    11,
    11,
    12,
    12,
    12,
    13,
    13,
    14,
    14,
    14,
    15,
    15,
    13,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    13,
    14,
    14,
    14,
    15,
    15,
    15,
    12,
    10,
    10,
    11,
    11,
    12,
    13,
    13,
    14,
    13,
    14,
    14,
    15,
    15,
    15,
    16,
    13,
    11,
    11,
    11,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    16,
    13,
    11,
    11,
    12,
    12,
    13,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    17,
    17,
    13,
    11,
    12,
    12,
    13,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    13,
    12,
    12,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    15,
    16,
    15,
    14,
    12,
    13,
    12,
    13,
    14,
    14,
    14,
    14,
    15,
    16,
    16,
    16,
    17,
    17,
    16,
    13,
    13,
    13,
    13,
    13,
    14,
    14,
    15,
    16,
    16,
    16,
    16,
    16,
    16,
    15,
    16,
    14,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    15,
    15,
    17,
    16,
    16,
    16,
    16,
    18,
    14,
    15,
    14,
    14,
    14,
    15,
    15,
    16,
    16,
    16,
    18,
    17,
    17,
    17,
    19,
    17,
    14,
    14,
    15,
    13,
    14,
    16,
    16,
    15,
    16,
    16,
    17,
    18,
    17,
    19,
    17,
    16,
    14,
    11,
    11,
    11,
    12,
    12,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    14,
    14,
    14,
    12
  ], x.t16l = [
    1,
    5,
    7,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    12,
    13,
    13,
    13,
    14,
    10,
    4,
    6,
    8,
    9,
    10,
    11,
    11,
    11,
    12,
    12,
    12,
    13,
    14,
    13,
    14,
    10,
    7,
    8,
    9,
    10,
    11,
    11,
    12,
    12,
    13,
    12,
    13,
    13,
    13,
    14,
    14,
    11,
    9,
    9,
    10,
    11,
    11,
    12,
    12,
    12,
    13,
    13,
    14,
    14,
    14,
    15,
    15,
    12,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    13,
    14,
    14,
    14,
    15,
    15,
    15,
    11,
    10,
    10,
    11,
    11,
    12,
    13,
    13,
    14,
    13,
    14,
    14,
    15,
    15,
    15,
    16,
    12,
    11,
    11,
    11,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    16,
    12,
    11,
    11,
    12,
    12,
    13,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    17,
    17,
    12,
    11,
    12,
    12,
    13,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    12,
    12,
    12,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    15,
    16,
    15,
    13,
    12,
    13,
    12,
    13,
    14,
    14,
    14,
    14,
    15,
    16,
    16,
    16,
    17,
    17,
    16,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    15,
    16,
    16,
    16,
    16,
    16,
    16,
    15,
    16,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    15,
    15,
    17,
    16,
    16,
    16,
    16,
    18,
    13,
    15,
    14,
    14,
    14,
    15,
    15,
    16,
    16,
    16,
    18,
    17,
    17,
    17,
    19,
    17,
    13,
    14,
    15,
    13,
    14,
    16,
    16,
    15,
    16,
    16,
    17,
    18,
    17,
    19,
    17,
    16,
    13,
    10,
    10,
    10,
    11,
    11,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    13,
    13,
    13,
    10
  ], x.t24l = [
    4,
    5,
    7,
    8,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    12,
    12,
    12,
    13,
    10,
    5,
    6,
    7,
    8,
    9,
    10,
    10,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    12,
    10,
    7,
    7,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    13,
    9,
    8,
    8,
    9,
    9,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    9,
    10,
    9,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    12,
    9,
    10,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    12,
    13,
    9,
    11,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    12,
    13,
    13,
    10,
    11,
    11,
    11,
    11,
    11,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    10,
    11,
    11,
    11,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    10,
    12,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    10,
    12,
    12,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    10,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    13,
    10,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    13,
    13,
    13,
    10,
    13,
    12,
    12,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    13,
    13,
    13,
    13,
    10,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    6
  ], x.t32l = [
    1,
    5,
    5,
    7,
    5,
    8,
    7,
    9,
    5,
    7,
    7,
    9,
    7,
    9,
    9,
    10
  ], x.t33l = [
    4,
    5,
    5,
    6,
    5,
    6,
    6,
    7,
    5,
    6,
    6,
    7,
    6,
    7,
    7,
    8
  ], x.ht = [
    /* xlen, linmax, table, hlen */
    new i(0, 0, null, null),
    new i(2, 0, x.t1HB, x.t1l),
    new i(3, 0, x.t2HB, x.t2l),
    new i(3, 0, x.t3HB, x.t3l),
    new i(0, 0, null, null),
    /* Apparently not used */
    new i(4, 0, x.t5HB, x.t5l),
    new i(4, 0, x.t6HB, x.t6l),
    new i(6, 0, x.t7HB, x.t7l),
    new i(6, 0, x.t8HB, x.t8l),
    new i(6, 0, x.t9HB, x.t9l),
    new i(8, 0, x.t10HB, x.t10l),
    new i(8, 0, x.t11HB, x.t11l),
    new i(8, 0, x.t12HB, x.t12l),
    new i(16, 0, x.t13HB, x.t13l),
    new i(0, 0, null, x.t16_5l),
    /* Apparently not used */
    new i(16, 0, x.t15HB, x.t15l),
    new i(1, 1, x.t16HB, x.t16l),
    new i(2, 3, x.t16HB, x.t16l),
    new i(3, 7, x.t16HB, x.t16l),
    new i(4, 15, x.t16HB, x.t16l),
    new i(6, 63, x.t16HB, x.t16l),
    new i(8, 255, x.t16HB, x.t16l),
    new i(10, 1023, x.t16HB, x.t16l),
    new i(13, 8191, x.t16HB, x.t16l),
    new i(4, 15, x.t24HB, x.t24l),
    new i(5, 31, x.t24HB, x.t24l),
    new i(6, 63, x.t24HB, x.t24l),
    new i(7, 127, x.t24HB, x.t24l),
    new i(8, 255, x.t24HB, x.t24l),
    new i(9, 511, x.t24HB, x.t24l),
    new i(11, 2047, x.t24HB, x.t24l),
    new i(13, 8191, x.t24HB, x.t24l),
    new i(0, 0, x.t32HB, x.t32l),
    new i(0, 0, x.t33HB, x.t33l)
  ], x.largetbl = [
    65540,
    327685,
    458759,
    589832,
    655369,
    655370,
    720906,
    720907,
    786443,
    786444,
    786444,
    851980,
    851980,
    851980,
    917517,
    655370,
    262149,
    393222,
    524295,
    589832,
    655369,
    720906,
    720906,
    720907,
    786443,
    786443,
    786444,
    851980,
    917516,
    851980,
    917516,
    655370,
    458759,
    524295,
    589832,
    655369,
    720905,
    720906,
    786442,
    786443,
    851979,
    786443,
    851979,
    851980,
    851980,
    917516,
    917517,
    720905,
    589832,
    589832,
    655369,
    720905,
    720906,
    786442,
    786442,
    786443,
    851979,
    851979,
    917515,
    917516,
    917516,
    983052,
    983052,
    786441,
    655369,
    655369,
    720905,
    720906,
    786442,
    786442,
    851978,
    851979,
    851979,
    917515,
    917516,
    917516,
    983052,
    983052,
    983053,
    720905,
    655370,
    655369,
    720906,
    720906,
    786442,
    851978,
    851979,
    917515,
    851979,
    917515,
    917516,
    983052,
    983052,
    983052,
    1048588,
    786441,
    720906,
    720906,
    720906,
    786442,
    851978,
    851979,
    851979,
    851979,
    917515,
    917516,
    917516,
    917516,
    983052,
    983052,
    1048589,
    786441,
    720907,
    720906,
    786442,
    786442,
    851979,
    851979,
    851979,
    917515,
    917516,
    983052,
    983052,
    983052,
    983052,
    1114125,
    1114125,
    786442,
    720907,
    786443,
    786443,
    851979,
    851979,
    851979,
    917515,
    917515,
    983051,
    983052,
    983052,
    983052,
    1048588,
    1048589,
    1048589,
    786442,
    786443,
    786443,
    786443,
    851979,
    851979,
    917515,
    917515,
    983052,
    983052,
    983052,
    983052,
    1048588,
    983053,
    1048589,
    983053,
    851978,
    786444,
    851979,
    786443,
    851979,
    917515,
    917516,
    917516,
    917516,
    983052,
    1048588,
    1048588,
    1048589,
    1114125,
    1114125,
    1048589,
    786442,
    851980,
    851980,
    851979,
    851979,
    917515,
    917516,
    983052,
    1048588,
    1048588,
    1048588,
    1048588,
    1048589,
    1048589,
    983053,
    1048589,
    851978,
    851980,
    917516,
    917516,
    917516,
    917516,
    983052,
    983052,
    983052,
    983052,
    1114124,
    1048589,
    1048589,
    1048589,
    1048589,
    1179661,
    851978,
    983052,
    917516,
    917516,
    917516,
    983052,
    983052,
    1048588,
    1048588,
    1048589,
    1179661,
    1114125,
    1114125,
    1114125,
    1245197,
    1114125,
    851978,
    917517,
    983052,
    851980,
    917516,
    1048588,
    1048588,
    983052,
    1048589,
    1048589,
    1114125,
    1179661,
    1114125,
    1245197,
    1114125,
    1048589,
    851978,
    655369,
    655369,
    655369,
    720905,
    720905,
    786441,
    786441,
    786441,
    851977,
    851977,
    851977,
    851978,
    851978,
    851978,
    851978,
    655366
  ], x.table23 = [
    65538,
    262147,
    458759,
    262148,
    327684,
    458759,
    393222,
    458759,
    524296
  ], x.table56 = [
    65539,
    262148,
    458758,
    524296,
    262148,
    327684,
    524294,
    589831,
    458757,
    524294,
    589831,
    655368,
    524295,
    524295,
    589832,
    655369
  ], x.bitrate_table = [
    [
      0,
      8,
      16,
      24,
      32,
      40,
      48,
      56,
      64,
      80,
      96,
      112,
      128,
      144,
      160,
      -1
    ],
    /* MPEG 2 */
    [
      0,
      32,
      40,
      48,
      56,
      64,
      80,
      96,
      112,
      128,
      160,
      192,
      224,
      256,
      320,
      -1
    ],
    /* MPEG 1 */
    [
      0,
      8,
      16,
      24,
      32,
      40,
      48,
      56,
      64,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ]
  ], x.samplerate_table = [
    [
      22050,
      24e3,
      16e3,
      -1
    ],
    [
      44100,
      48e3,
      32e3,
      -1
    ],
    [
      11025,
      12e3,
      8e3,
      -1
    ]
  ], x.scfsi_band = [
    0,
    6,
    11,
    16,
    21
  ], r0.exports = x;
});
v0.register("84mea", function(r0, _0) {
  var i = v0("7imnH"), x = v0("3YDN3");
  x.System;
  var U = x.VbrMode, Z = x.Float;
  x.ShortBlock;
  var i0 = x.Util;
  x.Arrays, x.new_array_n, x.new_byte, x.new_double;
  var V = x.new_float;
  x.new_float_n;
  var W = x.new_int;
  x.new_int_n;
  var g = x.assert, m = v0("cPNKB"), G = v0("lL4Le"), O = v0("4SDnr");
  M.Q_MAX = 257, M.Q_MAX2 = 116, M.LARGE_BITS = 1e5, M.IXMAX_VAL = 8206;
  function M() {
    var q = v0("ctaQC"), s0 = null, f0 = null, r = null;
    this.setModules = function(k, I, H) {
      s0 = k, f0 = I, r = H;
    };
    function n(k) {
      return g(0 <= k + M.Q_MAX2 && k < M.Q_MAX), T[k + M.Q_MAX2];
    }
    this.IPOW20 = function(k) {
      return g(0 <= k && k < M.Q_MAX), y[k];
    };
    var S = 2220446049250313e-31, p = M.IXMAX_VAL, A = p + 2, b = M.Q_MAX, e = M.Q_MAX2;
    M.LARGE_BITS;
    var l = 100;
    this.nr_of_sfb_block = [
      [
        [
          6,
          5,
          5,
          5
        ],
        [
          9,
          9,
          9,
          9
        ],
        [
          6,
          9,
          9,
          9
        ]
      ],
      [
        [
          6,
          5,
          7,
          3
        ],
        [
          9,
          9,
          12,
          6
        ],
        [
          6,
          9,
          12,
          6
        ]
      ],
      [
        [
          11,
          10,
          0,
          0
        ],
        [
          18,
          18,
          0,
          0
        ],
        [
          15,
          18,
          0,
          0
        ]
      ],
      [
        [
          7,
          7,
          7,
          0
        ],
        [
          12,
          12,
          12,
          0
        ],
        [
          6,
          15,
          12,
          0
        ]
      ],
      [
        [
          6,
          6,
          6,
          3
        ],
        [
          12,
          9,
          9,
          6
        ],
        [
          6,
          12,
          9,
          6
        ]
      ],
      [
        [
          8,
          8,
          5,
          0
        ],
        [
          15,
          12,
          9,
          0
        ],
        [
          6,
          18,
          9,
          0
        ]
      ]
    ];
    var N = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      3,
      3,
      3,
      2,
      0
    ];
    this.pretab = N, this.sfBandIndex = [
      // Table B.2.b: 22.05 kHz
      new i(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          116,
          140,
          168,
          200,
          238,
          284,
          336,
          396,
          464,
          522,
          576
        ],
        [
          0,
          4,
          8,
          12,
          18,
          24,
          32,
          42,
          56,
          74,
          100,
          132,
          174,
          192
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
        //  sfb12 pseudo sub bands
      ),
      /* Table B.2.c: 24 kHz */
      /* docs: 332. mpg123(broken): 330 */
      new i([
        0,
        6,
        12,
        18,
        24,
        30,
        36,
        44,
        54,
        66,
        80,
        96,
        114,
        136,
        162,
        194,
        232,
        278,
        332,
        394,
        464,
        540,
        576
      ], [
        0,
        4,
        8,
        12,
        18,
        26,
        36,
        48,
        62,
        80,
        104,
        136,
        180,
        192
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]),
      /* Table B.2.a: 16 kHz */
      new i([
        0,
        6,
        12,
        18,
        24,
        30,
        36,
        44,
        54,
        66,
        80,
        96,
        116,
        140,
        168,
        200,
        238,
        284,
        336,
        396,
        464,
        522,
        576
      ], [
        0,
        4,
        8,
        12,
        18,
        26,
        36,
        48,
        62,
        80,
        104,
        134,
        174,
        192
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]),
      /* Table B.8.b: 44.1 kHz */
      new i([
        0,
        4,
        8,
        12,
        16,
        20,
        24,
        30,
        36,
        44,
        52,
        62,
        74,
        90,
        110,
        134,
        162,
        196,
        238,
        288,
        342,
        418,
        576
      ], [
        0,
        4,
        8,
        12,
        16,
        22,
        30,
        40,
        52,
        66,
        84,
        106,
        136,
        192
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]),
      /* Table B.8.c: 48 kHz */
      new i([
        0,
        4,
        8,
        12,
        16,
        20,
        24,
        30,
        36,
        42,
        50,
        60,
        72,
        88,
        106,
        128,
        156,
        190,
        230,
        276,
        330,
        384,
        576
      ], [
        0,
        4,
        8,
        12,
        16,
        22,
        28,
        38,
        50,
        64,
        80,
        100,
        126,
        192
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]),
      /* Table B.8.a: 32 kHz */
      new i([
        0,
        4,
        8,
        12,
        16,
        20,
        24,
        30,
        36,
        44,
        54,
        66,
        82,
        102,
        126,
        156,
        194,
        240,
        296,
        364,
        448,
        550,
        576
      ], [
        0,
        4,
        8,
        12,
        16,
        22,
        30,
        42,
        58,
        78,
        104,
        138,
        180,
        192
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]),
      /* MPEG-2.5 11.025 kHz */
      new i([
        0,
        6,
        12,
        18,
        24,
        30,
        36,
        44,
        54,
        66,
        80,
        96,
        116,
        140,
        168,
        200,
        238,
        284,
        336,
        396,
        464,
        522,
        576
      ], [
        0,
        4,
        8,
        12,
        18,
        26,
        36,
        48,
        62,
        80,
        104,
        134,
        174,
        192
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]),
      /* MPEG-2.5 12 kHz */
      new i([
        0,
        6,
        12,
        18,
        24,
        30,
        36,
        44,
        54,
        66,
        80,
        96,
        116,
        140,
        168,
        200,
        238,
        284,
        336,
        396,
        464,
        522,
        576
      ], [
        0,
        4,
        8,
        12,
        18,
        26,
        36,
        48,
        62,
        80,
        104,
        134,
        174,
        192
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]),
      /* MPEG-2.5 8 kHz */
      new i([
        0,
        12,
        24,
        36,
        48,
        60,
        72,
        88,
        108,
        132,
        160,
        192,
        232,
        280,
        336,
        400,
        476,
        566,
        568,
        570,
        572,
        574,
        576
      ], [
        0,
        8,
        16,
        24,
        36,
        52,
        72,
        96,
        124,
        160,
        162,
        164,
        166,
        192
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ], [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ])
    ];
    var T = V(b + e + 1), y = V(b), Q = V(A), f = V(A);
    this.adj43 = f;
    function d(k, I) {
      var H = r.ATHformula(I, k);
      return H -= l, H = Math.pow(10, H / 10 + k.ATHlower), H;
    }
    function C(k) {
      for (var I = k.internal_flags.ATH.l, H = k.internal_flags.ATH.psfb21, K = k.internal_flags.ATH.s, l0 = k.internal_flags.ATH.psfb12, E = k.internal_flags, B = k.out_samplerate, s = 0; s < m.SBMAX_l; s++) {
        var _ = E.scalefac_band.l[s], a = E.scalefac_band.l[s + 1];
        I[s] = Z.MAX_VALUE;
        for (var h = _; h < a; h++) {
          var F = h * B / 1152, J = d(k, F);
          I[s] = Math.min(I[s], J);
        }
      }
      for (var s = 0; s < m.PSFB21; s++) {
        var _ = E.scalefac_band.psfb21[s], a = E.scalefac_band.psfb21[s + 1];
        H[s] = Z.MAX_VALUE;
        for (var h = _; h < a; h++) {
          var F = h * B / 1152, J = d(k, F);
          H[s] = Math.min(H[s], J);
        }
      }
      for (var s = 0; s < m.SBMAX_s; s++) {
        var _ = E.scalefac_band.s[s], a = E.scalefac_band.s[s + 1];
        K[s] = Z.MAX_VALUE;
        for (var h = _; h < a; h++) {
          var F = h * B / 384, J = d(k, F);
          K[s] = Math.min(K[s], J);
        }
        K[s] *= E.scalefac_band.s[s + 1] - E.scalefac_band.s[s];
      }
      for (var s = 0; s < m.PSFB12; s++) {
        var _ = E.scalefac_band.psfb12[s], a = E.scalefac_band.psfb12[s + 1];
        l0[s] = Z.MAX_VALUE;
        for (var h = _; h < a; h++) {
          var F = h * B / 384, J = d(k, F);
          l0[s] = Math.min(l0[s], J);
        }
        l0[s] *= E.scalefac_band.s[13] - E.scalefac_band.s[12];
      }
      if (k.noATH) {
        for (var s = 0; s < m.SBMAX_l; s++)
          I[s] = 1e-20;
        for (var s = 0; s < m.PSFB21; s++)
          H[s] = 1e-20;
        for (var s = 0; s < m.SBMAX_s; s++)
          K[s] = 1e-20;
        for (var s = 0; s < m.PSFB12; s++)
          l0[s] = 1e-20;
      }
      E.ATH.floor = 10 * Math.log10(d(k, -1));
    }
    this.iteration_init = function(k) {
      var I = k.internal_flags, H = I.l3_side, K;
      if (I.iteration_init_init == 0) {
        for (I.iteration_init_init = 1, H.main_data_begin = 0, C(k), Q[0] = 0, K = 1; K < A; K++)
          Q[K] = Math.pow(K, 4 / 3);
        for (K = 0; K < A - 1; K++)
          f[K] = K + 1 - Math.pow(0.5 * (Q[K] + Q[K + 1]), 0.75);
        for (f[K] = 0.5, K = 0; K < b; K++)
          y[K] = Math.pow(2, (K - 210) * -0.1875);
        for (K = 0; K <= b + e; K++)
          T[K] = Math.pow(2, (K - 210 - e) * 0.25);
        s0.huffman_init(I);
        var l0, E, B, s;
        for (K = k.exp_nspsytune >> 2 & 63, K >= 32 && (K -= 64), l0 = Math.pow(10, K / 4 / 10), K = k.exp_nspsytune >> 8 & 63, K >= 32 && (K -= 64), E = Math.pow(10, K / 4 / 10), K = k.exp_nspsytune >> 14 & 63, K >= 32 && (K -= 64), B = Math.pow(10, K / 4 / 10), K = k.exp_nspsytune >> 20 & 63, K >= 32 && (K -= 64), s = B * Math.pow(10, K / 4 / 10), K = 0; K < m.SBMAX_l; K++) {
          var _;
          K <= 6 ? _ = l0 : K <= 13 ? _ = E : K <= 20 ? _ = B : _ = s, I.nsPsy.longfact[K] = _;
        }
        for (K = 0; K < m.SBMAX_s; K++) {
          var _;
          K <= 5 ? _ = l0 : K <= 10 ? _ = E : K <= 11 ? _ = B : _ = s, I.nsPsy.shortfact[K] = _;
        }
      }
    }, this.on_pe = function(k, I, H, K, l0, E) {
      var B = k.internal_flags, s = 0, _, a = W(2), h, F = new G(s), J = f0.ResvMaxBits(k, K, F, E);
      s = F.bits;
      var X = s + J;
      for (X > O.MAX_BITS_PER_GRANULE && (X = O.MAX_BITS_PER_GRANULE), _ = 0, h = 0; h < B.channels_out; ++h)
        H[h] = Math.min(O.MAX_BITS_PER_CHANNEL, s / B.channels_out), a[h] = 0 | H[h] * I[l0][h] / 700 - H[h], a[h] > K * 3 / 4 && (a[h] = K * 3 / 4), a[h] < 0 && (a[h] = 0), a[h] + H[h] > O.MAX_BITS_PER_CHANNEL && (a[h] = Math.max(0, O.MAX_BITS_PER_CHANNEL - H[h])), _ += a[h];
      if (_ > J)
        for (h = 0; h < B.channels_out; ++h)
          a[h] = J * a[h] / _;
      for (h = 0; h < B.channels_out; ++h)
        H[h] += a[h], J -= a[h];
      for (_ = 0, h = 0; h < B.channels_out; ++h)
        _ += H[h];
      if (_ > O.MAX_BITS_PER_GRANULE) {
        var $ = 0;
        for (h = 0; h < B.channels_out; ++h)
          H[h] *= O.MAX_BITS_PER_GRANULE, H[h] /= _, $ += H[h];
        g($ <= O.MAX_BITS_PER_GRANULE);
      }
      return X;
    }, this.reduce_side = function(k, I, H, K) {
      g(K <= O.MAX_BITS_PER_GRANULE), g(k[0] + k[1] <= O.MAX_BITS_PER_GRANULE);
      var l0 = 0.33 * (0.5 - I) / 0.5;
      l0 < 0 && (l0 = 0), l0 > 0.5 && (l0 = 0.5);
      var E = 0 | l0 * 0.5 * (k[0] + k[1]);
      E > O.MAX_BITS_PER_CHANNEL - k[0] && (E = O.MAX_BITS_PER_CHANNEL - k[0]), E < 0 && (E = 0), k[1] >= 125 && (k[1] - E > 125 ? (k[0] < H && (k[0] += E), k[1] -= E) : (k[0] += k[1] - 125, k[1] = 125)), E = k[0] + k[1], E > K && (k[0] = K * k[0] / E, k[1] = K * k[1] / E), g(k[0] <= O.MAX_BITS_PER_CHANNEL), g(k[1] <= O.MAX_BITS_PER_CHANNEL), g(k[0] + k[1] <= O.MAX_BITS_PER_GRANULE);
    }, this.athAdjust = function(k, I, H) {
      var K = 90.30873362, l0 = 94.82444863, E = i0.FAST_LOG10_X(I, 10), B = k * k, s = 0;
      return E -= H, B > 1e-20 && (s = 1 + i0.FAST_LOG10_X(B, 10 / K)), s < 0 && (s = 0), E *= s, E += H + K - l0, Math.pow(10, 0.1 * E);
    }, this.calc_xmin = function(k, I, H, K) {
      var l0 = 0, E = k.internal_flags, B, s = 0, _ = 0, a = E.ATH, h = H.xr, F = k.VBR == U.vbr_mtrh ? 1 : 0, J = E.masking_lower;
      for ((k.VBR == U.vbr_mtrh || k.VBR == U.vbr_mt) && (J = 1), B = 0; B < H.psy_lmax; B++) {
        var X, $, e0, o0, b0, $0;
        k.VBR == U.vbr_rh || k.VBR == U.vbr_mtrh ? $ = athAdjust(a.adjust, a.l[B], a.floor) : $ = a.adjust * a.l[B], b0 = H.width[B], e0 = $ / b0, o0 = S, $0 = b0 >> 1, X = 0;
        do {
          var S0, R0;
          S0 = h[s] * h[s], X += S0, o0 += S0 < e0 ? S0 : e0, s++, R0 = h[s] * h[s], X += R0, o0 += R0 < e0 ? R0 : e0, s++;
        } while (--$0 > 0);
        if (X > $ && _++, B == m.SBPSY_l) {
          var p0 = $ * E.nsPsy.longfact[B];
          o0 < p0 && (o0 = p0);
        }
        if (F != 0 && ($ = o0), !k.ATHonly) {
          var Y0 = I.en.l[B];
          if (Y0 > 0) {
            var p0;
            p0 = X * I.thm.l[B] * J / Y0, F != 0 && (p0 *= E.nsPsy.longfact[B]), $ < p0 && ($ = p0);
          }
        }
        F != 0 ? K[l0++] = $ : K[l0++] = $ * E.nsPsy.longfact[B];
      }
      var J0 = 575;
      if (H.block_type != m.SHORT_TYPE)
        for (var t = 576; t-- != 0 && q.EQ(h[t], 0); )
          J0 = t;
      H.max_nonzero_coeff = J0;
      for (var o = H.sfb_smin; B < H.psymax; o++, B += 3) {
        var b0, A0, M0;
        for (k.VBR == U.vbr_rh || k.VBR == U.vbr_mtrh ? M0 = athAdjust(a.adjust, a.s[o], a.floor) : M0 = a.adjust * a.s[o], b0 = H.width[B], A0 = 0; A0 < 3; A0++) {
          var X = 0, $, e0, o0, $0 = b0 >> 1;
          e0 = M0 / b0, o0 = S;
          do {
            var S0, R0;
            S0 = h[s] * h[s], X += S0, o0 += S0 < e0 ? S0 : e0, s++, R0 = h[s] * h[s], X += R0, o0 += R0 < e0 ? R0 : e0, s++;
          } while (--$0 > 0);
          if (X > M0 && _++, o == m.SBPSY_s) {
            var p0 = M0 * E.nsPsy.shortfact[o];
            o0 < p0 && (o0 = p0);
          }
          if (F != 0 ? $ = o0 : $ = M0, !k.ATHonly && !k.ATHshort) {
            var Y0 = I.en.s[o][A0];
            if (Y0 > 0) {
              var p0;
              p0 = X * I.thm.s[o][A0] * J / Y0, F != 0 && (p0 *= E.nsPsy.shortfact[o]), $ < p0 && ($ = p0);
            }
          }
          F != 0 ? K[l0++] = $ : K[l0++] = $ * E.nsPsy.shortfact[o];
        }
        k.useTemporal && (K[l0 - 3] > K[l0 - 3 + 1] && (K[l0 - 3 + 1] += (K[l0 - 3] - K[l0 - 3 + 1]) * E.decay), K[l0 - 3 + 1] > K[l0 - 3 + 2] && (K[l0 - 3 + 2] += (K[l0 - 3 + 1] - K[l0 - 3 + 2]) * E.decay));
      }
      return _;
    };
    function v(k) {
      this.s = k;
    }
    this.calc_noise_core = function(k, I, H, K) {
      var l0 = 0, E = I.s, B = k.l3_enc;
      if (E > k.count1)
        for (; H-- != 0; ) {
          var s;
          s = k.xr[E], E++, l0 += s * s, s = k.xr[E], E++, l0 += s * s;
        }
      else if (E > k.big_values) {
        var _ = V(2);
        for (_[0] = 0, _[1] = K; H-- != 0; ) {
          var s;
          s = Math.abs(k.xr[E]) - _[B[E]], E++, l0 += s * s, s = Math.abs(k.xr[E]) - _[B[E]], E++, l0 += s * s;
        }
      } else
        for (; H-- != 0; ) {
          var s;
          s = Math.abs(k.xr[E]) - Q[B[E]] * K, E++, l0 += s * s, s = Math.abs(k.xr[E]) - Q[B[E]] * K, E++, l0 += s * s;
        }
      return I.s = E, l0;
    }, this.calc_noise = function(k, I, H, K, l0) {
      var E = 0, B = 0, s, _, a = 0, h = 0, F = 0, J = -20, X = 0, $ = k.scalefac, e0 = 0;
      for (K.over_SSD = 0, s = 0; s < k.psymax; s++) {
        var o0 = k.global_gain - ($[e0++] + (k.preflag != 0 ? N[s] : 0) << k.scalefac_scale + 1) - k.subblock_gain[k.window[s]] * 8, b0 = 0;
        if (l0 != null && l0.step[s] == o0)
          b0 = l0.noise[s], X += k.width[s], H[E++] = b0 / I[B++], b0 = l0.noise_log[s];
        else {
          var $0 = n(o0);
          if (_ = k.width[s] >> 1, X + k.width[s] > k.max_nonzero_coeff) {
            var S0;
            S0 = k.max_nonzero_coeff - X + 1, S0 > 0 ? _ = S0 >> 1 : _ = 0;
          }
          var R0 = new v(X);
          b0 = this.calc_noise_core(k, R0, _, $0), X = R0.s, l0 != null && (l0.step[s] = o0, l0.noise[s] = b0), b0 = H[E++] = b0 / I[B++], b0 = i0.FAST_LOG10(Math.max(b0, 1e-20)), l0 != null && (l0.noise_log[s] = b0);
        }
        if (l0 != null && (l0.global_gain = k.global_gain), F += b0, b0 > 0) {
          var p0;
          p0 = Math.max(0 | b0 * 10 + 0.5, 1), K.over_SSD += p0 * p0, a++, h += b0;
        }
        J = Math.max(J, b0);
      }
      return K.over_count = a, K.tot_noise = F, K.over_noise = h, K.max_noise = J, a;
    }, this.set_pinfo = function(k, I, H, K, l0) {
      var E = k.internal_flags, B, s, _, a, h, F = I.scalefac_scale == 0 ? 0.5 : 1, J = I.scalefac, X = V(L3Side.SFBMAX), $ = V(L3Side.SFBMAX), e0 = new CalcNoiseResult();
      calc_xmin(k, H, I, X), calc_noise(I, X, $, e0, null);
      var o0 = 0;
      for (s = I.sfb_lmax, I.block_type != m.SHORT_TYPE && I.mixed_block_flag == 0 && (s = 22), B = 0; B < s; B++) {
        var b0 = E.scalefac_band.l[B], $0 = E.scalefac_band.l[B + 1], S0 = $0 - b0;
        for (a = 0; o0 < $0; o0++)
          a += I.xr[o0] * I.xr[o0];
        a /= S0, h = 1e15, E.pinfo.en[K][l0][B] = h * a, E.pinfo.xfsf[K][l0][B] = h * X[B] * $[B] / S0, H.en.l[B] > 0 && !k.ATHonly ? a = a / H.en.l[B] : a = 0, E.pinfo.thr[K][l0][B] = h * Math.max(a * H.thm.l[B], E.ATH.l[B]), E.pinfo.LAMEsfb[K][l0][B] = 0, I.preflag != 0 && B >= 11 && (E.pinfo.LAMEsfb[K][l0][B] = -F * N[B]), B < m.SBPSY_l && (g(J[B] >= 0), E.pinfo.LAMEsfb[K][l0][B] -= F * J[B]);
      }
      if (I.block_type == m.SHORT_TYPE)
        for (s = B, B = I.sfb_smin; B < m.SBMAX_s; B++)
          for (var b0 = E.scalefac_band.s[B], $0 = E.scalefac_band.s[B + 1], S0 = $0 - b0, R0 = 0; R0 < 3; R0++) {
            for (a = 0, _ = b0; _ < $0; _++)
              a += I.xr[o0] * I.xr[o0], o0++;
            a = Math.max(a / S0, 1e-20), h = 1e15, E.pinfo.en_s[K][l0][3 * B + R0] = h * a, E.pinfo.xfsf_s[K][l0][3 * B + R0] = h * X[s] * $[s] / S0, H.en.s[B][R0] > 0 ? a = a / H.en.s[B][R0] : a = 0, (k.ATHonly || k.ATHshort) && (a = 0), E.pinfo.thr_s[K][l0][3 * B + R0] = h * Math.max(a * H.thm.s[B][R0], E.ATH.s[B]), E.pinfo.LAMEsfb_s[K][l0][3 * B + R0] = -2 * I.subblock_gain[R0], B < m.SBPSY_s && (E.pinfo.LAMEsfb_s[K][l0][3 * B + R0] -= F * J[s]), s++;
          }
      E.pinfo.LAMEqss[K][l0] = I.global_gain, E.pinfo.LAMEmainbits[K][l0] = I.part2_3_length + I.part2_length, E.pinfo.LAMEsfbits[K][l0] = I.part2_length, E.pinfo.over[K][l0] = e0.over_count, E.pinfo.max_noise[K][l0] = e0.max_noise * 10, E.pinfo.over_noise[K][l0] = e0.over_noise * 10, E.pinfo.tot_noise[K][l0] = e0.tot_noise * 10, E.pinfo.over_SSD[K][l0] = e0.over_SSD;
    };
  }
  r0.exports = M;
});
var be = {};
ue(be, "Mp3Encoder", () => X1, (r0) => X1 = r0);
ue(be, "WavHeader", () => D1, (r0) => D1 = r0);
var X1, D1, y0 = v0("3YDN3");
y0.System;
y0.VbrMode;
y0.Float;
y0.ShortBlock;
y0.Util;
y0.Arrays;
y0.new_array_n;
var ie = y0.new_byte;
y0.new_double;
y0.new_float;
y0.new_float_n;
y0.new_int;
y0.new_int_n;
var _e = y0.assert, we = v0("kk1yk"), de = {}, y0 = v0("3YDN3");
y0.System;
var d1 = y0.VbrMode;
y0.Float;
y0.ShortBlock;
y0.Util;
y0.Arrays;
y0.new_array_n;
y0.new_byte;
y0.new_double;
y0.new_float;
y0.new_float_n;
y0.new_int;
y0.new_int_n;
y0.assert;
function Te() {
  var r0 = v0("kk1yk");
  function _0(m, G, O, M, q, s0, f0, r, n, S, p, A, b, e, l) {
    this.vbr_q = m, this.quant_comp = G, this.quant_comp_s = O, this.expY = M, this.st_lrm = q, this.st_s = s0, this.masking_adj = f0, this.masking_adj_short = r, this.ath_lower = n, this.ath_curve = S, this.ath_sensitivity = p, this.interch = A, this.safejoint = b, this.sfb21mod = e, this.msfix = l;
  }
  function i(m, G, O, M, q, s0, f0, r, n, S, p, A, b, e) {
    this.quant_comp = G, this.quant_comp_s = O, this.safejoint = M, this.nsmsfix = q, this.st_lrm = s0, this.st_s = f0, this.nsbass = r, this.scale = n, this.masking_adj = S, this.ath_lower = p, this.ath_curve = A, this.interch = b, this.sfscale = e;
  }
  var x;
  this.setModules = function(m) {
    x = m;
  };
  var U = [
    new _0(0, 9, 9, 0, 5.2, 125, -4.2, -6.3, 4.8, 1, 0, 0, 2, 21, 0.97),
    new _0(1, 9, 9, 0, 5.3, 125, -3.6, -5.6, 4.5, 1.5, 0, 0, 2, 21, 1.35),
    new _0(2, 9, 9, 0, 5.6, 125, -2.2, -3.5, 2.8, 2, 0, 0, 2, 21, 1.49),
    new _0(3, 9, 9, 1, 5.8, 130, -1.8, -2.8, 2.6, 3, -4, 0, 2, 20, 1.64),
    new _0(4, 9, 9, 1, 6, 135, -0.7, -1.1, 1.1, 3.5, -8, 0, 2, 0, 1.79),
    new _0(5, 9, 9, 1, 6.4, 140, 0.5, 0.4, -7.5, 4, -12, 2e-4, 0, 0, 1.95),
    new _0(6, 9, 9, 1, 6.6, 145, 0.67, 0.65, -14.7, 6.5, -19, 4e-4, 0, 0, 2.3),
    new _0(7, 9, 9, 1, 6.6, 145, 0.8, 0.75, -19.7, 8, -22, 6e-4, 0, 0, 2.7),
    new _0(8, 9, 9, 1, 6.6, 145, 1.2, 1.15, -27.5, 10, -23, 7e-4, 0, 0, 0),
    new _0(9, 9, 9, 1, 6.6, 145, 1.6, 1.6, -36, 11, -25, 8e-4, 0, 0, 0),
    new _0(10, 9, 9, 1, 6.6, 145, 2, 2, -36, 12, -25, 8e-4, 0, 0, 0)
  ], Z = [
    new _0(0, 9, 9, 0, 4.2, 25, -7, -4, 7.5, 1, 0, 0, 2, 26, 0.97),
    new _0(1, 9, 9, 0, 4.2, 25, -5.6, -3.6, 4.5, 1.5, 0, 0, 2, 21, 1.35),
    new _0(2, 9, 9, 0, 4.2, 25, -4.4, -1.8, 2, 2, 0, 0, 2, 18, 1.49),
    new _0(3, 9, 9, 1, 4.2, 25, -3.4, -1.25, 1.1, 3, -4, 0, 2, 15, 1.64),
    new _0(4, 9, 9, 1, 4.2, 25, -2.2, 0.1, 0, 3.5, -8, 0, 2, 0, 1.79),
    new _0(5, 9, 9, 1, 4.2, 25, -1, 1.65, -7.7, 4, -12, 2e-4, 0, 0, 1.95),
    new _0(6, 9, 9, 1, 4.2, 25, -0, 2.47, -7.7, 6.5, -19, 4e-4, 0, 0, 2),
    new _0(7, 9, 9, 1, 4.2, 25, 0.5, 2, -14.5, 8, -22, 6e-4, 0, 0, 2),
    new _0(8, 9, 9, 1, 4.2, 25, 1, 2.4, -22, 10, -23, 7e-4, 0, 0, 2),
    new _0(9, 9, 9, 1, 4.2, 25, 1.5, 2.95, -30, 11, -25, 8e-4, 0, 0, 2),
    new _0(10, 9, 9, 1, 4.2, 25, 2, 2.95, -36, 12, -30, 8e-4, 0, 0, 2)
  ];
  function i0(m, G, O) {
    var M = m.VBR == d1.vbr_rh ? U : Z, q = m.VBR_q_frac, s0 = M[G], f0 = M[G + 1], r = s0;
    s0.st_lrm = s0.st_lrm + q * (f0.st_lrm - s0.st_lrm), s0.st_s = s0.st_s + q * (f0.st_s - s0.st_s), s0.masking_adj = s0.masking_adj + q * (f0.masking_adj - s0.masking_adj), s0.masking_adj_short = s0.masking_adj_short + q * (f0.masking_adj_short - s0.masking_adj_short), s0.ath_lower = s0.ath_lower + q * (f0.ath_lower - s0.ath_lower), s0.ath_curve = s0.ath_curve + q * (f0.ath_curve - s0.ath_curve), s0.ath_sensitivity = s0.ath_sensitivity + q * (f0.ath_sensitivity - s0.ath_sensitivity), s0.interch = s0.interch + q * (f0.interch - s0.interch), s0.msfix = s0.msfix + q * (f0.msfix - s0.msfix), g(m, r.vbr_q), O != 0 ? m.quant_comp = r.quant_comp : Math.abs(m.quant_comp - -1) > 0 || (m.quant_comp = r.quant_comp), O != 0 ? m.quant_comp_short = r.quant_comp_s : Math.abs(m.quant_comp_short - -1) > 0 || (m.quant_comp_short = r.quant_comp_s), r.expY != 0 && (m.experimentalY = r.expY != 0), O != 0 ? m.internal_flags.nsPsy.attackthre = r.st_lrm : Math.abs(m.internal_flags.nsPsy.attackthre - -1) > 0 || (m.internal_flags.nsPsy.attackthre = r.st_lrm), O != 0 ? m.internal_flags.nsPsy.attackthre_s = r.st_s : Math.abs(m.internal_flags.nsPsy.attackthre_s - -1) > 0 || (m.internal_flags.nsPsy.attackthre_s = r.st_s), O != 0 ? m.maskingadjust = r.masking_adj : Math.abs(m.maskingadjust - 0) > 0 || (m.maskingadjust = r.masking_adj), O != 0 ? m.maskingadjust_short = r.masking_adj_short : Math.abs(m.maskingadjust_short - 0) > 0 || (m.maskingadjust_short = r.masking_adj_short), O != 0 ? m.ATHlower = -r.ath_lower / 10 : Math.abs(-m.ATHlower * 10 - 0) > 0 || (m.ATHlower = -r.ath_lower / 10), O != 0 ? m.ATHcurve = r.ath_curve : Math.abs(m.ATHcurve - -1) > 0 || (m.ATHcurve = r.ath_curve), O != 0 ? m.athaa_sensitivity = r.ath_sensitivity : Math.abs(m.athaa_sensitivity - -1) > 0 || (m.athaa_sensitivity = r.ath_sensitivity), r.interch > 0 && (O != 0 ? m.interChRatio = r.interch : Math.abs(m.interChRatio - -1) > 0 || (m.interChRatio = r.interch)), r.safejoint > 0 && (m.exp_nspsytune = m.exp_nspsytune | r.safejoint), r.sfb21mod > 0 && (m.exp_nspsytune = m.exp_nspsytune | r.sfb21mod << 20), O != 0 ? m.msfix = r.msfix : Math.abs(m.msfix - -1) > 0 || (m.msfix = r.msfix), O == 0 && (m.VBR_q = G, m.VBR_q_frac = q);
  }
  var V = [
    new i(8, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -30, 11, 12e-4, 1),
    /*   8, impossible to use in stereo */
    new i(16, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -25, 11, 1e-3, 1),
    /*  16 */
    new i(24, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -20, 11, 1e-3, 1),
    /*  24 */
    new i(32, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -15, 11, 1e-3, 1),
    /*  32 */
    new i(40, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -10, 11, 9e-4, 1),
    /*  40 */
    new i(48, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -10, 11, 9e-4, 1),
    /*  48 */
    new i(56, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -6, 11, 8e-4, 1),
    /*  56 */
    new i(64, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -2, 11, 8e-4, 1),
    /*  64 */
    new i(80, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, 0, 8, 7e-4, 1),
    /*  80 */
    new i(96, 9, 9, 0, 2.5, 6.6, 145, 0, 0.95, 0, 1, 5.5, 6e-4, 1),
    /*  96 */
    new i(112, 9, 9, 0, 2.25, 6.6, 145, 0, 0.95, 0, 2, 4.5, 5e-4, 1),
    /* 112 */
    new i(128, 9, 9, 0, 1.95, 6.4, 140, 0, 0.95, 0, 3, 4, 2e-4, 1),
    /* 128 */
    new i(160, 9, 9, 1, 1.79, 6, 135, 0, 0.95, -2, 5, 3.5, 0, 1),
    /* 160 */
    new i(192, 9, 9, 1, 1.49, 5.6, 125, 0, 0.97, -4, 7, 3, 0, 0),
    /* 192 */
    new i(224, 9, 9, 1, 1.25, 5.2, 125, 0, 0.98, -6, 9, 2, 0, 0),
    /* 224 */
    new i(256, 9, 9, 1, 0.97, 5.2, 125, 0, 1, -8, 10, 1, 0, 0),
    /* 256 */
    new i(320, 9, 9, 1, 0.9, 5.2, 125, 0, 1, -10, 12, 0, 0, 0)
  ];
  function W(m, G, O) {
    var M = G, q = x.nearestBitrateFullIndex(G);
    if (m.VBR = d1.vbr_abr, m.VBR_mean_bitrate_kbps = M, m.VBR_mean_bitrate_kbps = Math.min(m.VBR_mean_bitrate_kbps, 320), m.VBR_mean_bitrate_kbps = Math.max(m.VBR_mean_bitrate_kbps, 8), m.brate = m.VBR_mean_bitrate_kbps, m.VBR_mean_bitrate_kbps > 320 && (m.disable_reservoir = !0), V[q].safejoint > 0 && (m.exp_nspsytune = m.exp_nspsytune | 2), V[q].sfscale > 0 && (m.internal_flags.noise_shaping = 2), Math.abs(V[q].nsbass) > 0) {
      var s0 = int(V[q].nsbass * 4);
      s0 < 0 && (s0 += 64), m.exp_nspsytune = m.exp_nspsytune | s0 << 2;
    }
    return O != 0 ? m.quant_comp = V[q].quant_comp : Math.abs(m.quant_comp - -1) > 0 || (m.quant_comp = V[q].quant_comp), O != 0 ? m.quant_comp_short = V[q].quant_comp_s : Math.abs(m.quant_comp_short - -1) > 0 || (m.quant_comp_short = V[q].quant_comp_s), O != 0 ? m.msfix = V[q].nsmsfix : Math.abs(m.msfix - -1) > 0 || (m.msfix = V[q].nsmsfix), O != 0 ? m.internal_flags.nsPsy.attackthre = V[q].st_lrm : Math.abs(m.internal_flags.nsPsy.attackthre - -1) > 0 || (m.internal_flags.nsPsy.attackthre = V[q].st_lrm), O != 0 ? m.internal_flags.nsPsy.attackthre_s = V[q].st_s : Math.abs(m.internal_flags.nsPsy.attackthre_s - -1) > 0 || (m.internal_flags.nsPsy.attackthre_s = V[q].st_s), O != 0 ? m.scale = V[q].scale : Math.abs(m.scale - -1) > 0 || (m.scale = V[q].scale), O != 0 ? m.maskingadjust = V[q].masking_adj : Math.abs(m.maskingadjust - 0) > 0 || (m.maskingadjust = V[q].masking_adj), V[q].masking_adj > 0 ? O != 0 ? m.maskingadjust_short = V[q].masking_adj * 0.9 : Math.abs(m.maskingadjust_short - 0) > 0 || (m.maskingadjust_short = V[q].masking_adj * 0.9) : O != 0 ? m.maskingadjust_short = V[q].masking_adj * 1.1 : Math.abs(m.maskingadjust_short - 0) > 0 || (m.maskingadjust_short = V[q].masking_adj * 1.1), O != 0 ? m.ATHlower = -V[q].ath_lower / 10 : Math.abs(-m.ATHlower * 10 - 0) > 0 || (m.ATHlower = -V[q].ath_lower / 10), O != 0 ? m.ATHcurve = V[q].ath_curve : Math.abs(m.ATHcurve - -1) > 0 || (m.ATHcurve = V[q].ath_curve), O != 0 ? m.interChRatio = V[q].interch : Math.abs(m.interChRatio - -1) > 0 || (m.interChRatio = V[q].interch), G;
  }
  this.apply_preset = function(m, G, O) {
    switch (G) {
      case r0.R3MIX:
        G = r0.V3, m.VBR = d1.vbr_mtrh;
        break;
      case r0.MEDIUM:
        G = r0.V4, m.VBR = d1.vbr_rh;
        break;
      case r0.MEDIUM_FAST:
        G = r0.V4, m.VBR = d1.vbr_mtrh;
        break;
      case r0.STANDARD:
        G = r0.V2, m.VBR = d1.vbr_rh;
        break;
      case r0.STANDARD_FAST:
        G = r0.V2, m.VBR = d1.vbr_mtrh;
        break;
      case r0.EXTREME:
        G = r0.V0, m.VBR = d1.vbr_rh;
        break;
      case r0.EXTREME_FAST:
        G = r0.V0, m.VBR = d1.vbr_mtrh;
        break;
      case r0.INSANE:
        return G = 320, m.preset = G, W(m, G, O), m.VBR = d1.vbr_off, G;
    }
    switch (m.preset = G, G) {
      case r0.V9:
        return i0(m, 9, O), G;
      case r0.V8:
        return i0(m, 8, O), G;
      case r0.V7:
        return i0(m, 7, O), G;
      case r0.V6:
        return i0(m, 6, O), G;
      case r0.V5:
        return i0(m, 5, O), G;
      case r0.V4:
        return i0(m, 4, O), G;
      case r0.V3:
        return i0(m, 3, O), G;
      case r0.V2:
        return i0(m, 2, O), G;
      case r0.V1:
        return i0(m, 1, O), G;
      case r0.V0:
        return i0(m, 0, O), G;
    }
    return 8 <= G && G <= 320 ? W(m, G, O) : (m.preset = 0, G);
  };
  function g(m, G) {
    var O = 0;
    return 0 > G && (O = -1, G = 0), 9 < G && (O = -1, G = 9), m.VBR_q = G, m.VBR_q_frac = 0, O;
  }
}
de = Te;
var ye = v0("b8dhq"), $e = v0("84mea"), xe = {}, y0 = v0("3YDN3"), R1 = y0.System, le = y0.VbrMode;
y0.Float;
y0.ShortBlock;
var J1 = y0.Util, w1 = y0.Arrays;
y0.new_array_n;
y0.new_byte;
y0.new_double;
var L1 = y0.new_float;
y0.new_float_n;
y0.new_int;
y0.new_int_n;
var v1 = y0.assert, me = {};
function pe() {
  this.setModules = function(r0, _0) {
  };
}
me = pe;
var Y1 = {};
function Ne() {
  this.over_noise = 0, this.tot_noise = 0, this.max_noise = 0, this.over_count = 0, this.over_SSD = 0, this.bits = 0;
}
Y1 = Ne;
var Se = {}, y0 = v0("3YDN3"), ve = y0.new_float, Ie = y0.new_int;
y0.assert;
function Le() {
  this.global_gain = 0, this.sfb_count1 = 0, this.step = Ie(39), this.noise = ve(39), this.noise_log = ve(39);
}
Se = Le;
var D0 = v0("cPNKB"), oe = v0("7weBo"), fe = v0("arIi9");
function He() {
  var r0;
  this.rv = null;
  var _0;
  this.qupvt = null;
  var i, x = new me(), U;
  this.setModules = function(r, n, S, p) {
    r0 = r, _0 = n, this.rv = n, i = S, this.qupvt = S, U = p, x.setModules(i, U);
  }, this.ms_convert = function(r, n) {
    for (var S = 0; S < 576; ++S) {
      var p = r.tt[n][0].xr[S], A = r.tt[n][1].xr[S];
      r.tt[n][0].xr[S] = (p + A) * (J1.SQRT2 * 0.5), r.tt[n][1].xr[S] = (p - A) * (J1.SQRT2 * 0.5);
    }
  };
  function Z(r, n, S, p) {
    p = 0;
    for (var A = 0; A <= S; ++A) {
      var b = Math.abs(r.xr[A]);
      p += b, n[A] = Math.sqrt(b * Math.sqrt(b)), n[A] > r.xrpow_max && (r.xrpow_max = n[A]);
    }
    return p;
  }
  this.init_xrpow = function(r, n, S) {
    var p = 0, A = 0 | n.max_nonzero_coeff;
    if (v1(S != null), n.xrpow_max = 0, v1(0 <= A && A <= 575), w1.fill(S, A, 576, 0), p = Z(n, S, A, p), p > 1e-20) {
      var b = 0;
      r.substep_shaping & 2 && (b = 1);
      for (var e = 0; e < n.psymax; e++)
        r.pseudohalf[e] = b;
      return !0;
    }
    return w1.fill(n.l3_enc, 0, 576, 0), !1;
  };
  function i0(r, n) {
    var S = r.ATH, p = n.xr;
    if (n.block_type != D0.SHORT_TYPE)
      for (var A = !1, b = D0.PSFB21 - 1; b >= 0 && !A; b--) {
        var e = r.scalefac_band.psfb21[b], l = r.scalefac_band.psfb21[b + 1], N = i.athAdjust(S.adjust, S.psfb21[b], S.floor);
        r.nsPsy.longfact[21] > 1e-12 && (N *= r.nsPsy.longfact[21]);
        for (var T = l - 1; T >= e; T--)
          if (Math.abs(p[T]) < N)
            p[T] = 0;
          else {
            A = !0;
            break;
          }
      }
    else
      for (var y = 0; y < 3; y++)
        for (var A = !1, b = D0.PSFB12 - 1; b >= 0 && !A; b--) {
          var e = r.scalefac_band.s[12] * 3 + (r.scalefac_band.s[13] - r.scalefac_band.s[12]) * y + (r.scalefac_band.psfb12[b] - r.scalefac_band.psfb12[0]), l = e + (r.scalefac_band.psfb12[b + 1] - r.scalefac_band.psfb12[b]), Q = i.athAdjust(S.adjust, S.psfb12[b], S.floor);
          r.nsPsy.shortfact[12] > 1e-12 && (Q *= r.nsPsy.shortfact[12]);
          for (var T = l - 1; T >= e; T--)
            if (Math.abs(p[T]) < Q)
              p[T] = 0;
            else {
              A = !0;
              break;
            }
        }
  }
  this.init_outer_loop = function(r, n) {
    n.part2_3_length = 0, n.big_values = 0, n.count1 = 0, n.global_gain = 210, n.scalefac_compress = 0, n.table_select[0] = 0, n.table_select[1] = 0, n.table_select[2] = 0, n.subblock_gain[0] = 0, n.subblock_gain[1] = 0, n.subblock_gain[2] = 0, n.subblock_gain[3] = 0, n.region0_count = 0, n.region1_count = 0, n.preflag = 0, n.scalefac_scale = 0, n.count1table_select = 0, n.part2_length = 0, n.sfb_lmax = D0.SBPSY_l, n.sfb_smin = D0.SBPSY_s, n.psy_lmax = r.sfb21_extra ? D0.SBMAX_l : D0.SBPSY_l, n.psymax = n.psy_lmax, n.sfbmax = n.sfb_lmax, n.sfbdivide = 11;
    for (var S = 0; S < D0.SBMAX_l; S++)
      n.width[S] = r.scalefac_band.l[S + 1] - r.scalefac_band.l[S], n.window[S] = 3;
    if (n.block_type == D0.SHORT_TYPE) {
      var p = L1(576);
      n.sfb_smin = 0, n.sfb_lmax = 0, n.mixed_block_flag != 0 && (n.sfb_smin = 3, n.sfb_lmax = r.mode_gr * 2 + 4), n.psymax = n.sfb_lmax + 3 * ((r.sfb21_extra ? D0.SBMAX_s : D0.SBPSY_s) - n.sfb_smin), n.sfbmax = n.sfb_lmax + 3 * (D0.SBPSY_s - n.sfb_smin), n.sfbdivide = n.sfbmax - 18, n.psy_lmax = n.sfb_lmax;
      var A = r.scalefac_band.l[n.sfb_lmax];
      R1.arraycopy(n.xr, 0, p, 0, 576);
      for (var S = n.sfb_smin; S < D0.SBMAX_s; S++)
        for (var b = r.scalefac_band.s[S], e = r.scalefac_band.s[S + 1], l = 0; l < 3; l++)
          for (var N = b; N < e; N++)
            n.xr[A++] = p[3 * N + l];
      for (var T = n.sfb_lmax, S = n.sfb_smin; S < D0.SBMAX_s; S++)
        n.width[T] = n.width[T + 1] = n.width[T + 2] = r.scalefac_band.s[S + 1] - r.scalefac_band.s[S], n.window[T] = 0, n.window[T + 1] = 1, n.window[T + 2] = 2, T += 3;
    }
    n.count1bits = 0, n.sfb_partition_table = i.nr_of_sfb_block[0][0], n.slen[0] = 0, n.slen[1] = 0, n.slen[2] = 0, n.slen[3] = 0, n.max_nonzero_coeff = 575, w1.fill(n.scalefac, 0), i0(r, n);
  };
  function V(r) {
    this.ordinal = r;
  }
  V.BINSEARCH_NONE = new V(0), V.BINSEARCH_UP = new V(1), V.BINSEARCH_DOWN = new V(2);
  function W(r, n, S, p, A) {
    var b, e = r.CurrentStep[p], l = !1, N = r.OldValue[p], T = V.BINSEARCH_NONE;
    for (n.global_gain = N, S -= n.part2_length, v1(e != 0); ; ) {
      var y;
      if (b = U.count_bits(r, A, n, null), e == 1 || b == S)
        break;
      b > S ? (T == V.BINSEARCH_DOWN && (l = !0), l && (e /= 2), T = V.BINSEARCH_UP, y = e) : (T == V.BINSEARCH_UP && (l = !0), l && (e /= 2), T = V.BINSEARCH_DOWN, y = -e), n.global_gain += y, n.global_gain < 0 && (n.global_gain = 0, l = !0), n.global_gain > 255 && (n.global_gain = 255, l = !0);
    }
    for (v1(n.global_gain >= 0), v1(n.global_gain < 256); b > S && n.global_gain < 255; )
      n.global_gain++, b = U.count_bits(r, A, n, null);
    return r.CurrentStep[p] = N - n.global_gain >= 4 ? 4 : 2, r.OldValue[p] = n.global_gain, n.part2_3_length = b, b;
  }
  this.trancate_smallspectrums = function(r, n, S, p) {
    var A = L1(fe.SFBMAX);
    if (!(!(r.substep_shaping & 4) && n.block_type == D0.SHORT_TYPE || r.substep_shaping & 128)) {
      i.calc_noise(n, S, A, new Y1(), null);
      for (var e = 0; e < 576; e++) {
        var b = 0;
        n.l3_enc[e] != 0 && (b = Math.abs(n.xr[e])), p[e] = b;
      }
      var e = 0, l = 8;
      n.block_type == D0.SHORT_TYPE && (l = 6);
      do {
        var N, T, y, Q, f = n.width[l];
        if (e += f, !(A[l] >= 1) && (w1.sort(p, e - f, f), !BitStream.EQ(p[e - 1], 0))) {
          N = (1 - A[l]) * S[l], T = 0, Q = 0;
          do {
            var d;
            for (y = 1; Q + y < f && !BitStream.NEQ(p[Q + e - f], p[Q + e + y - f]); y++)
              ;
            if (d = p[Q + e - f] * p[Q + e - f] * y, N < d) {
              Q != 0 && (T = p[Q + e - f - 1]);
              break;
            }
            N -= d, Q += y;
          } while (Q < f);
          if (!BitStream.EQ(T, 0))
            do
              Math.abs(n.xr[e - f]) <= T && (n.l3_enc[e - f] = 0);
            while (--f > 0);
        }
      } while (++l < n.psymax);
      n.part2_3_length = U.noquant_count_bits(r, n, null);
    }
  };
  function g(r) {
    for (var n = 0; n < r.sfbmax; n++)
      if (r.scalefac[n] + r.subblock_gain[r.window[n]] == 0)
        return !1;
    return !0;
  }
  function m(r) {
    return J1.FAST_LOG10(0.368 + 0.632 * r * r * r);
  }
  function G(r, n) {
    for (var S = 1e-37, p = 0; p < n.psymax; p++)
      S += m(r[p]);
    return Math.max(1e-20, S);
  }
  function O(r, n, S, p, A) {
    var b;
    switch (r) {
      default:
      case 9:
        n.over_count > 0 ? (b = S.over_SSD <= n.over_SSD, S.over_SSD == n.over_SSD && (b = S.bits < n.bits)) : b = S.max_noise < 0 && S.max_noise * 10 + S.bits <= n.max_noise * 10 + n.bits;
        break;
      case 0:
        b = S.over_count < n.over_count || S.over_count == n.over_count && S.over_noise < n.over_noise || S.over_count == n.over_count && BitStream.EQ(S.over_noise, n.over_noise) && S.tot_noise < n.tot_noise;
        break;
      case 8:
        S.max_noise = G(A, p);
      case 1:
        b = S.max_noise < n.max_noise;
        break;
      case 2:
        b = S.tot_noise < n.tot_noise;
        break;
      case 3:
        b = S.tot_noise < n.tot_noise && S.max_noise < n.max_noise;
        break;
      case 4:
        b = S.max_noise <= 0 && n.max_noise > 0.2 || S.max_noise <= 0 && n.max_noise < 0 && n.max_noise > S.max_noise - 0.2 && S.tot_noise < n.tot_noise || S.max_noise <= 0 && n.max_noise > 0 && n.max_noise > S.max_noise - 0.2 && S.tot_noise < n.tot_noise + n.over_noise || S.max_noise > 0 && n.max_noise > -0.05 && n.max_noise > S.max_noise - 0.1 && S.tot_noise + S.over_noise < n.tot_noise + n.over_noise || S.max_noise > 0 && n.max_noise > -0.1 && n.max_noise > S.max_noise - 0.15 && S.tot_noise + S.over_noise + S.over_noise < n.tot_noise + n.over_noise + n.over_noise;
        break;
      case 5:
        b = S.over_noise < n.over_noise || BitStream.EQ(S.over_noise, n.over_noise) && S.tot_noise < n.tot_noise;
        break;
      case 6:
        b = S.over_noise < n.over_noise || BitStream.EQ(S.over_noise, n.over_noise) && (S.max_noise < n.max_noise || BitStream.EQ(S.max_noise, n.max_noise) && S.tot_noise <= n.tot_noise);
        break;
      case 7:
        b = S.over_count < n.over_count || S.over_noise < n.over_noise;
        break;
    }
    return n.over_count == 0 && (b = b && S.bits < n.bits), b;
  }
  function M(r, n, S, p, A) {
    var b = r.internal_flags, e;
    n.scalefac_scale == 0 ? e = 1.2968395546510096 : e = 1.6817928305074292;
    for (var l = 0, N = 0; N < n.sfbmax; N++)
      l < S[N] && (l = S[N]);
    var T = b.noise_shaping_amp;
    switch (T == 3 && (A ? T = 2 : T = 1), T) {
      case 2:
        break;
      case 1:
        l > 1 ? l = Math.pow(l, 0.5) : l *= 0.95;
        break;
      case 0:
      default:
        l > 1 ? l = 1 : l *= 0.95;
        break;
    }
    for (var y = 0, N = 0; N < n.sfbmax; N++) {
      var Q = n.width[N], f;
      if (y += Q, !(S[N] < l)) {
        if (b.substep_shaping & 2 && (b.pseudohalf[N] = b.pseudohalf[N] == 0 ? 1 : 0, b.pseudohalf[N] == 0 && b.noise_shaping_amp == 2))
          return;
        for (n.scalefac[N]++, f = -Q; f < 0; f++)
          p[y + f] *= e, p[y + f] > n.xrpow_max && (n.xrpow_max = p[y + f]);
        if (b.noise_shaping_amp == 2)
          return;
      }
    }
  }
  function q(r, n) {
    for (var S = 1.2968395546510096, p = 0, A = 0; A < r.sfbmax; A++) {
      var b = r.width[A], e = r.scalefac[A];
      if (r.preflag != 0 && (e += i.pretab[A]), p += b, e & 1) {
        e++;
        for (var l = -b; l < 0; l++)
          n[p + l] *= S, n[p + l] > r.xrpow_max && (r.xrpow_max = n[p + l]);
      }
      r.scalefac[A] = e >> 1;
    }
    r.preflag = 0, r.scalefac_scale = 1;
  }
  function s0(r, n, S) {
    var p, A = n.scalefac;
    for (p = 0; p < n.sfb_lmax; p++)
      if (A[p] >= 16)
        return !0;
    for (var b = 0; b < 3; b++) {
      var e = 0, l = 0;
      for (p = n.sfb_lmax + b; p < n.sfbdivide; p += 3)
        e < A[p] && (e = A[p]);
      for (; p < n.sfbmax; p += 3)
        l < A[p] && (l = A[p]);
      if (!(e < 16 && l < 8)) {
        if (n.subblock_gain[b] >= 7)
          return !0;
        n.subblock_gain[b]++;
        var N = r.scalefac_band.l[n.sfb_lmax];
        for (p = n.sfb_lmax + b; p < n.sfbmax; p += 3) {
          var d, T = n.width[p], y = A[p];
          if (v1(y >= 0), y = y - (4 >> n.scalefac_scale), y >= 0) {
            A[p] = y, N += T * 3;
            continue;
          }
          A[p] = 0;
          var Q = 210 + (y << n.scalefac_scale + 1);
          d = i.IPOW20(Q), N += T * (b + 1);
          for (var f = -T; f < 0; f++)
            S[N + f] *= d, S[N + f] > n.xrpow_max && (n.xrpow_max = S[N + f]);
          N += T * (3 - b - 1);
        }
        var d = i.IPOW20(202);
        N += n.width[p] * (b + 1);
        for (var f = -n.width[p]; f < 0; f++)
          S[N + f] *= d, S[N + f] > n.xrpow_max && (n.xrpow_max = S[N + f]);
      }
    }
    return !1;
  }
  function f0(r, n, S, p, A) {
    var b = r.internal_flags;
    M(r, n, S, p, A);
    var e = g(n);
    return e ? !1 : (b.mode_gr == 2 ? e = U.scale_bitcount(n) : e = U.scale_bitcount_lsf(b, n), e ? (b.noise_shaping > 1 && (w1.fill(b.pseudohalf, 0), n.scalefac_scale == 0 ? (q(n, p), e = !1) : n.block_type == D0.SHORT_TYPE && b.subblock_gain > 0 && (e = s0(b, n, p) || g(n))), e || (b.mode_gr == 2 ? e = U.scale_bitcount(n) : e = U.scale_bitcount_lsf(b, n)), !e) : !0);
  }
  this.outer_loop = function(r, n, S, p, A, b) {
    var e = r.internal_flags, l = new oe(), N = L1(576), T = L1(fe.SFBMAX), y = new Y1(), Q, f = new Se(), d = 9999999, C = !1, v = !1, k = 0;
    if (W(e, n, b, A, p), e.noise_shaping == 0)
      return 100;
    i.calc_noise(n, S, T, y, f), y.bits = n.part2_3_length, l.assign(n);
    var I = 0;
    for (R1.arraycopy(p, 0, N, 0, 576); !C; ) {
      do {
        var H = new Y1(), K, l0 = 255;
        if (e.substep_shaping & 2 ? K = 20 : K = 3, e.sfb21_extra && (T[l.sfbmax] > 1 || l.block_type == D0.SHORT_TYPE && (T[l.sfbmax + 1] > 1 || T[l.sfbmax + 2] > 1)) || !f0(r, l, T, p, v))
          break;
        l.scalefac_scale != 0 && (l0 = 254);
        var E = b - l.part2_length;
        if (E <= 0)
          break;
        for (; (l.part2_3_length = U.count_bits(e, p, l, f)) > E && l.global_gain <= l0; )
          l.global_gain++;
        if (l.global_gain > l0)
          break;
        if (y.over_count == 0) {
          for (; (l.part2_3_length = U.count_bits(e, p, l, f)) > d && l.global_gain <= l0; )
            l.global_gain++;
          if (l.global_gain > l0)
            break;
        }
        if (i.calc_noise(l, S, T, H, f), H.bits = l.part2_3_length, n.block_type != D0.SHORT_TYPE ? Q = r.quant_comp : Q = r.quant_comp_short, Q = O(Q, y, H, l, T) ? 1 : 0, Q != 0)
          d = n.part2_3_length, y = H, n.assign(l), I = 0, R1.arraycopy(p, 0, N, 0, 576);
        else if (e.full_outer_loop == 0 && (++I > K && y.over_count == 0 || e.noise_shaping_amp == 3 && v && I > 30 || e.noise_shaping_amp == 3 && v && l.global_gain - k > 15))
          break;
      } while (l.global_gain + l.scalefac_scale < 255);
      e.noise_shaping_amp == 3 ? v ? C = !0 : (l.assign(n), R1.arraycopy(N, 0, p, 0, 576), I = 0, k = l.global_gain, v = !0) : C = !0;
    }
    return v1(n.global_gain + n.scalefac_scale <= 255), r.VBR == le.vbr_rh || r.VBR == le.vbr_mtrh ? R1.arraycopy(N, 0, p, 0, 576) : e.substep_shaping & 1 && trancate_smallspectrums(e, n, S, p), y.over_count;
  }, this.iteration_finish_one = function(r, n, S) {
    var p = r.l3_side, A = p.tt[n][S];
    U.best_scalefac_store(r, n, S, p), r.use_best_huffman == 1 && U.best_huffman_divide(r, A), _0.ResvAdjust(r, A);
  }, this.VBR_encode_granule = function(r, n, S, p, A, b, e) {
    var l = r.internal_flags, N = new oe(), T = L1(576), y = e, Q = e + 1, f = (e + b) / 2, d, C, v = 0, k = l.sfb21_extra;
    v1(y <= LameInternalFlags.MAX_BITS_PER_CHANNEL), w1.fill(N.l3_enc, 0);
    do
      v1(f >= b), v1(f <= e), v1(b <= e), f > y - 42 ? l.sfb21_extra = !1 : l.sfb21_extra = k, C = outer_loop(r, n, S, p, A, f), C <= 0 ? (v = 1, Q = n.part2_3_length, N.assign(n), R1.arraycopy(p, 0, T, 0, 576), e = Q - 32, d = e - b, f = (e + b) / 2) : (b = f + 32, d = e - b, f = (e + b) / 2, v != 0 && (v = 2, n.assign(N), R1.arraycopy(T, 0, p, 0, 576)));
    while (d > 12);
    l.sfb21_extra = k, v == 2 && R1.arraycopy(N.l3_enc, 0, n.l3_enc, 0, 576), v1(n.part2_3_length <= y);
  }, this.get_framebits = function(r, n) {
    var S = r.internal_flags;
    S.bitrate_index = S.VBR_min_bitrate;
    var p = r0.getframebits(r);
    S.bitrate_index = 1, p = r0.getframebits(r);
    for (var A = 1; A <= S.VBR_max_bitrate; A++) {
      S.bitrate_index = A;
      var b = new MeanBits(p);
      n[A] = _0.ResvFrameBegin(r, b), p = b.bits;
    }
  }, this.VBR_old_prepare = function(r, n, S, p, A, b, e, l, N) {
    var T = r.internal_flags, y, Q = 0, f = 1, d = 0;
    T.bitrate_index = T.VBR_max_bitrate;
    var C = _0.ResvFrameBegin(r, new MeanBits(0)) / T.mode_gr;
    get_framebits(r, b);
    for (var v = 0; v < T.mode_gr; v++) {
      var k = i.on_pe(r, n, l[v], C, v, 0);
      T.mode_ext == D0.MPG_MD_MS_LR && (ms_convert(T.l3_side, v), i.reduce_side(l[v], S[v], C, k));
      for (var I = 0; I < T.channels_out; ++I) {
        var H = T.l3_side.tt[v][I];
        H.block_type != D0.SHORT_TYPE ? (Q = 1.28 / (1 + Math.exp(3.5 - n[v][I] / 300)) - 0.05, y = T.PSY.mask_adjust - Q) : (Q = 2.56 / (1 + Math.exp(3.5 - n[v][I] / 300)) - 0.14, y = T.PSY.mask_adjust_short - Q), T.masking_lower = Math.pow(10, y * 0.1), init_outer_loop(T, H), N[v][I] = i.calc_xmin(r, p[v][I], H, A[v][I]), N[v][I] != 0 && (f = 0), e[v][I] = 126, d += l[v][I];
      }
    }
    for (var v = 0; v < T.mode_gr; v++)
      for (var I = 0; I < T.channels_out; I++)
        d > b[T.VBR_max_bitrate] && (l[v][I] *= b[T.VBR_max_bitrate], l[v][I] /= d), e[v][I] > l[v][I] && (e[v][I] = l[v][I]);
    return f;
  }, this.bitpressure_strategy = function(r, n, S, p) {
    for (var A = 0; A < r.mode_gr; A++)
      for (var b = 0; b < r.channels_out; b++) {
        for (var e = r.l3_side.tt[A][b], l = n[A][b], N = 0, T = 0; T < e.psy_lmax; T++)
          l[N++] *= 1 + 0.029 * T * T / D0.SBMAX_l / D0.SBMAX_l;
        if (e.block_type == D0.SHORT_TYPE)
          for (var T = e.sfb_smin; T < D0.SBMAX_s; T++)
            l[N++] *= 1 + 0.029 * T * T / D0.SBMAX_s / D0.SBMAX_s, l[N++] *= 1 + 0.029 * T * T / D0.SBMAX_s / D0.SBMAX_s, l[N++] *= 1 + 0.029 * T * T / D0.SBMAX_s / D0.SBMAX_s;
        p[A][b] = 0 | Math.max(S[A][b], 0.9 * p[A][b]);
      }
  }, this.VBR_new_prepare = function(r, n, S, p, A, b) {
    var e = r.internal_flags, l = 1, N = 0, T = 0, y;
    if (r.free_format) {
      e.bitrate_index = 0;
      var Q = new MeanBits(N);
      y = _0.ResvFrameBegin(r, Q), N = Q.bits, A[0] = y;
    } else {
      e.bitrate_index = e.VBR_max_bitrate;
      var Q = new MeanBits(N);
      _0.ResvFrameBegin(r, Q), N = Q.bits, get_framebits(r, A), y = A[e.VBR_max_bitrate];
    }
    for (var f = 0; f < e.mode_gr; f++) {
      i.on_pe(r, n, b[f], N, f, 0), e.mode_ext == D0.MPG_MD_MS_LR && ms_convert(e.l3_side, f);
      for (var d = 0; d < e.channels_out; ++d) {
        var C = e.l3_side.tt[f][d];
        e.masking_lower = Math.pow(10, e.PSY.mask_adjust * 0.1), init_outer_loop(e, C), i.calc_xmin(r, S[f][d], C, p[f][d]) != 0 && (l = 0), T += b[f][d];
      }
    }
    for (var f = 0; f < e.mode_gr; f++)
      for (var d = 0; d < e.channels_out; d++)
        T > y && (b[f][d] *= y, b[f][d] /= T);
    return l;
  }, this.calc_target_bits = function(r, n, S, p, A, b) {
    var e = r.internal_flags, l = e.l3_side, N, T, y, Q, f = 0;
    e.bitrate_index = e.VBR_max_bitrate;
    var d = new MeanBits(f);
    for (b[0] = _0.ResvFrameBegin(r, d), f = d.bits, e.bitrate_index = 1, f = r0.getframebits(r) - e.sideinfo_len * 8, A[0] = f / (e.mode_gr * e.channels_out), f = r.VBR_mean_bitrate_kbps * r.framesize * 1e3, e.substep_shaping & 1 && (f *= 1.09), f /= r.out_samplerate, f -= e.sideinfo_len * 8, f /= e.mode_gr * e.channels_out, N = 0.93 + 0.07 * (11 - r.compression_ratio) / 5.5, N < 0.9 && (N = 0.9), N > 1 && (N = 1), T = 0; T < e.mode_gr; T++) {
      var C = 0;
      for (y = 0; y < e.channels_out; y++) {
        if (p[T][y] = int(N * f), n[T][y] > 700) {
          var v = int((n[T][y] - 700) / 1.4), k = l.tt[T][y];
          p[T][y] = int(N * f), k.block_type == D0.SHORT_TYPE && v < f / 2 && (v = f / 2), v > f * 3 / 2 ? v = f * 3 / 2 : v < 0 && (v = 0), p[T][y] += v;
        }
        p[T][y] > LameInternalFlags.MAX_BITS_PER_CHANNEL && (p[T][y] = LameInternalFlags.MAX_BITS_PER_CHANNEL), C += p[T][y];
      }
      if (C > LameInternalFlags.MAX_BITS_PER_GRANULE)
        for (y = 0; y < e.channels_out; ++y)
          p[T][y] *= LameInternalFlags.MAX_BITS_PER_GRANULE, p[T][y] /= C;
    }
    if (e.mode_ext == D0.MPG_MD_MS_LR)
      for (T = 0; T < e.mode_gr; T++)
        i.reduce_side(p[T], S[T], f * e.channels_out, LameInternalFlags.MAX_BITS_PER_GRANULE);
    for (Q = 0, T = 0; T < e.mode_gr; T++)
      for (y = 0; y < e.channels_out; y++)
        p[T][y] > LameInternalFlags.MAX_BITS_PER_CHANNEL && (p[T][y] = LameInternalFlags.MAX_BITS_PER_CHANNEL), Q += p[T][y];
    if (Q > b[0])
      for (T = 0; T < e.mode_gr; T++)
        for (y = 0; y < e.channels_out; y++)
          p[T][y] *= b[0], p[T][y] /= Q;
  };
}
xe = He;
var Ve = v0("65Sx2"), Ae = {}, y0 = v0("3YDN3"), k1 = y0.assert;
function Oe() {
  var r0;
  this.setModules = function(_0) {
    r0 = _0;
  }, this.ResvFrameBegin = function(_0, i) {
    var x = _0.internal_flags, U, Z = x.l3_side, i0 = r0.getframebits(_0);
    i.bits = (i0 - x.sideinfo_len * 8) / x.mode_gr;
    var V = 2048 * x.mode_gr - 8;
    _0.brate > 320 ? U = 8 * int(_0.brate * 1e3 / (_0.out_samplerate / 1152) / 8 + 0.5) : (U = 11520, _0.strict_ISO && (U = 8 * int(32e4 / (_0.out_samplerate / 1152) / 8 + 0.5))), x.ResvMax = U - i0, x.ResvMax > V && (x.ResvMax = V), (x.ResvMax < 0 || _0.disable_reservoir) && (x.ResvMax = 0);
    var W = i.bits * x.mode_gr + Math.min(x.ResvSize, x.ResvMax);
    return W > U && (W = U), k1(x.ResvMax % 8 == 0), k1(x.ResvMax >= 0), Z.resvDrain_pre = 0, x.pinfo != null && (x.pinfo.mean_bits = i.bits / 2, x.pinfo.resvsize = x.ResvSize), W;
  }, this.ResvMaxBits = function(_0, i, x, U) {
    var Z = _0.internal_flags, i0, V = Z.ResvSize, W = Z.ResvMax;
    U != 0 && (V += i), Z.substep_shaping & 1 && (W *= 0.9), x.bits = i, V * 10 > W * 9 ? (i0 = V - W * 9 / 10, x.bits += i0, Z.substep_shaping |= 128) : (i0 = 0, Z.substep_shaping &= 127, !_0.disable_reservoir && !(Z.substep_shaping & 1) && (x.bits -= 0.1 * i));
    var g = V < Z.ResvMax * 6 / 10 ? V : Z.ResvMax * 6 / 10;
    return g -= i0, g < 0 && (g = 0), g;
  }, this.ResvAdjust = function(_0, i) {
    _0.ResvSize -= i.part2_3_length + i.part2_length;
  }, this.ResvFrameEnd = function(_0, i) {
    var x, U = _0.l3_side;
    _0.ResvSize += i * _0.mode_gr;
    var Z = 0;
    U.resvDrain_post = 0, U.resvDrain_pre = 0, (x = _0.ResvSize % 8) != 0 && (Z += x), x = _0.ResvSize - Z - _0.ResvMax, x > 0 && (k1(x % 8 == 0), k1(x >= 0), Z += x);
    var i0 = Math.min(U.main_data_begin * 8, Z) / 8;
    U.resvDrain_pre += 8 * i0, Z -= 8 * i0, _0.ResvSize -= 8 * i0, U.main_data_begin -= i0, U.resvDrain_post += Z, _0.ResvSize -= Z;
  };
}
Ae = Oe;
var Ce = v0("jL6I1"), ke = v0("ctaQC");
v0("cPNKB");
var Re = {};
function Fe() {
  var r0 = "http://www.mp3dev.org/", _0 = 3, i = 98, x = 4, U = 0, Z = 93;
  this.getLameVersion = function() {
    return _0 + "." + i + "." + x;
  }, this.getLameShortVersion = function() {
    return _0 + "." + i + "." + x;
  }, this.getLameVeryShortVersion = function() {
    return "LAME" + _0 + "." + i + "r";
  }, this.getPsyVersion = function() {
    return U + "." + Z;
  }, this.getLameUrl = function() {
    return r0;
  }, this.getLameOsBitness = function() {
    return "32bits";
  };
}
Re = Fe;
var Me = {}, y0 = v0("3YDN3"), Ye = y0.System, g1 = y0.VbrMode;
y0.Float;
var he = y0.ShortBlock;
y0.Util;
var Xe = y0.Arrays;
y0.new_array_n;
var F1 = y0.new_byte;
y0.new_double;
y0.new_float;
y0.new_float_n;
y0.new_int;
y0.new_int_n;
var De = y0.assert;
H1.NUMTOCENTRIES = 100;
H1.MAXFRAMESIZE = 2880;
function H1() {
  var r0, _0, i;
  this.setModules = function(f, d, C) {
    r0 = f, _0 = d, i = C;
  };
  var x = 1, U = 2, Z = 4, i0 = 8, V = H1.NUMTOCENTRIES, W = H1.MAXFRAMESIZE, g = V + 4 + 4 + 4 + 4 + 4, m = g + 9 + 1 + 1 + 8 + 1 + 1 + 3 + 1 + 1 + 2 + 4 + 2 + 2, G = 128, O = 64, M = 32, q = null, s0 = "Xing", f0 = "Info", r = [
    0,
    49345,
    49537,
    320,
    49921,
    960,
    640,
    49729,
    50689,
    1728,
    1920,
    51009,
    1280,
    50625,
    50305,
    1088,
    52225,
    3264,
    3456,
    52545,
    3840,
    53185,
    52865,
    3648,
    2560,
    51905,
    52097,
    2880,
    51457,
    2496,
    2176,
    51265,
    55297,
    6336,
    6528,
    55617,
    6912,
    56257,
    55937,
    6720,
    7680,
    57025,
    57217,
    8e3,
    56577,
    7616,
    7296,
    56385,
    5120,
    54465,
    54657,
    5440,
    55041,
    6080,
    5760,
    54849,
    53761,
    4800,
    4992,
    54081,
    4352,
    53697,
    53377,
    4160,
    61441,
    12480,
    12672,
    61761,
    13056,
    62401,
    62081,
    12864,
    13824,
    63169,
    63361,
    14144,
    62721,
    13760,
    13440,
    62529,
    15360,
    64705,
    64897,
    15680,
    65281,
    16320,
    16e3,
    65089,
    64001,
    15040,
    15232,
    64321,
    14592,
    63937,
    63617,
    14400,
    10240,
    59585,
    59777,
    10560,
    60161,
    11200,
    10880,
    59969,
    60929,
    11968,
    12160,
    61249,
    11520,
    60865,
    60545,
    11328,
    58369,
    9408,
    9600,
    58689,
    9984,
    59329,
    59009,
    9792,
    8704,
    58049,
    58241,
    9024,
    57601,
    8640,
    8320,
    57409,
    40961,
    24768,
    24960,
    41281,
    25344,
    41921,
    41601,
    25152,
    26112,
    42689,
    42881,
    26432,
    42241,
    26048,
    25728,
    42049,
    27648,
    44225,
    44417,
    27968,
    44801,
    28608,
    28288,
    44609,
    43521,
    27328,
    27520,
    43841,
    26880,
    43457,
    43137,
    26688,
    30720,
    47297,
    47489,
    31040,
    47873,
    31680,
    31360,
    47681,
    48641,
    32448,
    32640,
    48961,
    32e3,
    48577,
    48257,
    31808,
    46081,
    29888,
    30080,
    46401,
    30464,
    47041,
    46721,
    30272,
    29184,
    45761,
    45953,
    29504,
    45313,
    29120,
    28800,
    45121,
    20480,
    37057,
    37249,
    20800,
    37633,
    21440,
    21120,
    37441,
    38401,
    22208,
    22400,
    38721,
    21760,
    38337,
    38017,
    21568,
    39937,
    23744,
    23936,
    40257,
    24320,
    40897,
    40577,
    24128,
    23040,
    39617,
    39809,
    23360,
    39169,
    22976,
    22656,
    38977,
    34817,
    18624,
    18816,
    35137,
    19200,
    35777,
    35457,
    19008,
    19968,
    36545,
    36737,
    20288,
    36097,
    19904,
    19584,
    35905,
    17408,
    33985,
    34177,
    17728,
    34561,
    18368,
    18048,
    34369,
    33281,
    17088,
    17280,
    33601,
    16640,
    33217,
    32897,
    16448
  ];
  function n(f, d) {
    if (f.nVbrNumFrames++, f.sum += d, f.seen++, !(f.seen < f.want) && (f.pos < f.size && (f.bag[f.pos] = f.sum, f.pos++, f.seen = 0), f.pos == f.size)) {
      for (var C = 1; C < f.size; C += 2)
        f.bag[C / 2] = f.bag[C];
      f.want *= 2, f.pos /= 2;
    }
  }
  function S(f, d) {
    if (!(f.pos <= 0))
      for (var C = 1; C < V; ++C) {
        var v = C / V, k, I, H = 0 | Math.floor(v * f.pos);
        H > f.pos - 1 && (H = f.pos - 1), k = f.bag[H], I = f.sum;
        var K = 0 | 256 * k / I;
        K > 255 && (K = 255), d[C] = 255 & K;
      }
  }
  this.addVbrFrame = function(f) {
    var d = f.internal_flags, C = Tables.bitrate_table[f.version][d.bitrate_index];
    De(d.VBR_seek_table.bag != null), n(d.VBR_seek_table, C);
  };
  function p(f, d) {
    var C = f[d + 0] & 255;
    return C <<= 8, C |= f[d + 1] & 255, C <<= 8, C |= f[d + 2] & 255, C <<= 8, C |= f[d + 3] & 255, C;
  }
  function A(f, d, C) {
    f[d + 0] = 255 & (C >> 24 & 255), f[d + 1] = 255 & (C >> 16 & 255), f[d + 2] = 255 & (C >> 8 & 255), f[d + 3] = 255 & (C & 255);
  }
  function b(f, d, C) {
    f[d + 0] = 255 & (C >> 8 & 255), f[d + 1] = 255 & (C & 255);
  }
  function e(f, d) {
    return new String(f, d, s0.length(), q).equals(s0) || new String(f, d, f0.length(), q).equals(f0);
  }
  function l(f, d, C) {
    return 255 & (f << d | C & ~(-1 << d));
  }
  function N(f, d) {
    var C = f.internal_flags;
    d[0] = l(d[0], 8, 255), d[1] = l(d[1], 3, 7), d[1] = l(d[1], 1, f.out_samplerate < 16e3 ? 0 : 1), d[1] = l(d[1], 1, f.version), d[1] = l(d[1], 2, 1), d[1] = l(d[1], 1, f.error_protection ? 0 : 1), d[2] = l(d[2], 4, C.bitrate_index), d[2] = l(d[2], 2, C.samplerate_index), d[2] = l(d[2], 1, 0), d[2] = l(d[2], 1, f.extension), d[3] = l(d[3], 2, f.mode.ordinal()), d[3] = l(d[3], 2, C.mode_ext), d[3] = l(d[3], 1, f.copyright), d[3] = l(d[3], 1, f.original), d[3] = l(d[3], 2, f.emphasis), d[0] = 255;
    var v = 255 & (d[1] & 241), k;
    f.version == 1 ? k = G : f.out_samplerate < 16e3 ? k = M : k = O, f.VBR == g1.vbr_off && (k = f.brate);
    var I;
    f.free_format ? I = 0 : I = 255 & 16 * r0.BitrateIndex(k, f.version, f.out_samplerate), f.version == 1 ? (d[1] = 255 & (v | 10), v = 255 & (d[2] & 13), d[2] = 255 & (I | v)) : (d[1] = 255 & (v | 2), v = 255 & (d[2] & 13), d[2] = 255 & (I | v));
  }
  this.getVbrTag = function(f) {
    var d = new VBRTagData(), C = 0;
    d.flags = 0;
    var v = f[C + 1] >> 3 & 1, k = f[C + 2] >> 2 & 3, I = f[C + 3] >> 6 & 3, H = f[C + 2] >> 4 & 15;
    if (H = Tables.bitrate_table[v][H], f[C + 1] >> 4 == 14 ? d.samprate = Tables.samplerate_table[2][k] : d.samprate = Tables.samplerate_table[v][k], v != 0 ? I != 3 ? C += 36 : C += 21 : I != 3 ? C += 21 : C += 13, !e(f, C))
      return null;
    C += 4, d.hId = v;
    var K = d.flags = p(f, C);
    if (C += 4, K & x && (d.frames = p(f, C), C += 4), K & U && (d.bytes = p(f, C), C += 4), K & Z) {
      if (d.toc != null)
        for (var l0 = 0; l0 < V; l0++)
          d.toc[l0] = f[C + l0];
      C += V;
    }
    d.vbrScale = -1, K & i0 && (d.vbrScale = p(f, C), C += 4), d.headersize = (v + 1) * 72e3 * H / d.samprate, C += 21;
    var E = f[C + 0] << 4;
    E += f[C + 1] >> 4;
    var B = (f[C + 1] & 15) << 8;
    return B += f[C + 2] & 255, (E < 0 || E > 3e3) && (E = -1), (B < 0 || B > 3e3) && (B = -1), d.encDelay = E, d.encPadding = B, d;
  }, this.InitVbrTag = function(f) {
    var d = f.internal_flags, C;
    f.version == 1 ? C = G : f.out_samplerate < 16e3 ? C = M : C = O, f.VBR == g1.vbr_off && (C = f.brate);
    var v = (f.version + 1) * 72e3 * C / f.out_samplerate, k = d.sideinfo_len + m;
    if (d.VBR_seek_table.TotalFrameSize = v, v < k || v > W) {
      f.bWriteVbrTag = !1;
      return;
    }
    d.VBR_seek_table.nVbrNumFrames = 0, d.VBR_seek_table.nBytesWritten = 0, d.VBR_seek_table.sum = 0, d.VBR_seek_table.seen = 0, d.VBR_seek_table.want = 1, d.VBR_seek_table.pos = 0, d.VBR_seek_table.bag == null && (d.VBR_seek_table.bag = new int[400](), d.VBR_seek_table.size = 400);
    var I = F1(W);
    N(f, I);
    for (var H = d.VBR_seek_table.TotalFrameSize, K = 0; K < H; ++K)
      _0.add_dummy_byte(f, I[K] & 255, 1);
  };
  function T(f, d) {
    var C = d ^ f;
    return d = d >> 8 ^ r[C & 255], d;
  }
  this.updateMusicCRC = function(f, d, C, v) {
    for (var k = 0; k < v; ++k)
      f[0] = T(d[C + k], f[0]);
  };
  function y(f, d, C, v, k) {
    var I = f.internal_flags, H = 0, K = f.encoder_delay, l0 = f.encoder_padding, E = 100 - 10 * f.VBR_q - f.quality, B = i.getLameVeryShortVersion(), s, _ = 0, a, h = [
      1,
      5,
      3,
      2,
      4,
      0,
      3
    ], F = 0 | (f.lowpassfreq / 100 + 0.5 > 255 ? 255 : f.lowpassfreq / 100 + 0.5), J = 0, X = 0, $ = 0, e0 = f.internal_flags.noise_shaping, o0 = 0, b0 = 0, $0 = 0, S0 = 0, R0 = 0, p0 = (f.exp_nspsytune & 1) != 0, Y0 = (f.exp_nspsytune & 2) != 0, J0 = !1, t = !1, o = f.internal_flags.nogap_total, A0 = f.internal_flags.nogap_current, M0 = f.ATHtype, O0 = 0, I0;
    switch (f.VBR) {
      case vbr_abr:
        I0 = f.VBR_mean_bitrate_kbps;
        break;
      case vbr_off:
        I0 = f.brate;
        break;
      default:
        I0 = f.VBR_min_bitrate_kbps;
    }
    switch (f.VBR.ordinal() < h.length ? s = h[f.VBR.ordinal()] : s = 0, a = 16 * _ + s, I.findReplayGain && (I.RadioGain > 510 && (I.RadioGain = 510), I.RadioGain < -510 && (I.RadioGain = -510), X = 8192, X |= 3072, I.RadioGain >= 0 ? X |= I.RadioGain : (X |= 512, X |= -I.RadioGain)), I.findPeakSample && (J = Math.abs(0 | I.PeakSample / 32767 * Math.pow(2, 23) + 0.5)), o != -1 && (A0 > 0 && (t = !0), A0 < o - 1 && (J0 = !0)), O0 = M0 + ((p0 ? 1 : 0) << 4) + ((Y0 ? 1 : 0) << 5) + ((J0 ? 1 : 0) << 6) + ((t ? 1 : 0) << 7), E < 0 && (E = 0), f.mode) {
      case MONO:
        o0 = 0;
        break;
      case STEREO:
        o0 = 1;
        break;
      case DUAL_CHANNEL:
        o0 = 2;
        break;
      case JOINT_STEREO:
        f.force_ms ? o0 = 4 : o0 = 3;
        break;
      case NOT_SET:
      default:
        o0 = 7;
        break;
    }
    f.in_samplerate <= 32e3 ? $0 = 0 : f.in_samplerate == 48e3 ? $0 = 2 : f.in_samplerate > 48e3 ? $0 = 3 : $0 = 1, (f.short_blocks == he.short_block_forced || f.short_blocks == he.short_block_dispensed || f.lowpassfreq == -1 && f.highpassfreq == -1 || /* "-k" */
    f.scale_left < f.scale_right || f.scale_left > f.scale_right || f.disable_reservoir && f.brate < 320 || f.noATH || f.ATHonly || M0 == 0 || f.in_samplerate <= 32e3) && (b0 = 1), S0 = e0 + (o0 << 2) + (b0 << 5) + ($0 << 6), R0 = I.nMusicCRC, A(C, v + H, E), H += 4;
    for (var T0 = 0; T0 < 9; T0++)
      C[v + H + T0] = 255 & B.charAt(T0);
    H += 9, C[v + H] = 255 & a, H++, C[v + H] = 255 & F, H++, A(C, v + H, J), H += 4, b(C, v + H, X), H += 2, b(C, v + H, $), H += 2, C[v + H] = 255 & O0, H++, I0 >= 255 ? C[v + H] = 255 : C[v + H] = 255 & I0, H++, C[v + H] = 255 & K >> 4, C[v + H + 1] = 255 & (K << 4) + (l0 >> 8), C[v + H + 2] = 255 & l0, H += 3, C[v + H] = 255 & S0, H++, C[v + H++] = 0, b(C, v + H, f.preset), H += 2, A(C, v + H, d), H += 4, b(C, v + H, R0), H += 2;
    for (var w0 = 0; w0 < H; w0++)
      k = T(C[v + w0], k);
    return b(C, v + H, k), H += 2, H;
  }
  function Q(f) {
    f.seek(0);
    var d = F1(10);
    f.readFully(d);
    var C;
    return new String(d, "ISO-8859-1").startsWith("ID3") ? C = 0 : C = ((d[6] & 127) << 21 | (d[7] & 127) << 14 | (d[8] & 127) << 7 | d[9] & 127) + d.length, C;
  }
  this.getLameTagFrame = function(f, d) {
    var C = f.internal_flags;
    if (!f.bWriteVbrTag || C.Class_ID != Lame.LAME_ID || C.VBR_seek_table.pos <= 0)
      return 0;
    if (d.length < C.VBR_seek_table.TotalFrameSize)
      return C.VBR_seek_table.TotalFrameSize;
    Xe.fill(d, 0, C.VBR_seek_table.TotalFrameSize, 0), N(f, d);
    var v = F1(V);
    if (f.free_format)
      for (var k = 1; k < V; ++k)
        v[k] = 255 & 255 * k / 100;
    else
      S(C.VBR_seek_table, v);
    var I = C.sideinfo_len;
    f.error_protection && (I -= 2), f.VBR == g1.vbr_off ? (d[I++] = 255 & f0.charAt(0), d[I++] = 255 & f0.charAt(1), d[I++] = 255 & f0.charAt(2), d[I++] = 255 & f0.charAt(3)) : (d[I++] = 255 & s0.charAt(0), d[I++] = 255 & s0.charAt(1), d[I++] = 255 & s0.charAt(2), d[I++] = 255 & s0.charAt(3)), A(d, I, x + U + Z + i0), I += 4, A(d, I, C.VBR_seek_table.nVbrNumFrames), I += 4;
    var H = C.VBR_seek_table.nBytesWritten + C.VBR_seek_table.TotalFrameSize;
    A(d, I, 0 | H), I += 4, Ye.arraycopy(v, 0, d, I, v.length), I += v.length, f.error_protection && _0.CRC_writeheader(C, d);
    for (var K = 0, k = 0; k < I; k++)
      K = T(d[k], K);
    return I += y(f, H, d, I, K), C.VBR_seek_table.TotalFrameSize;
  }, this.putVbrTag = function(f, d) {
    var C = f.internal_flags;
    if (C.VBR_seek_table.pos <= 0 || (d.seek(d.length()), d.length() == 0))
      return -1;
    var v = Q(d);
    d.seek(v);
    var k = F1(W), I = getLameTagFrame(f, k);
    return I > k.length ? -1 : (I < 1 || d.write(k, 0, I), 0);
  };
}
Me = H1;
function qe() {
  this.setModules = function(r0, _0) {
  };
}
function Ge() {
  this.setModules = function(r0, _0, i) {
  };
}
function Pe() {
}
function Ke() {
  this.setModules = function(r0, _0) {
  };
}
function Ue(r0, _0, i) {
  arguments.length != 3 && (console.error("WARN: Mp3Encoder(channels, samplerate, kbps) not specified"), r0 = 1, _0 = 44100, i = 128);
  var x = new we(), U = new qe(), Z = new ye(), i0 = new ke(), V = new de(), W = new $e(), g = new xe(), m = new Me(), G = new Re(), O = new Ke(), M = new Ae(), q = new Ve(), s0 = new Ge(), f0 = new Pe();
  x.setModules(Z, i0, V, W, g, m, G, O, f0), i0.setModules(Z, f0, G, m), O.setModules(i0, G), V.setModules(x), g.setModules(i0, M, W, q), W.setModules(q, M, x.enc.psy), M.setModules(i0), q.setModules(W), m.setModules(x, i0, G), U.setModules(s0, f0), s0.setModules(G, O, V);
  var r = x.lame_init();
  r.num_channels = r0, r.in_samplerate = _0, r.brate = i, r.mode = Ce.STEREO, r.quality = 3, r.bWriteVbrTag = !1, r.disable_reservoir = !0, r.write_id3tag_automatic = !1;
  var n = x.lame_init_params(r);
  _e(n == 0);
  var S = 1152, p = 0 | 1.25 * S + 7200, A = ie(p);
  this.encodeBuffer = function(b, e) {
    r0 == 1 && (e = b), _e(b.length == e.length), b.length > S && (S = b.length, p = 0 | 1.25 * S + 7200, A = ie(p));
    var l = x.lame_encode_buffer(r, b, e, b.length, A, 0, p);
    return new Int8Array(A.subarray(0, l));
  }, this.flush = function() {
    var b = x.lame_encode_flush(r, A, 0, p);
    return new Int8Array(A.subarray(0, b));
  };
}
function c1() {
  this.dataOffset = 0, this.dataLen = 0, this.channels = 0, this.sampleRate = 0;
}
function q1(r0) {
  return r0.charCodeAt(0) << 24 | r0.charCodeAt(1) << 16 | r0.charCodeAt(2) << 8 | r0.charCodeAt(3);
}
c1.RIFF = q1("RIFF");
c1.WAVE = q1("WAVE");
c1.fmt_ = q1("fmt ");
c1.data = q1("data");
c1.readHeader = function(r0) {
  var _0 = new c1(), i = r0.getUint32(0, !1);
  if (c1.RIFF == i && (r0.getUint32(4, !0), c1.WAVE == r0.getUint32(8, !1) && c1.fmt_ == r0.getUint32(12, !1))) {
    var x = r0.getUint32(16, !0), U = 20;
    switch (x) {
      case 16:
      case 18:
        _0.channels = r0.getUint16(U + 2, !0), _0.sampleRate = r0.getUint32(U + 4, !0);
        break;
      default:
        throw "extended fmt chunk not implemented";
    }
    U += x;
    for (var Z = c1.data, i0 = 0; Z != i && (i = r0.getUint32(U, !1), i0 = r0.getUint32(U + 4, !0), Z != i); )
      U += i0 + 8;
    return _0.dataLen = i0, _0.dataOffset = U + 8, _0;
  }
};
X1 = Ue;
D1 = c1;
function ze(r0) {
  var _0 = D1.readHeader(new DataView(r0)), i = new Int16Array(r0, _0.dataOffset, _0.dataLen / 2), x = new X1(_0.channels, _0.sampleRate, 128), U = 1152, Z = _0.channels === 1 ? i : new Int16Array(_0.dataLen / (2 * _0.channels)), i0 = _0.channels === 2 ? new Int16Array(_0.dataLen / (2 * _0.channels)) : void 0;
  if (_0.channels > 1)
    for (var V = 0; V < Z.length; V++)
      Z[V] = i[V * 2], i0[V] = i[V * 2 + 1];
  for (var W = [], g = Z.length, m = 0; g >= U; m += U) {
    var G = Z.subarray(m, m + U), O = void 0;
    i0 && (O = i0.subarray(m, m + U));
    var M = x.encodeBuffer(G, O);
    W.push(new Int8Array(M)), g -= U;
  }
  var q = x.flush();
  return W.push(new Int8Array(q)), W;
}
function Je(r0, _0) {
  var i = new AudioContext({ sampleRate: Ee }), x = new FileReader();
  x.onload = function(U) {
    i.decodeAudioData(U.target.result, function(Z) {
      var i0 = !window.OfflineAudioContext, V = new OfflineAudioContext(1, 16e3 * Z.duration, 16e3), W = V.createBufferSource();
      W.buffer = Z, W.connect(V.destination);
      var g = new FileReader();
      g.onload = function() {
        var m = function(G) {
          var O = i0 ? G.renderedBuffer : G, M = Ze(O, O.length);
          _0 && _0(M);
        };
        i0 ? (V.oncomplete = m, V.startRendering()) : V.startRendering().then(m).catch(function(G) {
          return console.warn(G);
        });
      }, g.readAsArrayBuffer(r0), W.start(0);
    });
  }, x.readAsArrayBuffer(r0);
}
function Ze(r0, _0) {
  var i = r0.numberOfChannels, x = _0 * i * 2 + 44, U = new ArrayBuffer(x), Z = new DataView(U), i0 = [], V = 0, W, g = 0, m = 0;
  for (O(1179011410), O(x - 8), O(1163280727), O(544501094), O(16), G(1), G(i), O(r0.sampleRate), O(r0.sampleRate * 2 * i), G(i * 2), G(16), O(1635017060), O(x - m - 4), V = 0; V < r0.numberOfChannels; V++)
    i0.push(r0.getChannelData(V));
  for (; m < x; ) {
    for (V = 0; V < i; V++)
      W = Math.max(-1, Math.min(1, i0[V][g])), W = (0.5 + W < 0 ? W * 32768 : W * 32767) | 0, Z.setInt16(m, W, !0), m += 2;
    g++;
  }
  return U;
  function G(M) {
    Z.setUint16(m, M, !0), m += 2;
  }
  function O(M) {
    Z.setUint32(m, M, !0), m += 4;
  }
}
export {
  Je as downsampleToWav,
  ze as encodeMp3
};
