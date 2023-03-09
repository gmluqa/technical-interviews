from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Cors (lax settings because testing in prod)
cors = CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})

# localhost:5000 api test
@app.route('/')
def home():
    return "Hello world!"

# Dictionary to store the resources
resources = {}

# Create a new resource
@app.route('/resource', methods=['POST'])
def create_resource():
    data = request.json
    resource_name = data['name']
    resource_content = data['content']
    # If resource name already exists in keys, err
    if resource_name in resources:
        return jsonify({'message': 'Recurso con nombre "{}" ya existe'.format(resource_name)}), 409

    resources[resource_name] = resource_content
    return jsonify({'message': 'Recurso creado con exito'}), 201

# Get the content of a resource
@app.route('/resource/<string:name>', methods=['GET'])
def get_resource(name):
    if name in resources:
        return jsonify({'content': resources[name]}), 200
    else:
        return jsonify({'message': 'Recurso no encontrado'}), 404

# Get a list of all resources
@app.route('/resource', methods=['GET'])
def get_all_resources():
    return list(resources.keys()), 200

# run in debug mode when launching `python3 app.py`
if __name__ == '__main__':
    app.run(debug=True)