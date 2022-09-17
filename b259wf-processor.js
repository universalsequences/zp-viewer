
/*
Code generated with Faust version 2.49.1
Compilation options: -lang wasm-ib -cn b259wf -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONb259wf() {
	return '{"name": "b259wf","filename": "b259wf.dsp","version": "2.49.1","compile_options": "-lang wasm-ib -cn b259wf -es 1 -mcd 16 -single -ftz 2","library_list": ["/usr/local/share/faust/maths.lib","/usr/local/share/faust/basics.lib","/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/signals.lib","/usr/local/share/faust/filters.lib","/usr/local/share/faust/platform.lib","/usr/local/share/faust/misceffects.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/Users/alecresende/code/faust-plugins/b259wf"],"size": 328,"inputs": 1,"outputs": 1,"meta": [ { "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/version": "0.8" },{ "compile_options": "-lang wasm-ib -cn b259wf -es 1 -mcd 16 -single -ftz 2" },{ "filename": "b259wf.dsp" },{ "filters.lib/dcblockerat:author": "Julius O. Smith III" },{ "filters.lib/dcblockerat:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/dcblockerat:license": "MIT-style STK-4.3 license" },{ "filters.lib/fir:author": "Julius O. Smith III" },{ "filters.lib/fir:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/fir:license": "MIT-style STK-4.3 license" },{ "filters.lib/iir:author": "Julius O. Smith III" },{ "filters.lib/iir:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/iir:license": "MIT-style STK-4.3 license" },{ "filters.lib/lowpass0_highpass1": "MIT-style STK-4.3 license" },{ "filters.lib/lowpass0_highpass1:author": "Julius O. Smith III" },{ "filters.lib/lowpass:author": "Julius O. Smith III" },{ "filters.lib/lowpass:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/lowpass:license": "MIT-style STK-4.3 license" },{ "filters.lib/name": "Faust Filters Library" },{ "filters.lib/pole:author": "Julius O. Smith III" },{ "filters.lib/pole:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/pole:license": "MIT-style STK-4.3 license" },{ "filters.lib/tf1:author": "Julius O. Smith III" },{ "filters.lib/tf1:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/tf1:license": "MIT-style STK-4.3 license" },{ "filters.lib/tf1s:author": "Julius O. Smith III" },{ "filters.lib/tf1s:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/tf1s:license": "MIT-style STK-4.3 license" },{ "filters.lib/tf2:author": "Julius O. Smith III" },{ "filters.lib/tf2:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/tf2:license": "MIT-style STK-4.3 license" },{ "filters.lib/tf2s:author": "Julius O. Smith III" },{ "filters.lib/tf2s:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/tf2s:license": "MIT-style STK-4.3 license" },{ "filters.lib/version": "0.3" },{ "filters.lib/zero:author": "Julius O. Smith III" },{ "filters.lib/zero:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/zero:license": "MIT-style STK-4.3 license" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.5" },{ "misceffects.lib/name": "Misc Effects Library" },{ "misceffects.lib/version": "2.0" },{ "name": "b259wf" },{ "platform.lib/name": "Generic Platform Library" },{ "platform.lib/version": "0.2" },{ "signals.lib/name": "Faust Signal Routing Library" },{ "signals.lib/version": "0.3" }],"ui": [ {"type": "vgroup","label": "b259wf","items": [ {"type": "hslider","label": "fold","shortname": "fold","address": "/b259wf/fold","index": 28,"init": 0,"min": 0,"max": 1,"step": 0.001},{"type": "hslider","label": "lowpass","shortname": "lowpass","address": "/b259wf/lowpass","index": 16,"init": 0,"min": 0,"max": 1,"step": 0.001},{"type": "hslider","label": "offset","shortname": "offset","address": "/b259wf/offset","index": 40,"init": 0,"min": -1,"max": 1,"step": 0.001}]}]}';
}
function getBase64Codeb259wf() { return "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IjogImIyNTl3Zi5kc3AiLCJ2ZXJzaW9uIjogIjIuNDkuMSIsImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWliIC1jbiBiMjU5d2YgLWVzIDEgLW1jZCAxNiAtc2luZ2xlIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9wbGF0Zm9ybS5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21pc2NlZmZlY3RzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi9Vc2Vycy9hbGVjcmVzZW5kZS9jb2RlL2ZhdXN0LXBsdWdpbnMvYjI1OXdmIl0sInNpemUiOiAzMjgsImlucHV0cyI6IDEsIm91dHB1dHMiOiAxLCJtZXRhIjogWyB7ICJiYXNpY3MubGliL25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljcy5saWIvdmVyc2lvbiI6ICIwLjgiIH0seyAiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taWIgLWNuIGIyNTl3ZiAtZXMgMSAtbWNkIDE2IC1zaW5nbGUgLWZ0eiAyIiB9LHsgImZpbGVuYW1lIjogImIyNTl3Zi5kc3AiIH0seyAiZmlsdGVycy5saWIvZGNibG9ja2VyYXQ6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvZGNibG9ja2VyYXQ6Y29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnMubGliL2RjYmxvY2tlcmF0OmxpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzLmxpYi9maXI6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvZmlyOmNvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzLmxpYi9maXI6bGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnMubGliL2lpcjphdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzLmxpYi9paXI6Y29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnMubGliL2lpcjpsaWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVycy5saWIvbG93cGFzczBfaGlnaHBhc3MxIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVycy5saWIvbG93cGFzczBfaGlnaHBhc3MxOmF1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnMubGliL2xvd3Bhc3M6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvbG93cGFzczpjb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVycy5saWIvbG93cGFzczpsaWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVycy5saWIvbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAiZmlsdGVycy5saWIvcG9sZTphdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzLmxpYi9wb2xlOmNvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzLmxpYi9wb2xlOmxpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzLmxpYi90ZjE6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvdGYxOmNvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzLmxpYi90ZjE6bGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnMubGliL3RmMXM6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvdGYxczpjb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVycy5saWIvdGYxczpsaWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVycy5saWIvdGYyOmF1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnMubGliL3RmMjpjb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVycy5saWIvdGYyOmxpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzLmxpYi90ZjJzOmF1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnMubGliL3RmMnM6Y29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnMubGliL3RmMnM6bGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnMubGliL3ZlcnNpb24iOiAiMC4zIiB9LHsgImZpbHRlcnMubGliL3plcm86YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvemVybzpjb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVycy5saWIvemVybzpsaWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAibWF0aHMubGliL2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzLmxpYi9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHMubGliL25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzLmxpYi92ZXJzaW9uIjogIjIuNSIgfSx7ICJtaXNjZWZmZWN0cy5saWIvbmFtZSI6ICJNaXNjIEVmZmVjdHMgTGlicmFyeSIgfSx7ICJtaXNjZWZmZWN0cy5saWIvdmVyc2lvbiI6ICIyLjAiIH0seyAibmFtZSI6ICJiMjU5d2YiIH0seyAicGxhdGZvcm0ubGliL25hbWUiOiAiR2VuZXJpYyBQbGF0Zm9ybSBMaWJyYXJ5IiB9LHsgInBsYXRmb3JtLmxpYi92ZXJzaW9uIjogIjAuMiIgfSx7ICJzaWduYWxzLmxpYi9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFscy5saWIvdmVyc2lvbiI6ICIwLjMiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogImIyNTl3ZiIsIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogImZvbGQiLCJzaG9ydG5hbWUiOiAiZm9sZCIsImFkZHJlc3MiOiAiL2IyNTl3Zi9mb2xkIiwiaW5kZXgiOiAyOCwiaW5pdCI6IDAsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAwMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJsb3dwYXNzIiwic2hvcnRuYW1lIjogImxvd3Bhc3MiLCJhZGRyZXNzIjogIi9iMjU5d2YvbG93cGFzcyIsImluZGV4IjogMTYsImluaXQiOiAwLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMDF9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAib2Zmc2V0Iiwic2hvcnRuYW1lIjogIm9mZnNldCIsImFkZHJlc3MiOiAiL2IyNTl3Zi9vZmZzZXQiLCJpbmRleCI6IDQwLCJpbml0IjogMCwibWluIjogLTEsIm1heCI6IDEsInN0ZXAiOiAwLjAwMX1dfV19"; }

/************************************************************************
 FAUST Architecture File
 Copyright (C) 2003-2019 GRAME, Centre National de Creation Musicale
 ---------------------------------------------------------------------
 This Architecture section is free software; you can redistribute it
 and/or modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 3 of
 the License, or (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program; If not, see <http://www.gnu.org/licenses/>.
 
 EXCEPTION : As a special exception, you may create a larger work
 that contains this FAUST architecture section and distribute
 that work under terms of your choice, so long as this FAUST
 architecture section is not modified.
 
 ************************************************************************
 ************************************************************************/

