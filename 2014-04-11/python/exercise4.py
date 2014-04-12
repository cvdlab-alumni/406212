# ex 4

from pyplasm import *
import sys
sys.path.insert(0,'C:/Python26/Lib/site-packages/lar-cc/lib/py/')

from scipy import *
from boolean import *
from boolean1 import *
from boolean2 import *
from lar2psm import *
from larcc import *
from largrid import *
from mapper import *
from morph import *
from myfont import *
from simplexn import *

# Funzioni

def setColor(r,g,b):
	return Color4f(r/255.0,g/255.0,b/255.0,1)

def larRod(params):
  radius,height= params
  def larRod0(shape=[36,1]):
    V,CV = larCylinder(params)(shape)
    return V,[range(len(V))]
  return larRod0

def larBall(radius=1):
  def larBall0(shape=[18,36]):
    V,CV = larSphere(radius)(shape)
    return V,[range(len(V))]
  return larBall0

# Colori

grigio = setColor(68,68,68)
giallo = setColor(255,246,156)
verde = setColor(35,145,35)
verde2 = setColor(17,87,17)
marrone = setColor(94,28,0)
marrone2 = setColor(206,107,7)

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
vetrata=T([1,2])([4,4])(vetrata)

# tetto

tetto=CUBOID([18.4,18.4,2])
tetto=T([1,2,3])([0.4,0.4,6])(tetto)

# palazzi

# vertici:

V = [[3,3],[6,3],[13,3],[9,5],[12,5],[13,5],[15,5],[3,7],[6,7],[3,10],[5,10],[9,10],[3,12],[5,12],[9,11],[12,11],[15,11]]

CV = [[9,10,13,12,9],[0,1,8,7,0],[1,2,5,4,3,11,10,9,7,8,1],[3,4,15,14,11,3],[4,5,6,16,15,4]]

def faceToEdge(CV):
	edges = AA(sorted)(CAT([TRANS([face[:-1],face[1:]])for face in CV]))
	return AA(eval)(set(AA(str)(edges)))

EV = faceToEdge(CV)

modelEdges = (V,CV)

modelFaces = (V,EV)

V0 = AA(LIST)([0.,3.,6.,9.,12.,15.,18.])

C0V = AA(LIST)(range(7))

modelFloor = (V0,C0V)

mod2D = larModelProduct([modelEdges,modelFloor])

mod1D = larModelProduct([modelFaces,modelFloor])

C1V = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]

modelWall = V0,C1V

mod11D = larModelProduct([modelEdges,modelWall])

palazzo1 = STRUCT(AA(COLOR(BROWN))(MKPOLS(mod1D) + (MKPOLS(mod2D) + (MKPOLS(mod11D)))))
palazzo1 = T(2)(-30)(palazzo1)

palazzo2 = STRUCT(AA(COLOR(BROWN))(MKPOLS(mod1D) + (MKPOLS(mod2D) + (MKPOLS(mod11D)))))
palazzo2 = T([1,2])([12,-30])(palazzo2)

V02 = AA(LIST)([0.,3.,6.,9.,12.,15.,18.,21.,24.])

C0V2 = AA(LIST)(range(9))

modelFloor2 = (V02,C0V2)

mod2D2 = larModelProduct([modelEdges,modelFloor2])

mod1D2 = larModelProduct([modelFaces,modelFloor2])

C1V2 = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]]

modelWall2 = V02,C1V2

mod11D2 = larModelProduct([modelEdges,modelWall2])

palazzo3 = STRUCT(AA(COLOR(grigio))(MKPOLS(mod1D2) + (MKPOLS(mod2D2) + (MKPOLS(mod11D2)))))
palazzo3 = T([1,2])([23,-30])(palazzo3)

palazzi = STRUCT([palazzo1, palazzo2, palazzo3])

# Neue Nationalgalerie, Berlin

nationalgalerie = STRUCT([COLOR(CYAN)(vetrata), COLOR(grigio)(pilastri), COLOR(grigio)(tetto)])

# arredo urbano

# alberi

tronco1 = larRod([.25,5.])([32,1])
tronco1 = STRUCT(MKPOLS(tronco1))
tronco1 = STRUCT([T(1)(30)(tronco1)])

