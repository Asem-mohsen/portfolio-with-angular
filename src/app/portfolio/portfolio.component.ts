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

  isModalOpen: boolean = false;
  selectedImage: string = '';

  openModal(imageSrc: string): void {
    this.selectedImage = imageSrc;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = '';
  }
}
