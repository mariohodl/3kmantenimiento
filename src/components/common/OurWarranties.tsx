import React from 'react'
import { Truck, Shield, Clock, CreditCard } from 'lucide-react';

const OurWarranties = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className=" p-4 flex items-center gap-3">
            <div className="bg-primary p-4 rounded-full">
            <Truck className="h-7 w-7 text-white text-3xl" />
            </div>
            <div>
            <h3 className="font-medium text-xl">Envíos Gratis</h3>
            <p className="text-md text-gray-500">En pedidos arriba de $500</p>
            </div>
        </div>
        <div className=" p-4 flex items-center gap-3">
            <div className="bg-primary p-4 rounded-full">
            <Shield className="h-7 w-7 text-white text-3xl " />
            </div>
            <div>
            <h3 className="font-medium text-xl">Pagos Seguros</h3>
            <p className="text-md text-gray-500">100% protegidos</p>
            </div>
        </div>
        <div className=" p-4 flex items-center gap-3">
            <div className="bg-primary p-4 rounded-full">
            <Clock className="h-7 w-7 text-white text-3xl" />
            </div>
            <div>
            <h3 className="font-medium text-xl">Soporte 24/7</h3>
            <p className="text-md text-gray-500">Soporte dedicado al instante</p>
            </div>
        </div>
        <div className=" p-4 flex items-center gap-3">
            <div className="bg-primary p-4 rounded-full">
            <CreditCard className="h-7 w-7 text-white text-3xl" />
            </div>
            <div>
            <h3 className="font-medium text-xl">Devoluciones Fáciles</h3>
            <p className="text-md text-gray-500">30 dias de devolución</p>
            </div>
        </div>
    </div>
  )
}

export default OurWarranties