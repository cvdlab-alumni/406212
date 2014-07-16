""" Filippo Capecci, 406212, exercise 1 """

import os,sys
# N.B. : PER UNA CORRETTA VISUALIZZAZIONE, SOSTITUIRE IL PATH CORRENTE 
#        CON QUELLO DOVE E' SITUATA LA LIBRERIA lar-cc .
sys.path.insert(0, 'C:/Python26/Lib/site-packages/lar-cc/lib/py/')
from sysml import *
from pyplasm import *
from scipy import *

# Visualizer:

DRAW = COMP([VIEW,STRUCT,MKPOLS])

""" Diagrams: """

# Apartment:

apartment = assemblyDiagramInit([9,17,3])([[.3,2,.3,2,.3,4,.3,2,.3],
									[.3,2,.3,2,.3,4,.3,3,.3,4,.3,3,.3,4,.3,3,.3],[.3,3,.3]])


# Generate hpc object:

hpc_apartment = SKEL_1(STRUCT(MKPOLS(apartment)))

# Numbering cells:

hpc_apartment = cellNumbering (apartment,hpc_apartment)(range(len(apartment[1])),YELLOW,2)

VIEW(hpc_apartment)

# porte:

porta1 = assemblyDiagramInit([1,3,2])([[.3],[1.3,2,1.3],[2.1,.9]])

hpc_door1 = SKEL_1(STRUCT(MKPOLS(porta1)))

hpc_door1 = cellNumbering(porta1,hpc_door1)(range(len(porta1[1])),GREEN,1)

#VIEW(hpc_door1)


porta2 = assemblyDiagramInit([1,3,2])([[.3],[1.3,2,1.3],[2.1,.9]])

hpc_door2 = SKEL_1(STRUCT(MKPOLS(porta2)))

hpc_door2 = cellNumbering(porta2,hpc_door2)(range(len(porta2[1])),GREEN,1)

#VIEW(hpc_door2)


porta3 = assemblyDiagramInit([1,3,2])([[.3],[1.3,1,1.3],[2.1,.9]])

hpc_door3 = SKEL_1(STRUCT(MKPOLS(porta3)))

hpc_door3 = cellNumbering(porta3,hpc_door3)(range(len(porta3[1])),GREEN,1)

#VIEW(hpc_door3)


porta4 = assemblyDiagramInit([1,3,2])([[.3],[1.3,2,1.3],[2.1,.9]])

hpc_door4 = SKEL_1(STRUCT(MKPOLS(porta4)))

hpc_door4 = cellNumbering(porta4,hpc_door4)(range(len(porta4[1])),GREEN,1)


porta8 = assemblyDiagramInit([3,1,2])([[.8,1,.8],[.3],[2.1,.9]])

hpc_door8 = SKEL_1(STRUCT(MKPOLS(porta8)))

hpc_door8 = cellNumbering(porta8,hpc_door8)(range(len(porta8[1])),GREEN,1)

#VIEW(hpc_door4)

# finestre:

window1 = assemblyDiagramInit([3,1,3])([[.55,1.2,.55],[.3],[.75,1.4,.85]])

hpc_window1 = SKEL_1(STRUCT(MKPOLS(window1)))

hpc_window1 = cellNumbering(window1,hpc_window1)(range(len(window1[1])),GREEN,1)


window2 = assemblyDiagramInit([1,3,3])([[.3],[.55,1.2,.55],[.75,1.4,.85]])

hpc_window2 = SKEL_1(STRUCT(MKPOLS(window2)))

hpc_window2 = cellNumbering(window2,hpc_window2)(range(len(window2[1])),GREEN,1)

# Assembly doors:

apartment = diagram2cell(porta1,apartment,16)

apartment = diagram2cell(porta2,apartment,321)

apartment = diagram2cell(porta4,apartment,326)

apartment = diagram2cell(porta4,apartment,331)

apartment = diagram2cell(porta4,apartment,336)

