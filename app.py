from flask import Flask, request, send_file, render_template, jsonify
from fpdf import FPDF
import io

app = Flask(__name__)

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 12)
        self.set_text_color(0, 51, 102)  # Color azul oscuro
        self.cell(0, 10, 'Detalles del Compromiso', 0, 1, 'C')
        self.image('logo.png', 10, 8, 33)  # Añadir logo

    def chapter_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.set_text_color(0, 51, 102)  # Color azul oscuro
        self.cell(0, 10, title, 0, 1, 'L')
        self.ln(10)

    def chapter_body(self, body):
        self.set_font('Arial', '', 12)
        self.set_text_color(0, 0, 0)  # Color negro
        self.multi_cell(0, 10, body)
        self.ln()

    def add_compromiso(self, compromisoForm):
        self.add_page()
        self.chapter_title(f"Título: {compromisoForm['titulo']}")
        self.chapter_body(f"Fecha: {compromisoForm['fecha']}")
        self.chapter_body(f"Hora: {compromisoForm['hora']}")
        self.chapter_body(f"Integrantes: {compromisoForm['integrantes']}")
        self.chapter_body(f"Texto: {compromisoForm['texto']}")
        self.chapter_body(f"Responsables: {compromisoForm['responsables']}")
        self.chapter_body(f"Estado: {compromisoForm['estado']}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_pdf', methods=['POST'])
def generate_pdf():
    try:
        data = request.get_json()
        print(data)  # Añadir esta línea para depuración
        pdf = PDF()
        pdf.add_compromiso(data)

        pdf_output = io.BytesIO()
        pdf.output(pdf_output)
        pdf_output.seek(0)

        filename = f"{data['titulo']}.pdf"
        return send_file(pdf_output, attachment_filename=filename, as_attachment=True)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

print(generate_pdf)

if __name__ == '__main__':
    app.run(debug=True)
