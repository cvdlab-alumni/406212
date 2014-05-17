# ex2

from pyplasm import *
from scipy import *
import os,sys
# inserire il path corretto per la libreria larcc
sys.path.insert(0, 'C:/Python26/Lib/site-packages/lar-cc/lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *
from sysml import *
from architectural import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])

# LEGENDA:

# sog = soggiorno
# b2p = bagno1 e sala da pranzo
# kbl = cucina, bagno2 e camera da letto 1
# l2 = camera da letto 2
# rc = ripostiglio e corridoio

sog = assemblyDiagramInit([3,3,2])([[.3,8,.3],[.3,8,.3],[.3,2.7]])
V,CV = sog
hpc = STRUCT(MKPOLS(sog))
hpc = cellNumbering (sog,hpc)(range(len(CV)),CYAN,2)
# VIEW(hpc)

toRemove = [9]
sog = sog[0], [cell for k,cell in enumerate(sog[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(sog)))
# DRAW(sog)

toMerge = 3
cell = MKPOL([sog[0],[[v+1 for v in  sog[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))

diagram = assemblyDiagramInit([1,3,2])([[.3],[5.2,1.7,1.2],[2.2,.5]])
sog = diagram2cell(diagram,sog,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(sog)))
hpc = cellNumbering (sog,hpc)(range(len(sog[1])),CYAN,2)
# VIEW(hpc)

toRemove = [18]
sog = sog[0], [cell for k,cell in enumerate(sog[1]) if not (k in toRemove)]
hpc = STRUCT(MKPOLS(sog))
# DRAW(sog)

toMerge = 9
cell = MKPOL([sog[0],[[v+1 for v in  sog[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))

diagram = assemblyDiagramInit([4,1,2])([[1,2,1.3,4.3],[.3],[2.2,.5]])
sog = diagram2cell(diagram,sog,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(sog)))
hpc = cellNumbering (sog,hpc)(range(len(sog[1])),CYAN,2)
# VIEW(hpc)

toRemove = [22]
sog = sog[0], [cell for k,cell in enumerate(sog[1]) if not (k in toRemove)]
hpc = STRUCT(MKPOLS(sog))
# DRAW(sog)

toMerge = 12
cell = MKPOL([sog[0],[[v+1 for v in  sog[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))

diagram = assemblyDiagramInit([1,3,2])([[.3],[5.3,1.8,1],[2.2,.5]])
sog = diagram2cell(diagram,sog,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(sog)))
hpc = cellNumbering (sog,hpc)(range(len(sog[1])),CYAN,2)
# VIEW(hpc)

toRemove = [28]
sog = sog[0], [cell for k,cell in enumerate(sog[1]) if not (k in toRemove)]
hpc = STRUCT(MKPOLS(sog))
# DRAW(sog)

toMerge = 6
cell = MKPOL([sog[0],[[v+1 for v in  sog[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))

diagram = assemblyDiagramInit([3,1,3])([[2,3,3],[.3],[1.10,1.10,.5]])
sog = diagram2cell(diagram,sog,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(sog)))
hpc = cellNumbering (sog,hpc)(range(len(sog[1])),CYAN,2)
#VIEW(hpc)

toRemove = [34]
sog = sog[0], [cell for k,cell in enumerate(sog[1]) if not (k in toRemove)]
hpc = STRUCT(MKPOLS(sog))
# DRAW(sog)

b2p = assemblyDiagramInit([5,3,2])([[.3,3.85,.3,3.85,.3],[.3,3,.3],[.3,2.7]])
V,CV = b2p
hpc2 = SKEL_1(STRUCT(MKPOLS(b2p)))
hpc2 = cellNumbering (b2p,hpc2)(range(len(CV)),CYAN,2)
# VIEW(hpc2)

toRemove = [7, 9, 21, 27]
b2p = b2p[0], [cell for k,cell in enumerate(b2p[1]) if not (k in toRemove)]
hpc2 = STRUCT(MKPOLS(b2p))
hpc2 = T(2)(8)(hpc2)
# DRAW(b2p)

muro1_b2 = CUBOID([.3,1,3])
muro1_b2 = T([1,2])([8.3,8.3])(muro1_b2)
muro2_b2 = CUBOID([.3,1,3])
muro2_b2 = T([1,2])([8.3,10.3])(muro2_b2)
muro3_b2 = CUBOID([.3,1,0.3])
muro3_b2 = T([1,2,3])([8.3,9.3,2.7])(muro3_b2)
porta_b2 = STRUCT([muro1_b2, muro2_b2, muro3_b2])

kbl = assemblyDiagramInit([3,7,2])([[.3,6,.3],[.3,4,.3,2,.3,3,.3],[.3,2.7]])
V,CV = kbl
hpc3 = SKEL_1(STRUCT(MKPOLS(kbl)))
hpc3 = cellNumbering (kbl,hpc3)(range(len(CV)),CYAN,2)
# VIEW(hpc3)

toRemove = [17, 21, 25]
kbl = kbl[0], [cell for k,cell in enumerate(kbl[1]) if not (k in toRemove)]
hpc3 = STRUCT(MKPOLS(kbl))
hpc3 = T([1,2])([2,11.5])(hpc3)
# DRAW(kbl)

toMerge = 28
cell = MKPOL([kbl[0],[[v+1 for v in  kbl[1][toMerge]]],None])
# VIEW(STRUCT([hpc3,cell]))

diagram = assemblyDiagramInit([1,3,2])([[.3],[1,1,1],[2.2,.5]])
kbl = diagram2cell(diagram,kbl,toMerge)
hpc3 = SKEL_1(STRUCT(MKPOLS(kbl)))
hpc3 = cellNumbering (kbl,hpc3)(range(len(kbl[1])),CYAN,2)
hpc3 = T([1,2])([2,11.5])(hpc3)
# VIEW(hpc3)

toRemove = [40]
kbl = kbl[0], [cell for k,cell in enumerate(kbl[1]) if not (k in toRemove)]
hpc3 = STRUCT(MKPOLS(kbl))
hpc3 = T([1,2])([2,11.5])(hpc3)
# DRAW(kbl)

toMerge = 31
cell = MKPOL([kbl[0],[[v+1 for v in  kbl[1][toMerge]]],None])
# VIEW(STRUCT([hpc3,cell]))

diagram = assemblyDiagramInit([1,3,2])([[.3],[0.5,1,0.5],[2.2,.5]])
kbl = diagram2cell(diagram,kbl,toMerge)
hpc3 = SKEL_1(STRUCT(MKPOLS(kbl)))
hpc3 = cellNumbering (kbl,hpc3)(range(len(kbl[1])),CYAN,2)
hpc3 = T([1,2])([2,11.5])(hpc3)
# VIEW(hpc3)

toRemove = [44]
kbl = kbl[0], [cell for k,cell in enumerate(kbl[1]) if not (k in toRemove)]
hpc3 = STRUCT(MKPOLS(kbl))
hpc3 = T([1,2])([2,11.5])(hpc3)
# DRAW(kbl)

toMerge = 34
cell = MKPOL([kbl[0],[[v+1 for v in  kbl[1][toMerge]]],None])
# VIEW(STRUCT([hpc3,cell]))

diagram = assemblyDiagramInit([1,3,2])([[.3],[1,1,2],[2.2,.5]])
kbl = diagram2cell(diagram,kbl,toMerge)
hpc3 = SKEL_1(STRUCT(MKPOLS(kbl)))
hpc3 = cellNumbering (kbl,hpc3)(range(len(kbl[1])),CYAN,2)
hpc3 = T([1,2])([2,11.5])(hpc3)
# VIEW(hpc3)

toRemove = [48]
kbl = kbl[0], [cell for k,cell in enumerate(kbl[1]) if not (k in toRemove)]
hpc3 = STRUCT(MKPOLS(kbl))
hpc3 = T([1,2])([2,11.5])(hpc3)
# DRAW(kbl)

toMerge = 11
cell = MKPOL([kbl[0],[[v+1 for v in  kbl[1][toMerge]]],None])
# VIEW(STRUCT([hpc3,cell]))

diagram = assemblyDiagramInit([1,3,3])([[.3],[1,2,1],[1.1,1.1,0.5]])
kbl = diagram2cell(diagram,kbl,toMerge)
hpc3 = SKEL_1(STRUCT(MKPOLS(kbl)))
hpc3 = cellNumbering (kbl,hpc3)(range(len(kbl[1])),CYAN,2)
hpc3 = T([1,2])([2,11.5])(hpc3)
#VIEW(hpc3)

toRemove = [53, 54]
kbl = kbl[0], [cell for k,cell in enumerate(kbl[1]) if not (k in toRemove)]
hpc3 = STRUCT(MKPOLS(kbl))
hpc3 = T([1,2])([2,11.5])(hpc3)
# DRAW(kbl)

l2 = assemblyDiagramInit([3,3,2])([[.3,8,.3],[.3,4,.3],[.3,2.7]])
V,CV = l2
hpc4 = SKEL_1(STRUCT(MKPOLS(l2)))
hpc4 = cellNumbering (l2,hpc4)(range(len(CV)),CYAN,2)
# VIEW(hpc4)

toRemove = [9]
l2 = l2[0], [cell for k,cell in enumerate(l2[1]) if not (k in toRemove)]
hpc4 = STRUCT(MKPOLS(l2))
hpc4 = T([1,2])([2,21.5])(hpc4)
# DRAW(l2)

toMerge = 7
cell = MKPOL([l2[0],[[v+1 for v in  l2[1][toMerge]]],None])
# VIEW(STRUCT([hpc3,cell]))

diagram = assemblyDiagramInit([3,1,2])([[6.5,1,0.5],[.3],[2.2,.5]])
l2 = diagram2cell(diagram,l2,toMerge)
hpc4 = SKEL_1(STRUCT(MKPOLS(l2)))
hpc4 = cellNumbering (l2,hpc4)(range(len(l2[1])),CYAN,2)
hpc4 = T([1,2])([2,21.5])(hpc4)
#VIEW(hpc4)

toRemove = [18]
l2 = l2[0], [cell for k,cell in enumerate(l2[1]) if not (k in toRemove)]
hpc4 = STRUCT(MKPOLS(l2))
hpc4 = T([1,2])([2,21.5])(hpc4)
# DRAW(l2)

toMerge = 3
cell = MKPOL([l2[0],[[v+1 for v in  l2[1][toMerge]]],None])
# VIEW(STRUCT([hpc3,cell]))

diagram = assemblyDiagramInit([1,3,3])([[.3],[1,2,1],[1.1,1.1,.5]])
l2 = diagram2cell(diagram,l2,toMerge)
hpc4 = SKEL_1(STRUCT(MKPOLS(l2)))
hpc4 = cellNumbering (l2,hpc4)(range(len(l2[1])),CYAN,2)
hpc4 = T([1,2])([2,21.5])(hpc4)
#VIEW(hpc4)

toRemove = [24]
l2 = l2[0], [cell for k,cell in enumerate(l2[1]) if not (k in toRemove)]
hpc4 = STRUCT(MKPOLS(l2))
hpc4 = T([1,2])([2,21.5])(hpc4)
# DRAW(l2)

rc = assemblyDiagramInit([3,5,2])([[.3,1.8,.3],[.3,2,.3,16.5,.3],[.3,2.7]])
V,CV = rc
hpc5 = SKEL_1(STRUCT(MKPOLS(rc)))
hpc5 = cellNumbering (rc,hpc5)(range(len(CV)),CYAN,2)
# VIEW(hpc5)

toRemove = [7, 9, 13, 17, 19]
rc = rc[0], [cell for k,cell in enumerate(rc[1]) if not (k in toRemove)]
hpc5 = STRUCT(MKPOLS(rc))
hpc5 = T([1,2])([8.3,2.3])(hpc5)
# DRAW(rc)

balcone = assemblyDiagramInit([3,3,2])([[.3,2,.3],[.2,3.6,.2],[.2,.8]])
V,CV = balcone
hpc6 = SKEL_1(STRUCT(MKPOLS(balcone)))
hpc6 = cellNumbering (balcone,hpc6)(range(len(CV)),CYAN,2)
#VIEW(hpc6)

toRemove = [9, 15]
balcone = balcone[0], [cell for k,cell in enumerate(balcone[1]) if not (k in toRemove)]
hpc6 = STRUCT(MKPOLS(balcone))
hpc6 = T(2)(18)(hpc6)
#DRAW(balcone)

# Appartamento

appartamento = STRUCT([hpc, hpc2, hpc3, hpc4, hpc5, hpc6, porta_b2])

# Palazzo

pair_z = [T(3)(3), appartamento]
palazzo = STRUCT(NN(5)(pair_z))

# Scala antincendio

stair = spiralStair(width=0.2,R=3,r=0.25,riser=0.1,pitch=4.4,nturns=1.75,steps=36)
stair = larApply(r(0,0,3*PI/4))(stair)
stair = larApply(t(0,-3,0))(stair)
stairColumn = larApply(t(0,-3,0))(larRod(0.25,3.8)())
scale = evalStruct(Struct([stairColumn,stair,t(0,0,3)]*5))
scale = STRUCT(CAT(AA(MKPOLS)(scale)))
scale = T([1,2,3])([14,10,3])(scale)

piattaforma_1 = CUBOID([3.5,3,0.6])
piattaforma_1 = T([1,2])([10.5,6.9])(piattaforma_1)
pair_z_piattaforma = [T(3)(3), piattaforma_1]
piattaforme = STRUCT(NN(5)(pair_z_piattaforma))

model_3D = STRUCT([palazzo, scale, piattaforme])
VIEW(model_3D)