from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/post-endpoint', methods=['POST'])
def post_endpoint():
    post_data = request.form.get('post-data')
    print('POST 요청 바디 값:', post_data)
    return 'POST 요청이 완료되었습니다.'

if __name__ == '__main__':
    app.run(port=3000)