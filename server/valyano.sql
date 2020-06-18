CREATE SCHEMA IF NOT EXISTS public;

DROP TABLE IF EXISTS appartments;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS coordinates;
DROP TABLE IF EXISTS extras;

CREATE TABLE IF NOT EXISTS appartments(
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    slug TEXT, 
    type TEXT, 
    price FLOAT, 
    size FLOAT, 
    capacity INTEGER, 
    pets BOOLEAN, 
    breakfast BOOLEAN, 
    featured BOOLEAN, 
    description TEXT
);

CREATE TABLE IF NOT EXISTS extras(
	id SERIAL PRIMARY KEY, 
    info VARCHAR(250) NOT NULL,
    appartment_id INTEGER
);

CREATE TABLE IF NOT EXISTS images(
	id SERIAL PRIMARY KEY,
    url VARCHAR(250) NOT NULL,
    appartment_id INTEGER
);


CREATE TABLE IF NOT EXISTS coordinates(
	id SERIAL PRIMARY KEY,
    x FLOAT NOT NULL,
    y FLOAT NOT NULL,
    appartment_id INTEGER
);

INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (1, 'single economy', 'single-economy', 'single', 100, 200, 1, false, false, false, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (2, 'single basic', 'single-basic', 'single', 150, 250, 1, false, false, false, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (3, 'single standard', 'single-standard', 'single', 250, 300, 1, true, false, false, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (4, 'single deluxe', 'single-deluxe', 'single', 300, 400, 1, true, true, false, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (5, 'double economy', 'double-economy', 'double', 200, 300, 2, false, false, false, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (6, 'double basic', 'double-basic', 'double', 250, 350, 2, false, false, false, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (7, 'double standard', 'double-standard', 'double', 300, 400, 2, true, false, false, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (8, 'double deluxe', 'double-deluxe', 'double', 400, 500, 2, true, true, true, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (9, 'family economy', 'family-economy', 'family', 300, 500, 3, false, false, false, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (10, 'family basic', 'family-basic', 'family', 350, 550, 4, false, false, false, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (11, 'family standart', 'family-standart', 'family', 400, 600, 5, true, false, false, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (12, 'family deluxe', 'family-deluxe', 'family', 500, 700, 6, true, true, true, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');
INSERT INTO public.appartments (id, name, slug, type, price, size, capacity, pets, breakfast, featured, description) VALUES (13, 'presidential', 'presidential-appartment', 'presidential', 600, 1000, 10, true, true, true, 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.');

INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (1, 30.2514, -97.74938, 1);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (2, 30.247366, -97.750114, 2);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (3, 30.26113, -97.78666, 3);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (4, 30.23565, -97.74064, 4);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (5, 30.26582, -97.746887, 5);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (6, 30.2627887, -97.7439651, 6);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (7, 30.2641566, -97.7320762, 7);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (8, 30.2623336, -97.7255678, 8);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (9, 30.2686243, -97.7283865, 9);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (10, 30.2685716, -97.7401982, 10);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (11, 30.2585669, -97.7469125, 11);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (12, 30.2569405, 30.2569405, 12);
INSERT INTO public.coordinates (id, x, y, appartment_id) VALUES (13, 30.2815783, 30.2815783, 13);

INSERT INTO public.images (id, url, appartment_id) VALUES (1, './images/room-1.jpeg', 1);
INSERT INTO public.images (id, url, appartment_id) VALUES (2, './images/room-2.jpeg', 2);
INSERT INTO public.images (id, url, appartment_id) VALUES (3, './images/details-2.jpeg', 2);
INSERT INTO public.images (id, url, appartment_id) VALUES (4, './images/details-3.jpeg', 2);
INSERT INTO public.images (id, url, appartment_id) VALUES (5, './images/details-4.jpeg', 2);
INSERT INTO public.images (id, url, appartment_id) VALUES (6, './images/room-3.jpeg', 3);
INSERT INTO public.images (id, url, appartment_id) VALUES (7, './images/details-2.jpeg', 3);
INSERT INTO public.images (id, url, appartment_id) VALUES (8, './images/details-3.jpeg', 3);
INSERT INTO public.images (id, url, appartment_id) VALUES (9, './images/details-4.jpeg', 3);
INSERT INTO public.images (id, url, appartment_id) VALUES (10, './images/room-4.jpeg', 4);
INSERT INTO public.images (id, url, appartment_id) VALUES (11, './images/details-2.jpeg', 4);
INSERT INTO public.images (id, url, appartment_id) VALUES (12, './images/details-3.jpeg', 4);
INSERT INTO public.images (id, url, appartment_id) VALUES (13, './images/details-4.jpeg', 4);
INSERT INTO public.images (id, url, appartment_id) VALUES (14, './images/room-5.jpeg', 5);
INSERT INTO public.images (id, url, appartment_id) VALUES (15, './images/details-2.jpeg', 5);
INSERT INTO public.images (id, url, appartment_id) VALUES (16, './images/details-3.jpeg', 5);
INSERT INTO public.images (id, url, appartment_id) VALUES (17, './images/details-4.jpeg', 5);
INSERT INTO public.images (id, url, appartment_id) VALUES (18, './images/room-6.jpeg', 6);
INSERT INTO public.images (id, url, appartment_id) VALUES (19, './images/details-2.jpeg', 6);
INSERT INTO public.images (id, url, appartment_id) VALUES (20, './images/details-3.jpeg', 6);
INSERT INTO public.images (id, url, appartment_id) VALUES (21, './images/details-4.jpeg', 6);
INSERT INTO public.images (id, url, appartment_id) VALUES (22, './images/room-7.jpeg', 7);
INSERT INTO public.images (id, url, appartment_id) VALUES (23, './images/details-2.jpeg', 7);
INSERT INTO public.images (id, url, appartment_id) VALUES (24, './images/details-3.jpeg', 7);
INSERT INTO public.images (id, url, appartment_id) VALUES (25, './images/details-4.jpeg', 7);
INSERT INTO public.images (id, url, appartment_id) VALUES (26, './images/room-8.jpeg', 8);
INSERT INTO public.images (id, url, appartment_id) VALUES (27, './images/details-2.jpeg', 8);
INSERT INTO public.images (id, url, appartment_id) VALUES (28, './images/details-3.jpeg', 8);
INSERT INTO public.images (id, url, appartment_id) VALUES (29, './images/details-4.jpeg', 8);
INSERT INTO public.images (id, url, appartment_id) VALUES (30, './images/room-9.jpeg', 9);
INSERT INTO public.images (id, url, appartment_id) VALUES (31, './images/details-2.jpeg', 9);
INSERT INTO public.images (id, url, appartment_id) VALUES (32, './images/details-3.jpeg', 9);
INSERT INTO public.images (id, url, appartment_id) VALUES (33, './images/details-4.jpeg', 9);
INSERT INTO public.images (id, url, appartment_id) VALUES (34, './images/room-10.jpeg', 10);
INSERT INTO public.images (id, url, appartment_id) VALUES (35, './images/details-2.jpeg', 10);
INSERT INTO public.images (id, url, appartment_id) VALUES (36, './images/details-3.jpeg', 10);
INSERT INTO public.images (id, url, appartment_id) VALUES (37, './images/details-4.jpeg', 10);
INSERT INTO public.images (id, url, appartment_id) VALUES (38, './images/room-11.jpeg', 11);
INSERT INTO public.images (id, url, appartment_id) VALUES (39, './images/details-2.jpeg', 11);
INSERT INTO public.images (id, url, appartment_id) VALUES (40, './images/details-3.jpeg', 11);
INSERT INTO public.images (id, url, appartment_id) VALUES (41, './images/details-4.jpeg', 11);
INSERT INTO public.images (id, url, appartment_id) VALUES (42, './images/room-12.jpeg', 12);
INSERT INTO public.images (id, url, appartment_id) VALUES (43, './images/details-2.jpeg', 12);
INSERT INTO public.images (id, url, appartment_id) VALUES (44, './images/details-3.jpeg', 12);
INSERT INTO public.images (id, url, appartment_id) VALUES (45, './images/details-4.jpeg', 12);
INSERT INTO public.images (id, url, appartment_id) VALUES (46, './images/room-13.jpeg', 13);
INSERT INTO public.images (id, url, appartment_id) VALUES (47, './images/details-2.jpeg', 13);
INSERT INTO public.images (id, url, appartment_id) VALUES (48, './images/details-3.jpeg', 13);
INSERT INTO public.images (id, url, appartment_id) VALUES (49, './images/details-4.jpeg', 13);

INSERT INTO public.extras (id, info, appartment_id) VALUES (1, 'Plush pillows and breathable bed linens', 1);
INSERT INTO public.extras (id, info, appartment_id) VALUES (2, 'Soft, oversized bath towels', 1);
INSERT INTO public.extras (id, info, appartment_id) VALUES (3, 'Full-sized, very comfortable toilets', 1);
INSERT INTO public.extras (id, info, appartment_id) VALUES (4, 'Complimentary refreshments', 1);
INSERT INTO public.extras (id, info, appartment_id) VALUES (5, 'Adequate safety/security', 1);
INSERT INTO public.extras (id, info, appartment_id) VALUES (6, 'Internet', 1);
INSERT INTO public.extras (id, info, appartment_id) VALUES (7, 'Comfortable beds', 1);
INSERT INTO public.extras (id, info, appartment_id) VALUES (8, 'Plush pillows and breathable bed linens', 2);
INSERT INTO public.extras (id, info, appartment_id) VALUES (9, 'Soft, oversized bath towels', 2);
INSERT INTO public.extras (id, info, appartment_id) VALUES (10, 'Full-sized, very comfortable toilets', 2);
INSERT INTO public.extras (id, info, appartment_id) VALUES (11, 'Complimentary refreshments', 2);
INSERT INTO public.extras (id, info, appartment_id) VALUES (12, 'Adequate safety/security', 2);
INSERT INTO public.extras (id, info, appartment_id) VALUES (13, 'Internet', 2);
INSERT INTO public.extras (id, info, appartment_id) VALUES (14, 'Comfortable beds', 2);
INSERT INTO public.extras (id, info, appartment_id) VALUES (15, 'Plush pillows and breathable bed linens', 3);
INSERT INTO public.extras (id, info, appartment_id) VALUES (16, 'Soft, oversized bath towels', 3);
INSERT INTO public.extras (id, info, appartment_id) VALUES (17, 'Full-sized, very comfortable toilets', 3);
INSERT INTO public.extras (id, info, appartment_id) VALUES (18, 'Complimentary refreshments', 3);
INSERT INTO public.extras (id, info, appartment_id) VALUES (19, 'Adequate safety/security', 3);
INSERT INTO public.extras (id, info, appartment_id) VALUES (20, 'Internet', 3);
INSERT INTO public.extras (id, info, appartment_id) VALUES (21, 'Comfortable beds', 3);
INSERT INTO public.extras (id, info, appartment_id) VALUES (22, 'Plush pillows and breathable bed linens', 4);
INSERT INTO public.extras (id, info, appartment_id) VALUES (23, 'Soft, oversized bath towels', 4);
INSERT INTO public.extras (id, info, appartment_id) VALUES (24, 'Full-sized, very comfortable toilets', 4);
INSERT INTO public.extras (id, info, appartment_id) VALUES (25, 'Complimentary refreshments', 4);
INSERT INTO public.extras (id, info, appartment_id) VALUES (26, 'Adequate safety/security', 4);
INSERT INTO public.extras (id, info, appartment_id) VALUES (27, 'Internet', 4);
INSERT INTO public.extras (id, info, appartment_id) VALUES (28, 'Comfortable beds', 4);
INSERT INTO public.extras (id, info, appartment_id) VALUES (29, 'Plush pillows and breathable bed linens', 5);
INSERT INTO public.extras (id, info, appartment_id) VALUES (30, 'Soft, oversized bath towels', 5);
INSERT INTO public.extras (id, info, appartment_id) VALUES (31, 'Full-sized, very comfortable toilets', 5);
INSERT INTO public.extras (id, info, appartment_id) VALUES (32, 'Complimentary refreshments', 5);
INSERT INTO public.extras (id, info, appartment_id) VALUES (33, 'Adequate safety/security', 5);
INSERT INTO public.extras (id, info, appartment_id) VALUES (34, 'Internet', 5);
INSERT INTO public.extras (id, info, appartment_id) VALUES (35, 'Comfortable beds', 5);
INSERT INTO public.extras (id, info, appartment_id) VALUES (36, 'Plush pillows and breathable bed linens', 6);
INSERT INTO public.extras (id, info, appartment_id) VALUES (37, 'Soft, oversized bath towels', 6);
INSERT INTO public.extras (id, info, appartment_id) VALUES (38, 'Full-sized, very comfortable toilets', 6);
INSERT INTO public.extras (id, info, appartment_id) VALUES (39, 'Complimentary refreshments', 6);
INSERT INTO public.extras (id, info, appartment_id) VALUES (40, 'Adequate safety/security', 6);
INSERT INTO public.extras (id, info, appartment_id) VALUES (41, 'Internet', 6);
INSERT INTO public.extras (id, info, appartment_id) VALUES (42, 'Comfortable beds', 6);
INSERT INTO public.extras (id, info, appartment_id) VALUES (43, 'Plush pillows and breathable bed linens', 7);
INSERT INTO public.extras (id, info, appartment_id) VALUES (44, 'Soft, oversized bath towels', 7);
INSERT INTO public.extras (id, info, appartment_id) VALUES (45, 'Full-sized, very comfortable toilets', 7);
INSERT INTO public.extras (id, info, appartment_id) VALUES (46, 'Complimentary refreshments', 7);
INSERT INTO public.extras (id, info, appartment_id) VALUES (47, 'Adequate safety/security', 7);
INSERT INTO public.extras (id, info, appartment_id) VALUES (48, 'Internet', 7);
INSERT INTO public.extras (id, info, appartment_id) VALUES (49, 'Comfortable beds', 7);
INSERT INTO public.extras (id, info, appartment_id) VALUES (50, 'Plush pillows and breathable bed linens', 8);
INSERT INTO public.extras (id, info, appartment_id) VALUES (51, 'Soft, oversized bath towels', 8);
INSERT INTO public.extras (id, info, appartment_id) VALUES (52, 'Full-sized, very comfortable toilets', 8);
INSERT INTO public.extras (id, info, appartment_id) VALUES (53, 'Complimentary refreshments', 8);
INSERT INTO public.extras (id, info, appartment_id) VALUES (54, 'Adequate safety/security', 8);
INSERT INTO public.extras (id, info, appartment_id) VALUES (55, 'Internet', 8);
INSERT INTO public.extras (id, info, appartment_id) VALUES (56, 'Comfortable beds', 8);
INSERT INTO public.extras (id, info, appartment_id) VALUES (57, 'Plush pillows and breathable bed linens', 9);
INSERT INTO public.extras (id, info, appartment_id) VALUES (58, 'Soft, oversized bath towels', 9);
INSERT INTO public.extras (id, info, appartment_id) VALUES (59, 'Full-sized, very comfortable toilets', 9);
INSERT INTO public.extras (id, info, appartment_id) VALUES (60, 'Complimentary refreshments', 9);
INSERT INTO public.extras (id, info, appartment_id) VALUES (61, 'Adequate safety/security', 9);
INSERT INTO public.extras (id, info, appartment_id) VALUES (62, 'Internet', 9);
INSERT INTO public.extras (id, info, appartment_id) VALUES (63, 'Comfortable beds', 9);
INSERT INTO public.extras (id, info, appartment_id) VALUES (64, 'Plush pillows and breathable bed linens', 10);
INSERT INTO public.extras (id, info, appartment_id) VALUES (65, 'Soft, oversized bath towels', 10);
INSERT INTO public.extras (id, info, appartment_id) VALUES (66, 'Full-sized, very comfortable toilets', 10);
INSERT INTO public.extras (id, info, appartment_id) VALUES (67, 'Complimentary refreshments', 10);
INSERT INTO public.extras (id, info, appartment_id) VALUES (68, 'Adequate safety/security', 10);
INSERT INTO public.extras (id, info, appartment_id) VALUES (69, 'Internet', 10);
INSERT INTO public.extras (id, info, appartment_id) VALUES (70, 'Comfortable beds', 10);
INSERT INTO public.extras (id, info, appartment_id) VALUES (71, 'Plush pillows and breathable bed linens', 11);
INSERT INTO public.extras (id, info, appartment_id) VALUES (72, 'Soft, oversized bath towels', 11);
INSERT INTO public.extras (id, info, appartment_id) VALUES (73, 'Full-sized, very comfortable toilets', 11);
INSERT INTO public.extras (id, info, appartment_id) VALUES (74, 'Complimentary refreshments', 11);
INSERT INTO public.extras (id, info, appartment_id) VALUES (75, 'Adequate safety/security', 11);
INSERT INTO public.extras (id, info, appartment_id) VALUES (76, 'Internet', 11);
INSERT INTO public.extras (id, info, appartment_id) VALUES (77, 'Comfortable beds', 11);
INSERT INTO public.extras (id, info, appartment_id) VALUES (78, 'Plush pillows and breathable bed linens', 12);
INSERT INTO public.extras (id, info, appartment_id) VALUES (79, 'Soft, oversized bath towels', 12);
INSERT INTO public.extras (id, info, appartment_id) VALUES (80, 'Full-sized, very comfortable toilets', 12);
INSERT INTO public.extras (id, info, appartment_id) VALUES (81, 'Complimentary refreshments', 12);
INSERT INTO public.extras (id, info, appartment_id) VALUES (82, 'Adequate safety/security', 12);
INSERT INTO public.extras (id, info, appartment_id) VALUES (83, 'Internet', 12);
INSERT INTO public.extras (id, info, appartment_id) VALUES (84, 'Comfortable beds', 12);
INSERT INTO public.extras (id, info, appartment_id) VALUES (85, 'Plush pillows and breathable bed linens', 13);
INSERT INTO public.extras (id, info, appartment_id) VALUES (86, 'Soft, oversized bath towels', 13);
INSERT INTO public.extras (id, info, appartment_id) VALUES (87, 'Full-sized, very comfortable toilets', 13);
INSERT INTO public.extras (id, info, appartment_id) VALUES (88, 'Complimentary refreshments', 13);
INSERT INTO public.extras (id, info, appartment_id) VALUES (89, 'Adequate safety/security', 13);
INSERT INTO public.extras (id, info, appartment_id) VALUES (90, 'Internet', 13);
INSERT INTO public.extras (id, info, appartment_id) VALUES (91, 'Comfortable beds', 13);