foglie1 = larBall(3)([18,36])
foglie1 = STRUCT(MKPOLS(foglie1))
foglie1 = STRUCT([T([1,3])([30,5.5])(foglie1)])

albero1 = STRUCT([COLOR(marrone)(tronco1), COLOR(verde)(foglie1)])

tronco2 = larRod([.25,5.])([32,1])
tronco2 = STRUCT(MKPOLS(tronco2))
tronco2 = STRUCT([T([1,2])([33,8])(tronco2)])

foglie2 = larBall(3)([18,36])
foglie2 = STRUCT(MKPOLS(foglie2))
foglie2 = STRUCT([T([1,2,3])([33,8,5.5])(foglie2)])

albero2 = STRUCT([COLOR(marrone)(tronco2), COLOR(verde)(foglie2)])

tronco3 = larRod([.25,5.])([32,1])
tronco3 = STRUCT(MKPOLS(tronco3))
tronco3 = STRUCT([T([1,2])([31,15])(tronco3)])

foglie3 = larBall(3)([18,36])
foglie3 = STRUCT(MKPOLS(foglie3))
foglie3 = STRUCT([T([1,2,3])([31,15,5.5])(foglie3)])

albero3 = STRUCT([COLOR(marrone)(tronco3), COLOR(verde)(foglie3)])

tronco4 = larRod([.25,5.])([32,1])
tronco4 = STRUCT(MKPOLS(tronco4))
tronco4 = STRUCT([T([1,2])([26,-10])(tronco4)])

foglie4 = larBall(3)([18,36])
foglie4 = STRUCT(MKPOLS(foglie4))
foglie4 = STRUCT([T([1,2,3])([26,-10,5.5])(foglie4)])

albero4 = STRUCT([COLOR(marrone)(tronco4), COLOR(verde)(foglie4)])

tronco5 = larRod([.25,5.])([32,1])
tronco5 = STRUCT(MKPOLS(tronco5))
tronco5 = STRUCT([T([1,2])([20,-11])(tronco5)])

foglie5 = larBall(3)([18,36])
foglie5 = STRUCT(MKPOLS(foglie5))
foglie5 = STRUCT([T([1,2,3])([20,-11,5.5])(foglie5)])

albero5 = STRUCT([COLOR(marrone)(tronco5), COLOR(verde2)(foglie5)])

tronco6 = larRod([.25,5.])([32,1])
tronco6 = STRUCT(MKPOLS(tronco6))
tronco6 = STRUCT([T([1,2])([15,-9])(tronco6)])

foglie6 = larBall(3)([18,36])
foglie6 = STRUCT(MKPOLS(foglie6))
foglie6 = STRUCT([T([1,2,3])([15,-9,5.5])(foglie6)])

albero6 = STRUCT([COLOR(marrone)(tronco6), COLOR(verde)(foglie6)])

tronco7 = larRod([.25,5.])([32,1])
tronco7 = STRUCT(MKPOLS(tronco7))
tronco7 = STRUCT([T([1,2])([8,-10])(tronco7)])

foglie7 = larBall(3)([18,36])
foglie7 = STRUCT(MKPOLS(foglie7))
foglie7 = STRUCT([T([1,2,3])([8,-10,5.5])(foglie7)])

albero7 = STRUCT([COLOR(marrone)(tronco7), COLOR(verde2)(foglie7)])

tronco8 = larRod([.25,5.])([32,1])
tronco8 = STRUCT(MKPOLS(tronco8))
tronco8 = STRUCT([T([1,2])([-10, 7])(tronco8)])

foglie8 = larBall(3)([18,36])
foglie8 = STRUCT(MKPOLS(foglie8))
foglie8 = STRUCT([T([1,2,3])([-10,7,5.5])(foglie8)])

albero8 = STRUCT([COLOR(marrone)(tronco8), COLOR(verde)(foglie8)])

tronco9 = larRod([.25,5.])([32,1])
tronco9 = STRUCT(MKPOLS(tronco9))
tronco9 = STRUCT([T([1,2])([-10, 15])(tronco9)])

foglie9 = larBall(3)([18,36])
foglie9 = STRUCT(MKPOLS(foglie9))
foglie9 = STRUCT([T([1,2,3])([-10,15,5.5])(foglie9)])

albero9 = STRUCT([COLOR(marrone)(tronco9), COLOR(verde2)(foglie9)])

