/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeFullscreenControlProps {
  
  /** The URL to an SVG element or fragment to display for entering fullscreen. */
  enterIcon?: Components.VimeFullscreenControl["enterIcon"]
  
  /** The URL to an SVG element or fragment to display for exiting fullscreen. */
  exitIcon?: Components.VimeFullscreenControl["exitIcon"]
  
  /** The direction in which the tooltip should grow. */
  tooltipDirection?: Components.VimeFullscreenControl["tooltipDirection"]
  
  /** Whether the tooltip should not be displayed. */
  hideTooltip?: Components.VimeFullscreenControl["hideTooltip"]
  
  /** Scale the size of the control up/down by the amount given. */
  scale?: Components.VimeFullscreenControl["scale"]
  
  /** A slash (`/`) separated string of JS keyboard keys (`KeyboardEvent.key`), that when caught in
a `keydown` event, will trigger a `click` event on the control. */
  keys?: Components.VimeFullscreenControl["keys"]
  
  /**  */
  isFullscreenActive?: Components.VimeFullscreenControl["isFullscreenActive"]
  
  /**  */
  i18n?: Components.VimeFullscreenControl["i18n"]
  
  /**  */
  playbackReady?: Components.VimeFullscreenControl["playbackReady"]
}

interface VimeFullscreenControlEvents {
  
}

interface VimeFullscreenControlSlots {
  default: any
}
  
/* generated by Svelte v3.24.1 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let vime_fullscreen_control;
	let current;
	const default_slot_template = /*$$slots*/ ctx[12].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

	return {
		c() {
			vime_fullscreen_control = element("vime-fullscreen-control");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_fullscreen_control, "enter-icon", /*enterIcon*/ ctx[0]);
			set_custom_element_data(vime_fullscreen_control, "exit-icon", /*exitIcon*/ ctx[1]);
			set_custom_element_data(vime_fullscreen_control, "tooltip-direction", /*tooltipDirection*/ ctx[2]);
			set_custom_element_data(vime_fullscreen_control, "hide-tooltip", /*hideTooltip*/ ctx[3]);
			set_custom_element_data(vime_fullscreen_control, "scale", /*scale*/ ctx[4]);
			set_custom_element_data(vime_fullscreen_control, "keys", /*keys*/ ctx[5]);
			set_custom_element_data(vime_fullscreen_control, "is-fullscreen-active", /*isFullscreenActive*/ ctx[6]);
			set_custom_element_data(vime_fullscreen_control, "playback-ready", /*playbackReady*/ ctx[7]);
		},
		m(target, anchor) {
			insert(target, vime_fullscreen_control, anchor);

			if (default_slot) {
				default_slot.m(vime_fullscreen_control, null);
			}

			/*vime_fullscreen_control_binding*/ ctx[13](vime_fullscreen_control);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2048) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[11], dirty, null, null);
				}
			}

			if (!current || dirty & /*enterIcon*/ 1) {
				set_custom_element_data(vime_fullscreen_control, "enter-icon", /*enterIcon*/ ctx[0]);
			}

			if (!current || dirty & /*exitIcon*/ 2) {
				set_custom_element_data(vime_fullscreen_control, "exit-icon", /*exitIcon*/ ctx[1]);
			}

			if (!current || dirty & /*tooltipDirection*/ 4) {
				set_custom_element_data(vime_fullscreen_control, "tooltip-direction", /*tooltipDirection*/ ctx[2]);
			}

			if (!current || dirty & /*hideTooltip*/ 8) {
				set_custom_element_data(vime_fullscreen_control, "hide-tooltip", /*hideTooltip*/ ctx[3]);
			}

			if (!current || dirty & /*scale*/ 16) {
				set_custom_element_data(vime_fullscreen_control, "scale", /*scale*/ ctx[4]);
			}

			if (!current || dirty & /*keys*/ 32) {
				set_custom_element_data(vime_fullscreen_control, "keys", /*keys*/ ctx[5]);
			}

			if (!current || dirty & /*isFullscreenActive*/ 64) {
				set_custom_element_data(vime_fullscreen_control, "is-fullscreen-active", /*isFullscreenActive*/ ctx[6]);
			}

			if (!current || dirty & /*playbackReady*/ 128) {
				set_custom_element_data(vime_fullscreen_control, "playback-ready", /*playbackReady*/ ctx[7]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(vime_fullscreen_control);
			if (default_slot) default_slot.d(detaching);
			/*vime_fullscreen_control_binding*/ ctx[13](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { enterIcon = undefined } = $$props;
	let { exitIcon = undefined } = $$props;
	let { tooltipDirection = undefined } = $$props;
	let { hideTooltip = undefined } = $$props;
	let { scale = undefined } = $$props;
	let { keys = undefined } = $$props;
	let { isFullscreenActive = undefined } = $$props;
	let { i18n = undefined } = $$props;
	let { playbackReady = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(14, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(8, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_fullscreen_control_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(8, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("enterIcon" in $$props) $$invalidate(0, enterIcon = $$props.enterIcon);
		if ("exitIcon" in $$props) $$invalidate(1, exitIcon = $$props.exitIcon);
		if ("tooltipDirection" in $$props) $$invalidate(2, tooltipDirection = $$props.tooltipDirection);
		if ("hideTooltip" in $$props) $$invalidate(3, hideTooltip = $$props.hideTooltip);
		if ("scale" in $$props) $$invalidate(4, scale = $$props.scale);
		if ("keys" in $$props) $$invalidate(5, keys = $$props.keys);
		if ("isFullscreenActive" in $$props) $$invalidate(6, isFullscreenActive = $$props.isFullscreenActive);
		if ("i18n" in $$props) $$invalidate(9, i18n = $$props.i18n);
		if ("playbackReady" in $$props) $$invalidate(7, playbackReady = $$props.playbackReady);
		if ("$$scope" in $$props) $$invalidate(11, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, i18n*/ 16896) {
			$: if (__mounted) setProp("i18n", i18n);
		}
	};

	return [
		enterIcon,
		exitIcon,
		tooltipDirection,
		hideTooltip,
		scale,
		keys,
		isFullscreenActive,
		playbackReady,
		__ref,
		i18n,
		getWebComponent,
		$$scope,
		$$slots,
		vime_fullscreen_control_binding
	];
}

class VimeFullscreenControl extends SvelteComponent {
  $$prop_def: VimeFullscreenControlProps;
  $$events_def: VimeFullscreenControlEvents;
  $$slot_def: VimeFullscreenControlSlots;

  $on<K extends keyof VimeFullscreenControlEvents>(type: K, callback: (e: VimeFullscreenControlEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeFullscreenControlProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			enterIcon: 0,
			exitIcon: 1,
			tooltipDirection: 2,
			hideTooltip: 3,
			scale: 4,
			keys: 5,
			isFullscreenActive: 6,
			i18n: 9,
			playbackReady: 7,
			getWebComponent: 10
		});
	}

	get getWebComponent(): HTMLVimeFullscreenControlElement | undefined {
		return this.$$.ctx[10];
	}
}

export default VimeFullscreenControl;