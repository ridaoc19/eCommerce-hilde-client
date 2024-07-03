const departments = [
	{
		department_id: 'electrodomesticos',
		department: 'Electrodomésticos',
		categories: [
			{
				category_id: 'electrodomesticos-1',
				category: 'Electrodomésticos varios',
				image: 'https://via.placeholder.com/150/ff7f7f/333333?text=Electrodomesticos', // Fondo rojo claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'lavadoras-1', subcategory: 'Lavadoras' },
					{ subcategory_id: 'refrigeradores-1', subcategory: 'Refrigeradores' },
					{ subcategory_id: 'microondas-1', subcategory: 'Microondas' },
					{ subcategory_id: 'estufas-1', subcategory: 'Estufas' },
					{ subcategory_id: 'hornos-1', subcategory: 'Hornos' },
					{ subcategory_id: 'licuadoras-1', subcategory: 'Licuadoras' },
					{ subcategory_id: 'cafeteras-1', subcategory: 'Cafeteras' },
					{ subcategory_id: 'batidoras-1', subcategory: 'Batidoras' },
					{ subcategory_id: 'aspiradoras-1', subcategory: 'Aspiradoras' },
					{ subcategory_id: 'planchas-1', subcategory: 'Planchas' },
				],
			},
			{
				category_id: 'electrodomesticos-2',
				category: 'Cocina',
				image: 'https://via.placeholder.com/150/ff7f7f/333333?text=Cocina', // Fondo rojo claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'ollas-1', subcategory: 'Ollas y Sartenes' },
					{ subcategory_id: 'utensilios-cocina-1', subcategory: 'Utensilios de Cocina' },
					{ subcategory_id: 'hornos-microondas-1', subcategory: 'Hornos de Microondas' },
					{ subcategory_id: 'freidoras-1', subcategory: 'Freidoras' },
					{ subcategory_id: 'planchas-cocina-1', subcategory: 'Planchas de Cocina' },
					{ subcategory_id: 'extractores-jugos-1', subcategory: 'Extractores de Jugos' },
					{ subcategory_id: 'procesadores-alimentos-1', subcategory: 'Procesadores de Alimentos' },
					{ subcategory_id: 'licuadoras-cocina-1', subcategory: 'Licuadoras de Cocina' },
					{ subcategory_id: 'cafeteras-electricas-1', subcategory: 'Cafeteras Eléctricas' },
					{ subcategory_id: 'batidoras-cocina-1', subcategory: 'Batidoras de Cocina' },
				],
			},
			{
				category_id: 'electrodomesticos-3',
				category: 'Hogar',
				image: 'https://via.placeholder.com/150/ff7f7f/333333?text=Hogar', // Fondo rojo claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'ventiladores-1', subcategory: 'Ventiladores' },
					{ subcategory_id: 'calefactores-1', subcategory: 'Calefactores' },
					{ subcategory_id: 'purificadores-aire-1', subcategory: 'Purificadores de Aire' },
					{ subcategory_id: 'humidificadores-1', subcategory: 'Humidificadores' },
					{ subcategory_id: 'aspiradoras-hogar-1', subcategory: 'Aspiradoras para Hogar' },
					{ subcategory_id: 'planchas-ropa-1', subcategory: 'Planchas para Ropa' },
					{ subcategory_id: 'limpiadores-vapor-1', subcategory: 'Limpiadores a Vapor' },
					{ subcategory_id: 'dispensadores-agua-1', subcategory: 'Dispensadores de Agua' },
					{ subcategory_id: 'purificadores-agua-1', subcategory: 'Purificadores de Agua' },
					{ subcategory_id: 'barras-para-cortinas-1', subcategory: 'Barras para Cortinas' },
				],
			},
		],
	},
	{
		department_id: 'electronica',
		department: 'Electrónica',
		categories: [
			{
				category_id: 'electronica-1',
				category: 'Televisores y Video',
				image: 'https://via.placeholder.com/150/7f7fff/ffffff?text=Televisores', // Fondo azul claro, texto blanco
				subcategories: [
					{ subcategory_id: 'tv-led-1', subcategory: 'TV LED' },
					{ subcategory_id: 'proyectores-1', subcategory: 'Proyectores' },
					{ subcategory_id: 'reproductores-dvd-1', subcategory: 'Reproductores DVD' },
					{ subcategory_id: 'equipos-sonido-1', subcategory: 'Equipos de Sonido' },
					{ subcategory_id: 'cámaras-1', subcategory: 'Cámaras' },
					{ subcategory_id: 'accesorios-audio-1', subcategory: 'Accesorios de Audio' },
					{ subcategory_id: 'antenas-tv-1', subcategory: 'Antenas de TV' },
					{ subcategory_id: 'cables-video-1', subcategory: 'Cables de Video' },
					{ subcategory_id: 'soportes-tv-1', subcategory: 'Soportes para TV' },
					{ subcategory_id: 'gafas-vr-1', subcategory: 'Gafas de Realidad Virtual' },
				],
			},
			{
				category_id: 'electronica-2',
				category: 'Computadoras y Accesorios',
				image: 'https://via.placeholder.com/150/7f7fff/ffffff?text=Computadoras', // Fondo azul claro, texto blanco
				subcategories: [
					{ subcategory_id: 'laptops-1', subcategory: 'Laptops' },
					{ subcategory_id: 'accesorios-computadoras-1', subcategory: 'Accesorios de Computadoras' },
					{ subcategory_id: 'impresoras-1', subcategory: 'Impresoras' },
					{ subcategory_id: 'tablets-1', subcategory: 'Tablets' },
					{ subcategory_id: 'monitores-1', subcategory: 'Monitores' },
					{ subcategory_id: 'software-1', subcategory: 'Software' },
					{ subcategory_id: 'teclados-1', subcategory: 'Teclados' },
					{ subcategory_id: 'ratones-1', subcategory: 'Ratones' },
					{ subcategory_id: 'altavoces-pc-1', subcategory: 'Altavoces para PC' },
					{ subcategory_id: 'mochilas-laptops-1', subcategory: 'Mochilas para Laptops' },
				],
			},
			{
				category_id: 'electronica-3',
				category: 'Teléfonos y Accesorios',
				image: 'https://via.placeholder.com/150/7f7fff/ffffff?text=Telefonos', // Fondo azul claro, texto blanco
				subcategories: [
					{ subcategory_id: 'smartphones-1', subcategory: 'Smartphones' },
					{ subcategory_id: 'fundas-celular-1', subcategory: 'Fundas para Celular' },
					{ subcategory_id: 'cargadores-celular-1', subcategory: 'Cargadores para Celular' },
					{ subcategory_id: 'auriculares-1', subcategory: 'Auriculares' },
					{ subcategory_id: 'baterias-externas-1', subcategory: 'Baterías Externas' },
					{ subcategory_id: 'smartwatches-1', subcategory: 'Smartwatches' },
					{ subcategory_id: 'protectores-pantalla-1', subcategory: 'Protectores de Pantalla' },
					{ subcategory_id: 'accesorios-telefonos-1', subcategory: 'Accesorios para Teléfonos' },
					{ subcategory_id: 'cables-celular-1', subcategory: 'Cables para Celular' },
					{ subcategory_id: 'soportes-coche-1', subcategory: 'Soportes para Coche' },
				],
			},
		],
	},
	{
		department_id: 'ropa',
		department: 'Ropa y Accesorios',
		categories: [
			{
				category_id: 'ropa-1',
				category: 'Ropa para Mujer',
				image: 'https://via.placeholder.com/150/7fff7f/333333?text=Ropa+Mujer', // Fondo verde claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'blusas-1', subcategory: 'Blusas' },
					{ subcategory_id: 'vestidos-1', subcategory: 'Vestidos' },
					{ subcategory_id: 'jeans-1', subcategory: 'Jeans' },
					{ subcategory_id: 'chaquetas-1', subcategory: 'Chaquetas' },
					{ subcategory_id: 'ropa-deportiva-mujer-1', subcategory: 'Ropa Deportiva' },
					{ subcategory_id: 'accesorios-mujer-1', subcategory: 'Accesorios' },
					{ subcategory_id: 'bolsos-mujer-1', subcategory: 'Bolsos' },
					{ subcategory_id: 'calzado-mujer-1', subcategory: 'Calzado' },
					{ subcategory_id: 'ropa-interior-mujer-1', subcategory: 'Ropa Interior' },
					{ subcategory_id: 'trajes-bano-mujer-1', subcategory: 'Trajes de Baño' },
				],
			},
			{
				category_id: 'ropa-2',
				category: 'Ropa para Hombre',
				image: 'https://via.placeholder.com/150/7fff7f/333333?text=Ropa+Hombre', // Fondo verde claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'camisas-hombre-1', subcategory: 'Camisas' },
					{ subcategory_id: 'pantalones-hombre-1', subcategory: 'Pantalones' },
					{ subcategory_id: 'chaquetas-hombre-1', subcategory: 'Chaquetas' },
					{ subcategory_id: 'ropa-deportiva-hombre-1', subcategory: 'Ropa Deportiva' },
					{ subcategory_id: 'accesorios-hombre-1', subcategory: 'Accesorios' },
					{ subcategory_id: 'bolsos-hombre-1', subcategory: 'Bolsos' },
					{ subcategory_id: 'calzado-hombre-1', subcategory: 'Calzado' },
					{ subcategory_id: 'ropa-interior-hombre-1', subcategory: 'Ropa Interior' },
					{ subcategory_id: 'trajes-bano-hombre-1', subcategory: 'Trajes de Baño' },
					{ subcategory_id: 'pulseras-hombre-1', subcategory: 'Pulseras' },
				],
			},
			{
				category_id: 'ropa-3',
				category: 'Ropa Infantil',
				image: 'https://via.placeholder.com/150/7fff7f/333333?text=Ropa+Infantil', // Fondo verde claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'ropa-bebes-1', subcategory: 'Ropa para Bebés' },
					{ subcategory_id: 'ropa-niños-1', subcategory: 'Ropa para Niños' },
					{ subcategory_id: 'ropa-niñas-1', subcategory: 'Ropa para Niñas' },
					{ subcategory_id: 'calzado-infantil-1', subcategory: 'Calzado Infantil' },
					{ subcategory_id: 'accesorios-infantiles-1', subcategory: 'Accesorios Infantiles' },
					{ subcategory_id: 'juguetes-bebe-1', subcategory: 'Juguetes para Bebés' },
					{ subcategory_id: 'mochilas-infantiles-1', subcategory: 'Mochilas Infantiles' },
					{ subcategory_id: 'cunas-1', subcategory: 'Cunas' },
					{ subcategory_id: 'carritos-bebe-1', subcategory: 'Carritos de Bebé' },
					{ subcategory_id: 'ropa-embarazadas-1', subcategory: 'Ropa para Embarazadas' },
				],
			},
		],
	},
	{
		department_id: 'juguetes',
		department: 'Juguetes y Juegos',
		categories: [
			{
				category_id: 'juguetes-1',
				category: 'Juguetes para Niños',
				image: 'https://via.placeholder.com/150/ff7fff/333333?text=Juguetes+Niños', // Fondo rosa claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'juguetes-educativos-1', subcategory: 'Juguetes Educativos' },
					{ subcategory_id: 'muñecas-1', subcategory: 'Muñecas' },
					{ subcategory_id: 'figuras-accion-1', subcategory: 'Figuras de Acción' },
					{ subcategory_id: 'vehiculos-juguetes-1', subcategory: 'Vehículos de Juguete' },
					{ subcategory_id: 'puzzles-1', subcategory: 'Puzzles' },
					{ subcategory_id: 'pelotas-juguetes-1', subcategory: 'Pelotas y Juguetes Deportivos' },
					{ subcategory_id: 'instrumentos-musicales-1', subcategory: 'Instrumentos Musicales' },
					{ subcategory_id: 'juegos-mesa-infantiles-1', subcategory: 'Juegos de Mesa Infantiles' },
					{ subcategory_id: 'disfraces-1', subcategory: 'Disfraces' },
					{ subcategory_id: 'trenes-juguetes-1', subcategory: 'Trenes y Juguetes de Vía' },
				],
			},
			{
				category_id: 'juguetes-2',
				category: 'Juegos de Mesa',
				image: 'https://via.placeholder.com/150/ff7fff/333333?text=Juegos+Mesa', // Fondo rosa claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'estrategia-1', subcategory: 'Juegos de Estrategia' },
					{ subcategory_id: 'cartas-1', subcategory: 'Juegos de Cartas' },
					{ subcategory_id: 'dados-1', subcategory: 'Juegos de Dados' },
					{ subcategory_id: 'juegos-cooperativos-1', subcategory: 'Juegos Cooperativos' },
					{ subcategory_id: 'juegos-infantiles-1', subcategory: 'Juegos Infantiles' },
					{ subcategory_id: 'juegos-educativos-1', subcategory: 'Juegos Educativos' },
					{ subcategory_id: 'rompecabezas-1', subcategory: 'Rompecabezas' },
					{ subcategory_id: 'juegos-mesa-familiares-1', subcategory: 'Juegos de Mesa Familiares' },
					{ subcategory_id: 'juegos-mesa-adultos-1', subcategory: 'Juegos de Mesa para Adultos' },
					{ subcategory_id: 'juegos-mesa-estrategia-1', subcategory: 'Juegos de Mesa de Estrategia' },
				],
			},
			{
				category_id: 'juguetes-3',
				category: 'Juguetes para Exterior',
				image: 'https://via.placeholder.com/150/ff7fff/333333?text=Juguetes+Exterior', // Fondo rosa claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'bicicletas-niños-1', subcategory: 'Bicicletas para Niños' },
					{ subcategory_id: 'patines-1', subcategory: 'Patines' },
					{ subcategory_id: 'triciclos-1', subcategory: 'Triciclos' },
					{ subcategory_id: 'balones-1', subcategory: 'Balones y Pelotas' },
					{ subcategory_id: 'casitas-jardin-1', subcategory: 'Casitas de Jardín' },
					{ subcategory_id: 'toboganes-1', subcategory: 'Toboganes' },
					{ subcategory_id: 'hamacas-1', subcategory: 'Hamacas' },
					{ subcategory_id: 'parques-juegos-1', subcategory: 'Parques de Juegos' },
					{ subcategory_id: 'piscinas-inflables-1', subcategory: 'Piscinas Inflables' },
					{ subcategory_id: 'juegos-agua-1', subcategory: 'Juegos de Agua' },
				],
			},
		],
	},
	{
		department_id: 'muebles',
		department: 'Muebles y Decoración',
		categories: [
			{
				category_id: 'muebles-1',
				category: 'Muebles de Sala',
				image: 'https://via.placeholder.com/150/7fffff/333333?text=Muebles+Sala', // Fondo cian claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'sofas-1', subcategory: 'Sofás' },
					{ subcategory_id: 'sillones-1', subcategory: 'Sillones' },
					{ subcategory_id: 'mesas-centro-1', subcategory: 'Mesas de Centro' },
					{ subcategory_id: 'muebles-tv-1', subcategory: 'Muebles para TV' },
					{ subcategory_id: 'libreros-1', subcategory: 'Libreros' },
					{ subcategory_id: 'reclinables-1', subcategory: 'Sillones Reclinables' },
					{ subcategory_id: 'sillones-mecedora-1', subcategory: 'Sillones Mecedora' },
					{ subcategory_id: 'muebles-modulares-1', subcategory: 'Muebles Modulares' },
					{ subcategory_id: 'puffs-1', subcategory: 'Puffs' },
					{ subcategory_id: 'muebles-bar-1', subcategory: 'Muebles de Bar' },
				],
			},
			{
				category_id: 'muebles-2',
				category: 'Muebles de Dormitorio',
				image: 'https://via.placeholder.com/150/7fffff/333333?text=Muebles+Dormitorio', // Fondo cian claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'camas-1', subcategory: 'Camas' },
					{ subcategory_id: 'armarios-1', subcategory: 'Armarios' },
					{ subcategory_id: 'mesitas-noche-1', subcategory: 'Mesitas de Noche' },
					{ subcategory_id: 'comodas-1', subcategory: 'Cómodas' },
					{ subcategory_id: 'escritorios-1', subcategory: 'Escritorios' },
					{ subcategory_id: 'tocadores-1', subcategory: 'Tocadores' },
					{ subcategory_id: 'colchones-1', subcategory: 'Colchones' },
					{ subcategory_id: 'almohadas-1', subcategory: 'Almohadas' },
					{ subcategory_id: 'sabanas-1', subcategory: 'Sábanas' },
					{ subcategory_id: 'edredones-1', subcategory: 'Edredones' },
				],
			},
			{
				category_id: 'muebles-3',
				category: 'Decoración del Hogar',
				image: 'https://via.placeholder.com/150/7fffff/333333?text=Decoracion', // Fondo cian claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'cuadros-1', subcategory: 'Cuadros' },
					{ subcategory_id: 'alfombras-1', subcategory: 'Alfombras' },
					{ subcategory_id: 'lamparas-1', subcategory: 'Lámparas' },
					{ subcategory_id: 'cojines-1', subcategory: 'Cojines' },
					{ subcategory_id: 'plantas-artificiales-1', subcategory: 'Plantas Artificiales' },
					{ subcategory_id: 'espejos-1', subcategory: 'Espejos' },
					{ subcategory_id: 'relojes-1', subcategory: 'Relojes Decorativos' },
					{ subcategory_id: 'portarretratos-1', subcategory: 'Portarretratos' },
					{ subcategory_id: 'figuras-decorativas-1', subcategory: 'Figuras Decorativas' },
					{ subcategory_id: 'cortinas-1', subcategory: 'Cortinas' },
				],
			},
			{
				category_id: 'muebles-4',
				category: 'Muebles de Exterior',
				image: 'https://via.placeholder.com/150/7fffff/333333?text=Muebles+Exterior', // Fondo cian claro, texto oscuro
				subcategories: [
					{ subcategory_id: 'mesas-exterior-1', subcategory: 'Mesas de Exterior' },
					{ subcategory_id: 'sillas-exterior-1', subcategory: 'Sillas de Exterior' },
					{ subcategory_id: 'sombrillas-1', subcategory: 'Sombrillas' },
					{ subcategory_id: 'hamacas-exterior-1', subcategory: 'Hamacas de Exterior' },
					{ subcategory_id: 'cojines-exterior-1', subcategory: 'Cojines de Exterior' },
					{ subcategory_id: 'sofas-exterior-1', subcategory: 'Sofás de Exterior' },
					{ subcategory_id: 'puffs-exterior-1', subcategory: 'Puffs de Exterior' },
					{ subcategory_id: 'balancines-1', subcategory: 'Balancines' },
					{ subcategory_id: 'tumbonas-1', subcategory: 'Tumbonas' },
					{ subcategory_id: 'conjuntos-muebles-exterior-1', subcategory: 'Conjuntos de Muebles de Exterior' },
				],
			},
		],
	},
	{
		department_id: 'deportes',
		department: 'Deportes y Fitness',
		categories: [
			{
				category_id: 'deportes-1',
				category: 'Fitness y Ejercicio',
				image: 'https://via.placeholder.com/150/ff7f00/ffffff?text=Fitness+Ejercicio', // Fondo naranja, texto blanco
				subcategories: [
					{ subcategory_id: 'equipos-gimnasio-1', subcategory: 'Equipos para Gimnasio' },
					{ subcategory_id: 'bicicletas-estaticas-1', subcategory: 'Bicicletas Estáticas' },
					{ subcategory_id: 'caminadoras-1', subcategory: 'Caminadoras' },
					{ subcategory_id: 'pesas-mancuernas-1', subcategory: 'Pesas y Mancuernas' },
					{ subcategory_id: 'cuerdas-saltar-1', subcategory: 'Cuerdas para Saltar' },
					{ subcategory_id: 'colchonetas-1', subcategory: 'Colchonetas' },
					{ subcategory_id: 'balones-yoga-1', subcategory: 'Balones de Yoga' },
					{ subcategory_id: 'bandas-resistencia-1', subcategory: 'Bandas de Resistencia' },
				],
			},
		],
	},
];

export default departments;
