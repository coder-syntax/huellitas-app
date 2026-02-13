# 🐾 Huellitas - Refugio de Animales

Sitio web oficial de **Huellitas**, una organización sin fines de lucro dedicada al rescate, cuidado y adopción responsable de animales en situación de calle.

## 🚀 Tecnologías

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y diseño responsive
- **Lucide React** - Iconos modernos
- **ESLint** - Calidad de código

## ✨ Características

### Páginas Principales

- **Inicio** (`/`) - Landing page con hero section, información del refugio y animales destacados
- **Nuestros Animales** (`/animales`) - Galería completa de animales disponibles con filtros
- **Detalle de Animal** (`/animales/[id]`) - Información detallada de cada animal
- **Adoptar** (`/adoptar`) - Formulario completo para solicitar adopción
- **Ser Tránsito** (`/transito`) - Formulario para hogares de tránsito temporales
- **Ayudar** (`/ayudar`) - Opciones de donación y voluntariado
- **Contacto** (`/contacto`) - Formulario de contacto e información

### Componentes Reutilizables

- `Navbar` - Navegación responsive con menú móvil
- `Footer` - Información de contacto y redes sociales
- `AnimalCard` - Tarjeta de animal con toda su información

## 🛠️ Instalación y Uso

### Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/huellitas.git

# Navegar al directorio
cd huellitas

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura del Proyecto

```
huellitas/
├── app/                    # App Router de Next.js
│   ├── adoptar/           # Página de formulario de adopción
│   ├── animales/          # Lista y detalle de animales
│   │   └── [id]/         # Página dinámica de detalle
│   ├── ayudar/           # Página de donaciones y ayuda
│   ├── contacto/         # Página de contacto
│   ├── transito/         # Formulario de hogar de tránsito
│   ├── layout.tsx        # Layout principal con Navbar y Footer
│   ├── page.tsx          # Página de inicio
│   └── globals.css       # Estilos globales
├── components/           # Componentes reutilizables
│   ├── AnimalCard.tsx   # Tarjeta de animal
│   ├── Footer.tsx       # Footer del sitio
│   └── Navbar.tsx       # Barra de navegación
└── public/              # Archivos estáticos
```

## 🎨 Diseño

- **Colores principales**: Amber (#F59E0B) y Orange (#EA580C)
- **Diseño responsive**: Mobile-first
- **Tipografía**: Inter (Google Fonts)
- **Iconos**: Lucide React

## 🔄 Próximas Mejoras

- [ ] Integración con base de datos (Supabase/MongoDB)
- [ ] Sistema de autenticación para administradores
- [ ] Panel de administración (CRUD de animales)
- [ ] Integración con pasarelas de pago (Mercado Pago)
- [ ] Sistema de carga de imágenes reales
- [ ] Blog de noticias y actualizaciones
- [ ] Calendario de eventos
- [ ] Galería de historias de adopción exitosas

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Huellitas - [@huellitas_refugio](https://instagram.com/huellitas_refugio) - info@huellitas.org

Link del proyecto: [https://github.com/tuusuario/huellitas](https://github.com/tuusuario/huellitas)
