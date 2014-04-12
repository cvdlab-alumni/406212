# ex3

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

# Funzione setColor(r,g,b) per impostare un colore passando come parametri i valori r g b

def setColor(r,g,b):
	return Color4f(r/255.0,g/255.0,b/255.0,1)

grigio = setColor(68,68,68)

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

# Vertici:

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

# pavimentazione

pavimentazione = CUBOID([60,60,0.5])
pavimentazione = T([1,2])([-20,-27])(pavimentazione)
pavimentazione = STRUCT([COLOR(BROWN)(pavimentazione)])

# 3D model

model_3D = STRUCT([nationalgalerie, palazzi, pavimentazione])

VIEW(model_3D)