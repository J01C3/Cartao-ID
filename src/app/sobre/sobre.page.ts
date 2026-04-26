import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

// --- 1. IMPORTAR AS FERRAMENTAS DE ÍCONE ---
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SobrePage {
  red: number = 120;
  green: number = 120;
  blue: number = 120;

  previewColor: string = 'rgb(120, 120, 120)';
  hexColor: string = '#787878';
  btnColor: string = '#ac2c2c';
  bgGradient: string = '#f5f5f5';

  constructor(
    private cdr: ChangeDetectorRef,
    private navCtrl: NavController
  ) {
    // --- 2. REGISTRAR O ÍCONE NO CONSTRUTOR ---
    addIcons({ 'arrow-back-outline': arrowBackOutline });
  }

  voltar() {
    this.navCtrl.back();
  }

  onRangeChange() {
    this.atualizarCor();
    this.cdr.detectChanges();
  }

  atualizarCor() {
    const r = Number(this.red);
    const g = Number(this.green);
    const b = Number(this.blue);

    this.previewColor = `rgb(${r}, ${g}, ${b})`;
    this.hexColor = this.rgbToHex(r, g, b);
  }

  rgbToHex(r: number, g: number, b: number) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase();
  }

  mudarCorBotao() {
    this.btnColor = this.previewColor;
    this.cdr.detectChanges();
  }

  mudarFundo() {
    this.bgGradient = this.previewColor;
    this.cdr.detectChanges();
  }
}
