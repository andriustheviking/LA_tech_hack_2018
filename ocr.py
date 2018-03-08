import sys   

li=[]
c_all=[]
with open('output.txt','r') as f:

    counter=0
    for i in f:
        
        a=i.split(' ')
        
        for j in a:

            li.append(j)
gi=[]
for k in li:

    g=k.lower()
    gi.append(g)
         
c1=-1
c2=-1
c3=-1
c4=-1
c5=-1
c6=-1
dic={}
for kl in gi:

    if kl=='john':

        c1=gi.index(kl)
        d1={'kl':c1}
        dic.update(d1)
    elif kl=='address':

        c2=gi.index(kl)
        d2={'kl':c2}
        dic.update(d2)

    elif kl=='education':
        c3=gi.index(kl)
        d3={'k1':c3}
        dic.update(d3)
    elif kl=='experience':
        c4=gi.index(kl)
        d4={'k1':c4}
        dic.update(d4)

    elif kl=='certifications':
        c5=gi.index(kl)
        d5={'kl':c5}
    elif kl=='interest':
        c6=gi.index(kl)
print dic        
if c1>0:
    c_all.append(d1)
if c2>0:
    c_all.append(c2)
if c3>0:
    c_all.append(c3)
if c4>0:
    c_all.append(c4)
if c5>0:
    c_all.append(c5)
if c6>0:
    c_all.append(c6)
c_all.sort()



#c_all=[c1,c2,c3,c4,c5,c6].sort()
print c1,c2,c4			

 

"""
for keyword in li:

    for word in keyword:
        

        if word=='john':
            c1=li.index(word)      
        elif word=='education':
            c2= li.index(word)
        elif word=='experience':
            c3= li.index(word)
        elif word=='certifications':
            c4= li.index(word)
        elif word=='interest':
            c5= li.index(word)
        elif word=='career':
            c6= li.index(word)
        elif word=='objective':
            c7= li.index(word)    
            

print c 
print d 
"""





       










