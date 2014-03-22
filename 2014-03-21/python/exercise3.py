# ex3

from pyplasm import *

# pilastri

x_pilastri1 = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
y_pilastri1 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
pilastri1 = INSR(PROD)([x_pilastri1,y_pilastri1,QUOTE([-0,6])])
pilastri1 = T(2)(6)(pilastri1)
x_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
y_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
pilastri2 = INSR(PROD)([x_pilastri2,y_pilastri2,QUOTE([-0,6])])
pilastri2 = T(1)(6)(pilastri2)
pilastri = STRUCT([pilastri1, pilastri2])

# vetrata

vetrata=CUBOID([11.5,11.5,6])
vetrata=T([1,2])([3.5,4])(vetrata)

# tetto

tetto=CUBOID([18.4,18.4,2])
tetto=T([1,2,3])([0.4,0.4,6])(tetto)

VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri), COLOR(BROWN)(tetto)]))