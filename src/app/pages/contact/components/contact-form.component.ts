import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconModule } from '../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../shared/styles/icon.styles';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconModule],
  template: `
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
      <div class="form-group">
        <label for="name">Full Name</label>
        <div class="input-wrapper">
          <lucide-icon name="user" [size]="iconStyles.size.sm"></lucide-icon>
          <input type="text" id="name" formControlName="name" placeholder="John Doe">
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <div class="input-wrapper">
          <lucide-icon name="mail" [size]="iconStyles.size.sm"></lucide-icon>
          <input type="email" id="email" formControlName="email" placeholder="john@example.com">
        </div>
      </div>

      <div class="form-group">
        <label for="subject">Subject</label>
        <div class="input-wrapper">
          <lucide-icon name="help-circle" [size]="iconStyles.size.sm"></lucide-icon>
          <input type="text" id="subject" formControlName="subject" placeholder="How can we help?">
        </div>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <div class="textarea-wrapper">
          <lucide-icon name="message-square" [size]="iconStyles.size.sm"></lucide-icon>
          <textarea id="message" formControlName="message" rows="4" placeholder="Your message..."></textarea>
        </div>
      </div>

      <button type="submit" class="submit-button group">
        Send Message
        <lucide-icon 
          name="send" 
          [size]="iconStyles.size.sm"
          class="transform transition-transform group-hover:translate-x-1">
        </lucide-icon>
      </button>
    </form>
  `,
  styles: [`
    .contact-form {
      @apply space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
    }

    .form-group {
      @apply space-y-2;
    }

    .form-group label {
      @apply block text-sm font-medium text-gray-700;
    }

    .input-wrapper {
      @apply relative flex items-center;
    }

    .textarea-wrapper {
      @apply relative;

      lucide-icon {
        @apply absolute left-3 top-2 text-gray-400;
      }
    }

    .input-wrapper lucide-icon {
      @apply absolute left-3 text-gray-400;
    }

    .input-wrapper input,
    .textarea-wrapper textarea {
      @apply w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200
             focus:border-[#2AB24B] focus:ring-1 focus:ring-[#2AB24B]
             outline-none transition-all duration-300;
    }

    .textarea-wrapper textarea {
      @apply resize-none pt-3;
    }

    .submit-button {
      @apply w-full flex items-center justify-center gap-2 
             bg-[#2AB24B] text-white py-3 px-6 rounded-lg
             hover:bg-[#229A3E] transition-all duration-300
             focus:outline-none focus:ring-2 focus:ring-[#2AB24B] focus:ring-offset-2;
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ContactFormComponent {
  iconStyles = iconStyles;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}