from flask import Blueprint
from flask import jsonify
from flask import request
from database.main_data import data

main_blueprint = Blueprint('main', __name__)


@main_blueprint.route('/test', methods=['GET'])
def test():
    return 'Hola'