#apartment = diagram2cell(porta4,apartment,337)

# finestra balcone:

#apartment = diagram2cell(porta4,apartment,341)

#apartment = diagram2cell(porta8,apartment,389)

#apartment = diagram2cell(porta8,apartment,364)

apartment = diagram2cell(window1,apartment,255)

apartment = diagram2cell(window2,apartment,129)

apartment = diagram2cell(window2,apartment,145)

hpc_apartment = SKEL_1(STRUCT(MKPOLS(apartment)))
hpc_apartment = cellNumbering (apartment,hpc_apartment)(range(len(apartment[1])),YELLOW,1)
#VIEW(hpc_apartment)

apartment = diagram2cell(porta4,apartment,338)

# finestra balcone:

apartment = diagram2cell(porta4,apartment,140)

#apartment = diagram2cell(porta8,apartment,392)

#apartment = diagram2cell(porta8,apartment,362)

hpc_apartment = SKEL_1(STRUCT(MKPOLS(apartment)))
hpc_apartment = cellNumbering (apartment,hpc_apartment)(range(len(apartment[1])),YELLOW,1)
#VIEW(hpc_apartment)

apartment = diagram2cell(porta8,apartment,390)

apartment = diagram2cell(porta8,apartment,360)

apartment = diagram2cell(window2,apartment,144)

hpc_apartment = SKEL_1(STRUCT(MKPOLS(apartment)))
hpc_apartment = cellNumbering (apartment,hpc_apartment)(range(len(apartment[1])),YELLOW,1)
VIEW(hpc_apartment)

# porta per la sala da pranzo

#apartment = diagram2cell(porta8,apartment,167)
#VIEW(hpc_apartment)

emptyChain = [54,55,105,106,152,153,203,204,253,254,480,60,61,111,112,158,159,209,210,259,260,448,66,67,117,118,164,165,215,216,265,266,454,
57,58,63,64,155,156,161,162,256,257,262,263,108,109,114,115,206,207,212,213,346,347,348,349,350,351,395,396,397,398,399,400,356,357,523,271,
272,460,167,72,73,123,124,170,171,277,278,466,227,228,176,177,489,26,27,28,77,78,79,29,30,31,80,81,82,32,33,34,83,84,85,35,36,37,86,87,88,
38,39,40,89,90,91,41,42,43,92,93,94,44,45,46,95,96,97,47,48,49,98,99,100,182,183,233,234,283,284,472,511,188,189,239,240,289,290,505,531,
194,195,245,246,295,296,341,342,390,391,517,361,362,364,365,367,368,370,371,373,374,376,379,380,382,383,385,386]

solidCV = [cell for k,cell in enumerate(apartment[1]) if not (k in emptyChain)]
DRAW((apartment[0],solidCV))

exteriorCV =  [cell for k,cell in enumerate(apartment[1]) if k in emptyChain]
exteriorCV += exteriorCells(apartment)
CV = solidCV + exteriorCV
V = apartment[0]
FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,FV))))

BF = boundaryCells(solidCV,FV)
boundaryFaces = [FV[face] for face in BF]
B_Rep = V,boundaryFaces
VIEW(EXPLODE(1.1,1.1,1.1)(MKPOLS(B_Rep)))
VIEW(STRUCT(MKPOLS(B_Rep)))


verts, triangles = quads2tria(B_Rep)
B_Rep = V,boundaryFaces

def objExporter((V,FV), filePath):
	out_file = open(filePath,"w")
	out_file.write("# List of Vertices:\n")
	for v in V:
		out_file.write("v")
		for c in v:
			out_file.write(" " + str(c))
		out_file.write("\n")
	out_file.write("# Face Definitions:\n")
	for f in FV:
		out_file.write("f")
		for v in f:
			out_file.write(" " + str(v+1))
		out_file.write("\n")
	out_file.close()

objExporter((verts,triangles),'C:/Python26/Lib/site-packages/lar-cc/lib/py/casa.obj')