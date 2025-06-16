from flask import Flask, request, send_file, jsonify
from fpdf import FPDF
import io

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert_to_pdf():
    data = request.get_json()

    content = data.get('content', '')
    if not content:
        return jsonify({"error": "No content provided"}), 400

    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)

    for line in content.split('\n'):
        pdf.multi_cell(0, 10, line)

    # ✅ Generar PDF en memoria correctamente
    pdf_bytes = pdf.output(dest='S').encode('latin1')
    pdf_stream = io.BytesIO(pdf_bytes)

    return send_file(
        pdf_stream,
        mimetype='application/pdf',
        as_attachment=True,
        download_name='document.pdf'
    )

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=6000)
