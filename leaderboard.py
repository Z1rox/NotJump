from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

leaderboard = []

@app.route('/scores', methods=['GET'])
def get_scores():
    return jsonify(leaderboard[:100])

@app.route('/scores', methods=['POST'])
def add_or_update_score():
    new_score = request.get_json()
    username = new_score['username']
    score = new_score['score']

    player_found = False
    for player in leaderboard:
        if player['username'] == username:
            player['score'] = score
            player_found = True
            break
    print(leaderboard)
    if not player_found:
        leaderboard.append(new_score)

    leaderboard.sort(key=lambda x: x['score'], reverse=True)

    return jsonify(), 201


if __name__ == '__main__':
    app.run(debug=True)
