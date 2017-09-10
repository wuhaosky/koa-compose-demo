
# koa-compose 作用
middleware是一个数组，元素都是generator，例如[g1, g2, g3]。compose函数将middleware数组转成形如*g1(g2(g3(noop)))的generator。这样g1、g2、g3就会以回形针的顺序来执行。