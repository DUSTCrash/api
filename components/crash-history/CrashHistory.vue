var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"crash-history"},_vm._l((_vm.items),function(item){return _c('div',{key:item.id,staticClass:"item",class:_vm.getValueLevel(item.round_number),on:{"click":function($event){return _vm.showFairModal(item)}}},[_vm._v(" "+_vm._s(item.round_number.toFixed(2))+"x ")])}),0)
}
var staticRenderFns = []

export { render, staticRenderFns }