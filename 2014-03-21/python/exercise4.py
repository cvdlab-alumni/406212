# ex4

from pyplasm import *

# pilastri

x_pilastri1 = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
y_pilastri1 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
pilastri1 = INSR(PROD)([x_pilastri1,y_pilastri1,QUOTE([-0,9])])
pilastri1 = T(2)(6)(pilastri1)
x_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 2)
y_pilastri2 = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
pilastri2 = INSR(PROD)([x_pilastri2,y_pilastri2,QUOTE([-0,9])])
pilastri2 = T(1)(6)(pilastri2)
pilastri = STRUCT([pilastri1, pilastri2])
pilastri = T(3)(-1)(pilastri)

# vetrata

vetrata=CUBOID([11.5,11.5,6])
vetrata=T([1,2,3])([3.5,4,1])(vetrata)

# moduli

x_moduli = QUOTE([-0.1,0.1,-0.1,-0.665] * 13)
y_moduli = QUOTE([-0.1,0.1,-0.1,-0.665] * 13)
moduli = INSR(PROD)([x_moduli,y_moduli,QUOTE([-0,6])])
moduli = T([1,2,3])([3.3,3.79,1])(moduli)

# tetto

tetto=CUBOID([19,19,2])
tetto=T(3)(7)(tetto)

# scala

dom1D = INTERVALS(2)(3)
dom3D = INSR(PROD)([INTERVALS(2*PI)(24), dom1D, dom1D])
def spiral(p):
  alpha,r,h = p;
  return [r*COS(alpha), r*SIN(alpha), 5*alpha/(2*PI)]
scala = MAP(spiral)(dom3D)
scala=T([1,2,3])([10,9,-4])(scala)

# seminterrato

x_seminterrato = QUOTE([-0.4,18.4])
y_seminterrato = QUOTE([-0.4,18.4])
seminterrato = INSR(PROD)([x_seminterrato,y_seminterrato,QUOTE([0.6,-4,0.6])])
seminterrato = T(3)(-4)(seminterrato)
x_pilastri3 = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
y_pilastri3 = QUOTE([-0.4,0.4,-0.4,-4.8] * 4)
pilastri3 = INSR(PROD)([x_pilastri3,y_pilastri3,QUOTE([-0,5])])
pilastri3 = T(3)(-4)(pilastri3)


VIEW(STRUCT([COLOR(CYAN)(vetrata), COLOR(BROWN)(pilastri), COLOR(BROWN)(pilastri3), COLOR(BROWN)(tetto), scala, COLOR(BROWN)(seminterrato), COLOR(BLACK)(moduli)]))