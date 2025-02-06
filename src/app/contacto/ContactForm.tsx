'use client'
import React, { useState } from 'react'
import { Send } from 'lucide-react';
import Button from '../../components/ui/Button';

const ContactForm = () => {
     const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
  return (
    <div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="">
              <div className="mb-4">
                <label htmlFor="name" className="block text-md font-semibold text-gray-700 mb-1">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className=" w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md   transition-all text-lg"
                  placeholder="Tu nombre aquí"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-md font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className=" w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md   transition-all text-lg"
                  placeholder="micorreo@gmail.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-md font-semibold text-gray-700">Mensaje</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                className=" w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md   transition-all text-lg resize-none"
                placeholder="Cuéntanos tus preguntas..."
                required
              ></textarea>
            </div>
            <Button classNames='bg-primary text-white display-block flex justify-center items-center'>
              Enviar Mensaje
            </Button>
            
          </form>
    </div>
  )
}

export default ContactForm