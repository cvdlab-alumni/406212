# ex1

from pyplasm import *

# partizione di base

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

# VIEW(STRUCT([COLOR(BROWN)(pilastri)]))

# partizione intermedia

# vetrata

vetrata=CUBOID([11.5,11.5,6])
vetrata=T([1,2])([4,4])(vetrata)

# VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BLACK)(pilastri)]))

# partizione di copertura

# tetto

tetto=CUBOID([18.4,18.4,2])
tetto=T([1,2,3])([0.4,0.4,6])(tetto)

# VIEW(COLOR(BROWN)(tetto))

# Neue Nationalgalerie, Berlin

nationalgalerie = STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri), COLOR(BROWN)(tetto)])

# 3D model

model_3D = STRUCT([nationalgalerie])

VIEW(model_3D)