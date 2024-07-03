var totalTime = 0;
var startTime = 0;
export var vHovertime = {
    mounted: function (el, binding) {
        el.onmouseenter = function () {
            startTime = Date.now();
        };
        el.onmouseleave = function () {
            var duration = Date.now() - startTime;
            totalTime += duration;
            if (binding.value && binding.value.mouseLeaveCallback) {
                binding.value.mouseLeaveCallback(duration);
            }
        };
    },
    unmounted: function (el, binding) {
        if (binding.value && binding.value.unmountedCallback) {
            binding.value.unmountedCallback(totalTime);
        }
        el.onmouseleave = null;
        totalTime = 0;
        startTime = 0;
    },
};
