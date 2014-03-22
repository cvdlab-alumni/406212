# ex2

from pyplasm import *

# NORTH

# pilastri

x_pilastri = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
# y_pilastri1 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
pilastri = INSR(PROD)([x_pilastri,QUOTE([-0,9])])
pilastri = T(2)(2.3)(pilastri)
# VIEW(pilastri)
# x_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
# y_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
# pilastri2 = INSR(PROD)([x_pilastri2,y_pilastri2,QUOTE([-0,6])])
# pilastri2 = T(1)(6)(pilastri2)
# pilastri = STRUCT([pilastri1, pilastri2])

# vetrata

vetrata=CUBOID([11.5,9.3])
vetrata=T([1,2])([3.5,2])(vetrata)
# VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri)]))

# tetto

tetto=CUBOID([18.4,2])
tetto=T([1,2])([0.4,0.4])(tetto)

# VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri), COLOR(BROWN)(tetto)]))

# EAST

# pilastri

x_pilastri = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
# y_pilastri1 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
pilastri = INSR(PROD)([x_pilastri,QUOTE([-0,9])])
pilastri = T(2)(2.3)(pilastri)
# VIEW(pilastri)
# x_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
# y_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
# pilastri2 = INSR(PROD)([x_pilastri2,y_pilastri2,QUOTE([-0,6])])
# pilastri2 = T(1)(6)(pilastri2)
# pilastri = STRUCT([pilastri1, pilastri2])

# vetrata

vetrata=CUBOID([11.5,9.3])
vetrata=T([1,2])([3.5,2])(vetrata)
# VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri)]))

# tetto

tetto=CUBOID([18.4,2])
tetto=T([1,2])([0.4,0.4])(tetto)

# VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri), COLOR(BROWN)(tetto)]))

# SOUTH

# pilastri

x_pilastri = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
# y_pilastri1 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
pilastri = INSR(PROD)([x_pilastri,QUOTE([-0,9])])
pilastri = T(2)(2.3)(pilastri)
# VIEW(pilastri)
# x_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
# y_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
# pilastri2 = INSR(PROD)([x_pilastri2,y_pilastri2,QUOTE([-0,6])])
# pilastri2 = T(1)(6)(pilastri2)
# pilastri = STRUCT([pilastri1, pilastri2])

# vetrata

vetrata=CUBOID([11.5,9.3])
vetrata=T([1,2])([3.5,2])(vetrata)
# VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri)]))

# tetto

tetto=CUBOID([18.4,2])
tetto=T([1,2])([0.4,0.4])(tetto)

# VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri), COLOR(BROWN)(tetto)]))

# WEST

# pilastri

x_pilastri = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
# y_pilastri1 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
pilastri = INSR(PROD)([x_pilastri,QUOTE([-0,9])])
pilastri = T(2)(2.3)(pilastri)
# VIEW(pilastri)
# x_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
# y_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
# pilastri2 = INSR(PROD)([x_pilastri2,y_pilastri2,QUOTE([-0,6])])
# pilastri2 = T(1)(6)(pilastri2)
# pilastri = STRUCT([pilastri1, pilastri2])

# vetrata

vetrata=CUBOID([11.5,9.3])
vetrata=T([1,2])([3.5,2])(vetrata)
# VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri)]))

# tetto

tetto=CUBOID([18.4,2])
tetto=T([1,2])([0.4,0.4])(tetto)

# VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri), COLOR(BROWN)(tetto)]))