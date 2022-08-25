var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"bets"},[_c('div',{staticClass:"bets--item header"},[_c('span',[_vm._v(_vm._s(_vm.bets.length)+" playing")]),_c('span',[_vm._v("Rate")]),_c('span',[_vm._v(_vm._s(_vm.formatWithLamports(_vm.betsSum))+" SOL")])]),_vm._l((_vm.bets),function(bet){return _c('div',{key:bet.betId,staticClass:"bets--item",class:bet.state},[_c('span',[_vm._v(_vm._s(bet.name))]),_c('span',[_vm._v(_vm._s(bet.multiplier ? `${bet.multiplier.toFixed(2)}x` : '-'))]),_c('span',[_vm._v(_vm._s(bet.state === 'cashout' ? `+${_vm.formatWithLamports(bet.amount * bet.multiplier)}` : bet.amount)+" SOL")])])})],2)
}
var staticRenderFns = []

export { render, staticRenderFns }