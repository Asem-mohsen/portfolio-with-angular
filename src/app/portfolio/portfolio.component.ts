import { Component } from '@angular/core';
import { portfolio } from '../../interface/portfolio.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {

  portfolioCards:portfolio[]=[
    {img:'../../assets/imgs/poert1.png'},
    {img:'../../assets/imgs/port2.png'},
    {img:'../../assets/imgs/port3.png' },
    {img:'../../assets/imgs/poert1.png'},
    {img:'../../assets/imgs/port2.png'},
    {img:'../../assets/imgs/port3.png'},
  ];

  isModalOpen = false;
  selectedImage: string | null = null;

  openModal(imageSrc: string) {
    this.selectedImage = imageSrc;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = null;
  }
}
