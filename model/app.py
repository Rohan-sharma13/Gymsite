# -*- coding: utf-8 -*-
"""
Created on Thu Nov 19 20:39:04 2020

@author: Ibad
"""

from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
import joblib as jb
import numpy as np
import math
from flask_cors import CORS

FLASK_APP = Flask(__name__)
app = Api(app = FLASK_APP, 
		  version = "1.0", 
		  title = "BMI Score Predictor", 
		  description = "Predict the bmi of individual")

CORS(FLASK_APP)

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
				  {'Height': fields.Float(required = True, 
				  							   description="Height of individual", 
    					  				 	   help="Height cannot be blank"),
				 
				  'Weight': fields.Float(required = True, 
                                             description="Weight of individual",
				  							 help="Weight cannot be blank"),
    					  				 
				 

                  'Female': fields.Integer(required = True, 
				  							description="Gender of an individual", 
    					  				 	help="Gender cannot be blank"),

                  'Male': fields.Integer(required = True, 
				  							description="Gender of an individual", 
    					  				 	help="Gender cannot be blank")}),



classifier = jb.load('BMI_Predictor.joblib')
formData=[]


@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):     
		try: 
			formData = request.get_json(force=True)      
			prediction = classifier.predict([np.array(list(formData.values()))])
			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result":prediction[0],
                "data": formData,
                
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 400,
				"status": "Could not make prediction",
				"error": str(error),
                "data": formData,
              #  "type":type(formData),
             #   "after":list(formData[0].values())
                
                
			})