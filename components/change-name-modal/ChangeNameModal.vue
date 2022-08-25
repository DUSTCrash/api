var render = function render(){var _vm=this,_c=_vm._self._c;return _c('Modal',{attrs:{"modalId":"changeName"}},[_c('div',{staticClass:"row manage-header"},[_c('span',{staticClass:"modal--title"},[_vm._v("Change name")])]),_c('div',{staticClass:"row edit"},[_c('span',{staticClass:"rules"},[_vm._v("Please type in your new name. (Spaces & special characters are not allowed)")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.changeNameStr),expression:"changeNameStr"}],domProps:{"value":(_vm.changeNameStr)},on:{"input":function($event){if($event.target.composing)return;_vm.changeNameStr=$event.target.value}}}),_c('Button',{attrs:{"color":"green","size":"md"},on:{"click":_vm.change}},[_vm._v("Change")])],1)])
}
var staticRenderFns = []

export { render, staticRenderFns }