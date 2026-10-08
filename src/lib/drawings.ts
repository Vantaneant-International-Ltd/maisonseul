// Outline drawings for every piece, used until photographs exist.
// `dim` lines are seams and details, drawn thinner and greyer.
export type Drawing = { box: string; paths: { d: string; dim?: boolean }[] };
export const SWATCH: Record<string, string> = { Unlit: '#121619', Concrete: '#4a4f53', 'Blinding White': '#f2f3f1' };
export const NECK = { d: 'M104 46 C110 58 130 58 136 46', dim: true };
export const TEE: Drawing = {
	box: '0 0 240 240',
	paths: [
		{ d: 'M96 40 L56 48 L22 94 L44 106 L58 88 L58 204 L182 204 L182 88 L196 106 L218 94 L184 48 L144 40 C136 54 104 54 96 40 Z' },
		NECK
	]
};
export const LONG: Drawing = {
	box: '0 0 240 240',
	paths: [
		{ d: 'M96 40 L56 48 L30 112 L18 212 L38 214 L50 130 L58 106 L58 204 L182 204 L182 106 L190 130 L202 214 L222 212 L210 112 L184 48 L144 40 C136 54 104 54 96 40 Z' },
		NECK
	]
};
export const SHELL: Drawing = {
	box: '0 0 240 240',
	paths: [
		{ d: 'M98 44 L58 52 L32 116 L20 216 L40 218 L52 136 L60 112 L60 216 L180 216 L180 112 L188 136 L200 218 L220 216 L208 116 L182 52 L142 44 C152 12 88 12 98 44 Z' },
		{ d: 'M104 44 C106 28 134 28 136 44', dim: true },
		{ d: 'M120 34 L120 216', dim: true }
	]
};
export const PUFFER: Drawing = {
	box: '0 0 240 240',
	paths: [
		{ d: 'M94 40 L48 50 L22 112 L12 198 L38 202 L48 134 L54 114 L54 198 L186 198 L186 114 L192 134 L202 202 L228 198 L218 112 L192 50 L146 40 L146 24 L94 24 Z' },
		{ d: 'M60 78 L180 78 M56 108 L184 108 M54 138 L186 138 M54 168 L186 168 M34 100 L50 104 M206 100 L190 104 M24 150 L46 152 M216 150 L194 152', dim: true },
		{ d: 'M120 24 L120 198', dim: true }
	]
};
export const SHIRT: Drawing = {
	box: '0 0 240 240',
	paths: [
		{ d: 'M100 38 L58 48 L32 114 L20 214 L40 216 L52 134 L60 110 L60 220 L180 220 L180 110 L188 134 L200 216 L220 214 L208 114 L182 48 L140 38 Z' },
		{ d: 'M100 38 L113 60 L120 50 L127 60 L140 38' },
		{ d: 'M100 38 L104 29 L136 29 L140 38 M120 50 L120 220 M20 204 L40 206 M200 206 L220 204', dim: true }
	]
};
export const OVERSHIRT: Drawing = {
	box: '0 0 240 240',
	paths: [
		{ d: 'M98 38 L52 48 L26 116 L14 214 L36 216 L48 136 L56 112 L56 214 L184 214 L184 112 L192 136 L204 216 L226 214 L214 116 L188 48 L142 38 Z' },
		{ d: 'M98 38 L112 62 L120 52 L128 62 L142 38' },
		{ d: 'M98 38 L103 28 L137 28 L142 38 M120 52 L120 214 M14 202 L36 204 M204 204 L226 202', dim: true }
	]
};
export const JOGGER: Drawing = {
	box: '0 0 200 400',
	paths: [
		{ d: 'M50 32 C24 140 22 270 54 380 L95 380 C98 290 100 200 100 128 C100 200 102 290 105 380 L146 380 C178 270 176 140 150 32 Z' },
		{ d: 'M48 18 L152 18 L152 32 L48 32 Z' },
		{ d: 'M100 32 L100 52 M86 32 L84 44 M114 32 L116 44', dim: true }
	]
};


// MA (間): waistband plus the leg outline of each style.
const WAIST = { d: 'M48 18 L152 18 L152 32 L48 32 Z' };
const FLY = { d: 'M100 32 L100 92', dim: true };
const ma = (d: string): Drawing => ({ box: '0 0 200 400', paths: [WAIST, { d }, FLY] });
export const MA_LOOSE = ma('M50 32 L46 380 L96 380 L100 122 L104 380 L154 380 L150 32 Z');
export const MA_BAGGY = ma('M48 32 L28 380 L96 380 L100 128 L104 380 L172 380 L152 32 Z');
export const MA_BARREL = ma(
	'M50 32 C24 150 24 270 54 380 L94 380 C98 300 100 210 100 126 C100 210 102 300 106 380 L146 380 C176 270 176 150 150 32 Z'
);

// SKRIN, as a plain outline for the inventory grid (the product page has the full drawing).
export const CASE: Drawing = {
	box: '0 0 240 300',
	paths: [
		{ d: 'M60 40 H180 A20 20 0 0 1 200 60 V256 A20 20 0 0 1 180 276 H60 A20 20 0 0 1 40 256 V60 A20 20 0 0 1 60 40 Z' },
		{ d: 'M98 40 V28 H142 V40' },
		{ d: 'M56 56 H184 V260 H56 Z M64 276 V288 M80 276 V288 M160 276 V288 M176 276 V288', dim: true },
		{ d: 'M172 40 H180 A20 20 0 0 1 200 60 V68' }
	]
};