alberi = STRUCT([albero1, albero2, albero3, albero4, albero5, albero6, albero7, albero8, albero9])

# pavimentazione

pavimentazione = CUBOID([60,60,5])
pavimentazione = T([1,2,3])([-20,-27,-5])(pavimentazione)
pavimentazione = STRUCT([COLOR(BROWN)(pavimentazione)])

# pavimentazione con scala

extraPavimento1 = CUBOID([60,10,0.5])
extraPavimento1 = T([1,2,3])([-20,33,-5])(extraPavimento1)
extraPavimento2 = CUBOID([58,10,1])
extraPavimento2 = T([1,2,3])([-18,33,-5])(extraPavimento2)
extraPavimento3 = CUBOID([56,10,1.5])
extraPavimento3 = T([1,2,3])([-16,33,-5])(extraPavimento3)
extraPavimento4 = CUBOID([54,10,2])
extraPavimento4 = T([1,2,3])([-14,33,-5])(extraPavimento4)
extraPavimento5 = CUBOID([52,10,2.5])
extraPavimento5 = T([1,2,3])([-12,33,-5])(extraPavimento5)
extraPavimento6 = CUBOID([50,10,3])
extraPavimento6 = T([1,2,3])([-10,33,-5])(extraPavimento6)
extraPavimento7 = CUBOID([48,10,3.5])
extraPavimento7 = T([1,2,3])([-8,33,-5])(extraPavimento7)
extraPavimento8 = CUBOID([60,10,1.5])
extraPavimento8 = T([1,2,3])([-20,33,-6.5])(extraPavimento8)
scala = STRUCT([COLOR(BROWN)(extraPavimento1), COLOR(BROWN)(extraPavimento2), COLOR(BROWN)(extraPavimento3), COLOR(BROWN)(extraPavimento4), COLOR(BROWN)(extraPavimento5), COLOR(BROWN)(extraPavimento6), COLOR(BROWN)(extraPavimento7), COLOR(BROWN)(extraPavimento8)])
scala = T(3)(1.5)(scala)
pavimentazione = STRUCT([pavimentazione, scala])

# lampione

palo = larRod([.25,7.])([32,1])
palo = STRUCT(MKPOLS(palo))
palo = STRUCT([T([1,2])([-12,-23])(palo)])

luce = larBall(1)([18,36])
luce = STRUCT(MKPOLS(luce))
luce = STRUCT([T([1,2,3])([-12,-23,7.5])(luce)])

lampione = STRUCT([COLOR(grigio)(palo), COLOR(giallo)(luce)])

# panchina

basepanchina = CUBOID([1,1,0.5])
basepanchina2 = T(1)(4)(basepanchina)
panchina3 = CUBOID([5,1,0.5])
panchina3 = T(3)(0.5)(panchina3)
panchina = STRUCT([COLOR(grigio)(basepanchina), COLOR(grigio)(basepanchina2), COLOR(grigio)(panchina3)])
panchina = T([1,2])([10,30])(panchina)

# punto di informazioni

punto_informazioni1 = CUBOID([4,0.5,3])
punto_informazioni1 = STRUCT([COLOR(marrone2)(punto_informazioni1)])
punto_informazioni2 = T(2)(4)(punto_informazioni1)
punto_informazioni3 = CUBOID([0.5,4,3])
punto_informazioni3 = STRUCT([COLOR(marrone2)(punto_informazioni3)])
punto_informazioni4 = CUBOID([0.5,4,1.5])
punto_informazioni4 = STRUCT([COLOR(marrone2)(punto_informazioni4)])
punto_informazioni4 = T(1)(3.5)(punto_informazioni4)
tetto_pi = CUBOID([4.5,4.5,0.3])
tetto_pi = STRUCT([COLOR(marrone2)(tetto_pi)])
tetto_pi = T(3)(3)(tetto_pi)

punto_informazioni = STRUCT([punto_informazioni1,punto_informazioni2,punto_informazioni3,punto_informazioni4,tetto_pi])
punto_informazioni = T([1,2])([-15,23])(punto_informazioni)

# 3D model

model_3D = STRUCT([nationalgalerie, palazzi, alberi, pavimentazione, lampione, panchina, punto_informazioni])

VIEW(model_3D)