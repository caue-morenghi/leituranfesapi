import cv2
from pyzbar import pyzbar
import re
import tkinter as tk
from tkinter import filedialog


def ler_qrcode_imagem(caminho_imagem):
    """Reads a QR Code from an image and returns the data."""

    try:
        imagem = cv2.imread(caminho_imagem)
        decoded_objects = pyzbar.decode(imagem)

        if not decoded_objects:
            return None  # No QR Code found

        data = decoded_objects[0].data.decode()

        # More flexible regular expression pattern (optional NF and price)
        match = re.search(r'(.+?)\|(.+?)\|(.+)', data)

        if match:
            nf = match.group(1)  # NF might be None if not found
            data = match.group(2)  # Data might be None if not found
            # Preço might be None if not found
            preco = re.findall('.*\.\d{2}', match.group(3))
            cnpj = nf.replace('352407', '')
            return nf, data, preco[0], cnpj[:14]
        else:
            return data  # Return raw data if no match

    except cv2.error as e:
        print(f"Erro ao ler a imagem: {e}")
        return None


def selecionar_imagem():
    """Opens a dialog to select the image."""
    root = tk.Tk()
    root.withdraw()

    caminho_imagem = filedialog.askopenfilename(
        initialdir="/",
        title="Selecione uma imagem",
        filetypes=(("Arquivos de imagem", "*.jpg *.jpeg *.png *.gif"),
                   ("todos os arquivos", "*.*"))
    )

    if caminho_imagem:
        resultado = ler_qrcode_imagem(caminho_imagem)
        #print(caminho_imagem)
        if resultado:
            if isinstance(resultado, tuple):
                nf, data, preco, cnpj = resultado
                # Handle None values
                print("NF:", nf if nf else "Não encontrado")
                print("Data:", data if data else "Não encontrado")
                print("Preço:", preco if preco else "Não encontrado")
                print("CNPJ:", cnpj if cnpj else "Não encontrado")
            else:
                print("Dados do QR Code:", resultado)
        else:
            print("QR Code não encontrado na imagem.")


if __name__ == "__main__":
    selecionar_imagem()

# meu_script.py
 
# def main():
#     print("Olá do Python!")
 
# if __name__ == "__main__":
#     main()