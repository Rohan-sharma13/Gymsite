# -*- coding: utf-8 -*-
"""
Created on Thu Nov 19 20:11:55 2020

@author: Ibad
"""

import pandas as pd
import scipy as sc
import numpy as np
import matplotlib as plt


df=pd.read_csv('BMI_Dataset.csv')
#print(df.sample(frac=1)) # this will print only 10% of total data ie: 10%  of df

# Renaming the target column
df.rename(columns = {'Index':'BMI'}, inplace = True) 

#Handling the categorical (Gender) attribute
df=pd.get_dummies(df)

# Getting the training and testing data
X=df.iloc[:,[0,1,3,4]].values
Y=df.iloc[:,2].values

# Splitting the dataset
X_train=X[:400]
X_test=X[400:]
Y_train=Y[:400]
Y_test=Y[400:]

#Fitting the model
from sklearn.linear_model import LinearRegression
teacher=LinearRegression()
learner=teacher.fit(X_train,Y_train)

#checking accuracy on unseen data
from sklearn.metrics import accuracy_score
Yp=learner.predict(X_test)
xlist=list(X_train)
ylist=list(Y_train)
yplist=list(Yp)
y_pred_cls=np.zeros_like(Yp)
y_pred_cls[Yp>2.5]=1
y_test_cls=np.zeros_like(Yp)
y_test_cls[Y_test>2.5]=1
accuracy=accuracy_score(y_test_cls,y_pred_cls)

#saving the model
import joblib as jb
jb.dump(learner, 'BMI_Predictor.joblib')