# ex2

from pyplasm import *

# facciata est

# pilastri

x_pilastri1 = QUOTE([-0.,0.2,-0.,-0.] * 2)
y_pilastri1 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
pilastri1 = INSR(PROD)([x_pilastri1,y_pilastri1,QUOTE([-0,6])])
pilastri1 = T(2)(6)(pilastri1)

# vetrata

vetrata1=CUBOID([0.5,11.5,6])
vetrata1=T([1,2])([4,4])(vetrata1)

est=STRUCT([COLOR(CYAN)(vetrata1), COLOR(BROWN)(pilastri1)])
VIEW(est)

# facciata nord

# pilastri

x_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
y_pilastri2 = QUOTE([-0.,0.2,-0.,-0.] * 2)
pilastri2 = INSR(PROD)([x_pilastri2,y_pilastri2,QUOTE([-0,6])])
pilastri2 = T(1)(6)(pilastri2)

# vetrata

vetrata2=CUBOID([11.5,0.5,6])
vetrata2=T([1,2])([4,4])(vetrata2)

nord=STRUCT([COLOR(CYAN)(vetrata2), COLOR(BROWN)(pilastri2)])
VIEW(nord)

# facciata ovest

# pilastri

x_pilastri3 = QUOTE([-0.,0.2,-0.,-0.] * 2)
y_pilastri3 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
pilastri3 = INSR(PROD)([x_pilastri3,y_pilastri3,QUOTE([-0,6])])
pilastri3 = T([1,2])([19.5,6])(pilastri3)

# vetrata

vetrata3=CUBOID([0.5,11.5,6])
vetrata3=T([1,2])([15.5,4])(vetrata3)

ovest=STRUCT([COLOR(CYAN)(vetrata3), COLOR(BROWN)(pilastri3)])
VIEW(ovest)

# facciata sud

# pilastri

x_pilastri4 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
y_pilastri4 = QUOTE([-0.,0.2,-0.,-0.] * 2)
pilastri4 = INSR(PROD)([x_pilastri4,y_pilastri4,QUOTE([-0,6])])
pilastri4 = T([1,2])([6,19.5])(pilastri4)

# vetrata

vetrata4=CUBOID([12,0.5,6])
vetrata4=T([1,2])([4,15.5])(vetrata4)

sud=STRUCT([COLOR(CYAN)(vetrata4), COLOR(BROWN)(pilastri4)])
VIEW(sud)

# tetto

tetto=CUBOID([19.9,19.9,2])
tetto=T([1,2,3])([-0.1,-0.1,6])(tetto)
tetto = STRUCT([COLOR(BROWN)(tetto)])

# 3D model

model_3D = STRUCT([est, nord, ovest, sud, tetto])

VIEW(model_3D)