'use strict';

// Monophonic Faust DSP
class b259wfProcessor extends AudioWorkletProcessor {

    // JSON parsing functions
    static parse_ui(ui, obj, callback) {
        for (var i = 0; i < ui.length; i++) {
            b259wfProcessor.parse_group(ui[i], obj, callback);
        }
    }

    static parse_group(group, obj, callback) {
        if (group.items) {
            b259wfProcessor.parse_items(group.items, obj, callback);
        }
    }

    static parse_items(items, obj, callback) {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }

    static parse_item1(item, obj, callback) {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            b259wfProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
            || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
            || item.type === "hslider"
            || item.type === "button"
            || item.type === "checkbox"
            || item.type === "nentry") {
            obj.push({
                name: item.address,
                defaultValue: item.init,
                minValue: item.min,
                maxValue: item.max
            });
        }
    }

    static parse_item2(item, obj, callback) {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            b259wfProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
            || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            obj.soundfile_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
            || item.type === "hslider"
            || item.type === "button"
            || item.type === "checkbox"
            || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        }
    }

    static get parameterDescriptors() {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        b259wfProcessor.parse_ui(JSON.parse(getJSONb259wf()).ui, params, b259wfProcessor.parse_item1);
        return params;
    }

    constructor(options) {
        super(options);
        this.running = true;

        const importObject = {
            env: {
                memoryBase: 0,
                tableBase: 0,

                // Integer version
                _abs: Math.abs,

                // Float version
                _acosf: Math.acos,
                _asinf: Math.asin,
                _atanf: Math.atan,
                _atan2f: Math.atan2,
                _ceilf: Math.ceil,
                _cosf: Math.cos,
                _expf: Math.exp,
                _floorf: Math.floor,
                _fmodf: function (x, y) { return x % y; },
                _logf: Math.log,
                _log10f: Math.log10,
                _max_f: Math.max,
                _min_f: Math.min,
                _remainderf: function (x, y) { return x - Math.round(x / y) * y; },
                _powf: Math.pow,
                _roundf: Math.fround,
                _sinf: Math.sin,
                _sqrtf: Math.sqrt,
                _tanf: Math.tan,
                _acoshf: Math.acosh,
                _asinhf: Math.asinh,
                _atanhf: Math.atanh,
                _coshf: Math.cosh,
                _sinhf: Math.sinh,
                _tanhf: Math.tanh,
                _isnanf: Number.isNaN,
                _isinff: function (x) { return !isFinite(x); },
                _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                // Double version
                _acos: Math.acos,
                _asin: Math.asin,
                _atan: Math.atan,
                _atan2: Math.atan2,
                _ceil: Math.ceil,
                _cos: Math.cos,
                _exp: Math.exp,
                _floor: Math.floor,
                _fmod: function (x, y) { return x % y; },
                _log: Math.log,
                _log10: Math.log10,
                _max_: Math.max,
                _min_: Math.min,
                _remainder: function (x, y) { return x - Math.round(x / y) * y; },
                _pow: Math.pow,
                _round: Math.fround,
                _sin: Math.sin,
                _sqrt: Math.sqrt,
                _tan: Math.tan,
                _acosh: Math.acosh,
                _asinh: Math.asinh,
                _atanh: Math.atanh,
                _cosh: Math.cosh,
                _sinh: Math.sinh,
                _tanh: Math.tanh,
                _isnan: Number.isNaN,
                _isinf: function (x) { return !isFinite(x); },
                _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
            }
        };

        this.b259wf_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
        this.json_object = JSON.parse(options.processorOptions.json);

        this.output_handler = function (path, value) { this.port.postMessage({ path: path, value: value }); };

        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        this.integer_size = 4;

        this.factory = this.b259wf_instance.exports;
        this.HEAP = this.b259wf_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];

        // soundfile items
        this.soundfile_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function () {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }

        this.initAux = function () {
            var i;

            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                }

                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                }
            }

            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                }

                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                }
            }

            // Parse UI
            b259wfProcessor.parse_ui(this.json_object.ui, this, b259wfProcessor.parse_item2);

            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.setParamValue = function (path, val) {
            this.HEAPF32[this.pathTable[path] >> 2] = val;
        }

        this.getParamValue = function (path) {
            return this.HEAPF32[this.pathTable[path] >> 2];
        }

        // Init resulting DSP
        this.initAux();
        console.log(this);
    }

    handleMessage(event) {
        var msg = event.data;
        switch (msg.type) {
            case "destroy": this.running = false; break;
        }
    }

    process(inputs, outputs, parameters) {
        var input = inputs[0];
        var output = outputs[0];

        // Check inputs
        if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
            //console.log("Process output error");
            return true;
        }

        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }

        /*
        TODO: sample accurate control change is not yet handled
        When no automation occurs, params[i][1] has a length of 1,
        otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
        */

        // Update controls
        for (const path in parameters) {
            const paramArray = parameters[path];
            this.setParamValue(path, paramArray[0]);
        }

        // Compute
        try {
            this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
        } catch (e) {
            console.log("ERROR in compute (" + e + ")");
        }

        // Update bargraph
        this.update_outputs();

        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }

        return this.running;
    }
}

// Globals
const NUM_FRAMES = 128;
try {
    registerProcessor('b259wf', b259wfProcessor);
} catch (error) {
    console.warn(error);
}
