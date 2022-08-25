var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"modal",class:[_vm.size]},[_c('div',{staticClass:"modal__bg",on:{"click":_vm.closeModal}}),_c('transition',{attrs:{"name":"fade","mode":"out-in","appear":""}},[(_vm.isStartAnimation)?_c('div',{staticClass:"modal__content"},[_vm._t("default"),(!_vm.disableClose)?_c('div',{staticClass:"close",on:{"click":_vm.closeModal}}):_vm._e()],2):_vm._e()])],1)
}
var staticRenderFns = []

export { render, staticRenderFns }