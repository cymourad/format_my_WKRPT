# https://pypi.org/project/python-docx/
from docx import Document
import os

file_name = "test.docx"
final_file_name = "testy.docx"
path_to_file = os.path.join("workshop", "tmp", file_name)
path_to_output = os.path.join("workshop", "output", final_file_name)
document = Document(path_to_file)
document.save(path_to_output)