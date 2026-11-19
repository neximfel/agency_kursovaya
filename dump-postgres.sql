--
-- PostgreSQL database dump
--

\restrict w1BfJvaoPebvUwJJwkJvhZLqwQb3lNaat3vnN2BqunqbYMzhQJtCKlRNmyWagjl

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: company_events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.company_events (
    id integer NOT NULL,
    class character varying(50) NOT NULL,
    title character varying(150),
    client character varying(50),
    description character varying,
    adaptive_visible character varying(30),
    rotation character varying(10),
    image character varying(150),
    link character varying(150)
);


ALTER TABLE public.company_events OWNER TO postgres;

--
-- Name: company_events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.company_events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.company_events_id_seq OWNER TO postgres;

--
-- Name: company_events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.company_events_id_seq OWNED BY public.company_events.id;


--
-- Name: contact_messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contact_messages (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    message text NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.contact_messages OWNER TO postgres;

--
-- Name: contact_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contact_messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.contact_messages_id_seq OWNER TO postgres;

--
-- Name: contact_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contact_messages_id_seq OWNED BY public.contact_messages.id;


--
-- Name: faqs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.faqs (
    id integer NOT NULL,
    question text NOT NULL,
    answer text NOT NULL,
    sort_order integer NOT NULL
);


ALTER TABLE public.faqs OWNER TO postgres;

--
-- Name: faqs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.faqs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.faqs_id_seq OWNER TO postgres;

--
-- Name: faqs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.faqs_id_seq OWNED BY public.faqs.id;


--
-- Name: newsletter_subscribers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.newsletter_subscribers (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.newsletter_subscribers OWNER TO postgres;

--
-- Name: newsletter_subscribers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.newsletter_subscribers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.newsletter_subscribers_id_seq OWNER TO postgres;

--
-- Name: newsletter_subscribers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.newsletter_subscribers_id_seq OWNED BY public.newsletter_subscribers.id;


--
-- Name: next_events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.next_events (
    id integer NOT NULL,
    day character varying(20) NOT NULL,
    month character varying(50) NOT NULL,
    image_url character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    city character varying(100) NOT NULL,
    time_range character varying(255) NOT NULL,
    price character varying(50) NOT NULL,
    is_free boolean DEFAULT false,
    sort_order integer NOT NULL
);


ALTER TABLE public.next_events OWNER TO postgres;

--
-- Name: next_events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.next_events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.next_events_id_seq OWNER TO postgres;

--
-- Name: next_events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.next_events_id_seq OWNED BY public.next_events.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    picture character varying(50),
    text character varying,
    rating character varying(50),
    date character varying(100)
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.reviews_id_seq OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: service_articles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_articles (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    hero_image character varying(255) NOT NULL,
    intro_text text NOT NULL,
    subtitle_1 character varying(255) NOT NULL,
    text_1 text NOT NULL,
    gallery_image_1 character varying(255) NOT NULL,
    gallery_image_2 character varying(255) NOT NULL,
    text_2 text NOT NULL,
    subtitle_2 character varying(255) NOT NULL,
    text_3 text NOT NULL,
    video_image character varying(255) NOT NULL,
    bottom_text text NOT NULL
);


ALTER TABLE public.service_articles OWNER TO postgres;

--
-- Name: service_articles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_articles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_articles_id_seq OWNER TO postgres;

--
-- Name: service_articles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_articles_id_seq OWNED BY public.service_articles.id;


--
-- Name: services_portfolio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.services_portfolio (
    id integer NOT NULL,
    category character varying(100) NOT NULL,
    title character varying(255) NOT NULL,
    image_url character varying(255) NOT NULL,
    link character varying(255) DEFAULT '/'::character varying,
    sort_order integer NOT NULL
);


ALTER TABLE public.services_portfolio OWNER TO postgres;

--
-- Name: services_portfolio_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.services_portfolio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.services_portfolio_id_seq OWNER TO postgres;

--
-- Name: services_portfolio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.services_portfolio_id_seq OWNED BY public.services_portfolio.id;


--
-- Name: slider_images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.slider_images (
    id integer NOT NULL,
    image_url character varying(255) NOT NULL,
    alt_text character varying(150),
    sort_order integer DEFAULT 0
);


ALTER TABLE public.slider_images OWNER TO postgres;

--
-- Name: slider_images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.slider_images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.slider_images_id_seq OWNER TO postgres;

--
-- Name: slider_images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.slider_images_id_seq OWNED BY public.slider_images.id;


--
-- Name: company_events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.company_events ALTER COLUMN id SET DEFAULT nextval('public.company_events_id_seq'::regclass);


--
-- Name: contact_messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_messages ALTER COLUMN id SET DEFAULT nextval('public.contact_messages_id_seq'::regclass);


--
-- Name: faqs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faqs ALTER COLUMN id SET DEFAULT nextval('public.faqs_id_seq'::regclass);


--
-- Name: newsletter_subscribers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.newsletter_subscribers ALTER COLUMN id SET DEFAULT nextval('public.newsletter_subscribers_id_seq'::regclass);


--
-- Name: next_events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.next_events ALTER COLUMN id SET DEFAULT nextval('public.next_events_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: service_articles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_articles ALTER COLUMN id SET DEFAULT nextval('public.service_articles_id_seq'::regclass);


--
-- Name: services_portfolio id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services_portfolio ALTER COLUMN id SET DEFAULT nextval('public.services_portfolio_id_seq'::regclass);


--
-- Name: slider_images id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slider_images ALTER COLUMN id SET DEFAULT nextval('public.slider_images_id_seq'::regclass);


--
-- Data for Name: company_events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.company_events (id, class, title, client, description, adaptive_visible, rotation, image, link) FROM stdin;
1	Corporate Events	Annual Sales Conference	XYZ Corporate	Etiam pharetra convallis felis, et sodales risus tincidunt ut. Proin scelerisque, sem eget cursus sollicitudin, nibh elit convallis erat, id fringilla arcu nisl non dui. In ultricies sollicitudin nisi. Maecenas ac justo et dolor condimentum condimentum	visible		/Page1/Section5/image1.jpg	/
2	Weddings	Elegant Garden Wedding	John and Emily Smith	Etiam pharetra convallis felis, et sodales risus tincidunt ut. Proin scelerisque, sem eget cursus sollicitudin, nibh elit convallis erat, id fringilla arcu nisl non dui. In ultricies sollicitudin nisi. Maecenas ac justo et dolor condimentum condimentum	not_visible	right	/Page1/Section5/image2.jpg	/
3	Social Events	Multi-Day Family Reunion	Smith Family Reunion	Etiam pharetra convallis felis, et sodales risus tincidunt ut. Proin scelerisque, sem eget cursus sollicitudin, nibh elit convallis erat, id fringilla arcu nisl non dui. In ultricies sollicitudin nisi. Maecenas ac justo et dolor condimentum condimentum	not_visible		/Page1/Section5/image3.jpg	/
\.


--
-- Data for Name: contact_messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contact_messages (id, name, email, message, created_at) FROM stdin;
1	фыв	gam@mail.com	hello	2026-11-18 15:32:02.314627
\.


--
-- Data for Name: faqs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.faqs (id, question, answer, sort_order) FROM stdin;
1	What types of events do you specialize in organizing?	We specialize in organizing a wide range of events, including corporate conferences, weddings, social gatherings, brand activations, product launches, and more. Our team has experience in creating memorable experiences for various occasions and can tailor our services to meet your specific needs.	1
2	How involved will I be in the event planning process?	You can be as involved as you wish. We provide transparent planning milestones, regular check-ins, and approval stages so you stay in full control while our team handles every operational detail.	2
3	How much do your event management services cost?	Our pricing depends on the event scale, venue requirements, catering, and production scope. We offer flexible packages starting from our Basic plan as well as fully customized quotes.	3
4	What if my event needs to be postponed or canceled?	We understand plans can change. Our contracts include clear rescheduling and cancellation policies, and our coordinators work closely with all vendors to minimize fees and move your date smoothly.	4
\.


--
-- Data for Name: newsletter_subscribers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.newsletter_subscribers (id, email, created_at) FROM stdin;
1	sos@mail.com	2026-11-17 16:29:07.397073
\.


--
-- Data for Name: next_events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.next_events (id, day, month, image_url, title, city, time_range, price, is_free, sort_order) FROM stdin;
1	18	Nov, 2024	/Page3/Section5/image1.png	Beachside wedding ceremony	Chicago	Nov 18, 2024 8:30 pm - Dec 29, 2026 10:30 pm	Free	t	1
2	29	Nov, 2024	/Page3/Section5/image2.png	Urban art & culture festival	Chicago	Mar 29, 2024 @ 9:00 pm - Jan 1, 2026 @ 10:30 pm	$225	f	2
3	27	Nov, 2024	/Page3/Section5/image3.png	Dance parade party	Chicago	Mar 27, 2024 @ 10:00 pm - Apr 8, 2026 @ 11:30 pm	$399	f	3
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, name, picture, text, rating, date) FROM stdin;
1	Andy Wirth	/Page1/Section6/image1.svg	Working with Thevent was a game-changer for our annual conference. Their attention to detail, professionalism, and creativity exceeded our expectations. From the seamless logistics to the engaging programming, every aspect of the event was flawlessly executed. Our attendees were impressed, and our team was thrilled with the results. We look forward to partnering with Thevent for future events and highly recommend their services to anyone looking for top-tier event management.	/Page1/Section6/stars5.svg	01:06 PM · Apr12, 2024
2	Elsa Verina	/Page1/Section6/image2.svg	Working with Thevent was a game-changer for our annual conference. Their attention to detail, professionalism, and creativity exceeded our expectations.	/Page1/Section6/stars5.svg	01:06 PM · May11, 2024
3	Kumto Warming	/Page1/Section6/image3.svg	Working with Thevent was a game-changer for our annual conference. Their attention to detail, professionalism, and creativity exceeded our expectations.	/Page1/Section6/stars5.svg	01:06 PM · Jun13, 2024
4	Diyas Kardinal	/Page1/Section6/image4.svg	Working with Thevent was a game-changer for our annual conference. Their attention to detail, professionalism, and creativity exceeded our expectations. From the seamless logistics to the engaging programming, every aspect of the event was flawlessly executed. Our attendees were impressed, and our team was thrilled with the results. We look forward to partnering with Thevent for future events and cannot thank the coordinators enough for making everything run without a single hitch.	/Page1/Section6/stars5.svg	01:06 PM · July08, 2024
5	Marcus Vance	/Page1/Section6/image2.svg	Hiring this agency for our product launch was the best decision we made this year. The stage design, lighting, and sound engineering created an unforgettable atmosphere for over three hundred guests. Every deadline was met ahead of schedule, and their on-site crew handled last-minute schedule shifts with total calm and precision.	/Page1/Section6/stars4.svg	04:22 PM · Aug19, 2024
6	Elena Rostova	/Page1/Section6/image4.svg	Incredible organization for our summer corporate retreat. Everything from catering to live entertainment felt tailored specifically to our company culture.	/Page1/Section6/stars5.svg	11:15 AM · Sep02, 2024
7	Liam O'Connor	/Page1/Section6/image1.svg	Solid execution overall, though vendor setup ran slightly behind schedule on the first morning. Once the doors opened, however, the guest experience was smooth and well-coordinated.	/Page1/Section6/stars3.svg	06:40 PM · Sep27, 2024
8	Sophia Chen	/Page1/Section6/image3.svg	They turned a bare industrial warehouse into a breathtaking gala venue in less than twenty-four hours. Our sponsors were blown away by the production value, and ticket sales for next year have already doubled based on the buzz generated from this night alone.	/Page1/Section6/stars5.svg	09:12 AM · Oct14, 2024
9	David Kalu	/Page1/Section6/image1.svg	Great communication throughout the entire planning phase. They stayed strictly within our budget while still delivering high-end audiovisual production.	/Page1/Section6/stars4.svg	02:55 PM · Nov05, 2024
10	Hanna Lindqvist	/Page1/Section6/image2.svg	A truly stress-free experience from the initial mood board to the final breakdown. Their team anticipated problems before we even knew they existed, allowing our executives to focus entirely on networking with key partners.	/Page1/Section6/stars5.svg	07:30 PM · Dec18, 2024
11	Tariq Al-Mansoor	/Page1/Section6/image4.svg	The venue selection was spot-on, though some dietary requests at the banquet took extra time to sort out. Still, the main keynote presentation went off without a single technical glitch.	/Page1/Section6/stars2.svg	10:05 AM · Jan21, 2025
12	Chloe Bennett	/Page1/Section6/image3.svg	We trusted them with our charity auction and raised forty percent more than our initial target. The pacing of the evening, the host selection, and the visual storytelling kept the entire room engaged until midnight.	/Page1/Section6/stars5.svg	08:48 PM · Feb14, 2025
13	Victor Krum	/Page1/Section6/image2.svg	Creative concepts and reliable execution. Our team loved the interactive installations they designed for the exhibition booth.	/Page1/Section6/stars4.svg	03:17 PM · Mar09, 2025
14	Nadia Volkov	/Page1/Section6/image1.svg	Miscommunication regarding the guest check-in tablets caused a twenty-minute queue at the entrance, which was frustrating for VIP speakers. Aside from that bottleneck, the stage production itself looked fantastic.	/Page1/Section6/stars1.svg	05:03 PM · Apr23, 2025
15	Julian Mercer	/Page1/Section6/image4.svg	Unmatched energy and flawless timing. They coordinated three separate panel stages simultaneously without a single delay, earning praise from both our speakers and international press attendees.	/Page1/Section6/stars5.svg	12:34 PM · May30, 2025
16	Amara Okafor	/Page1/Section6/image3.svg	From the custom floral arrangements to the seamless AV transitions, every detail felt intentional and elevated. Already booked them for our winter summit.	/Page1/Section6/stars4.svg	04:50 PM · Jun16, 2025
\.


--
-- Data for Name: service_articles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_articles (id, title, hero_image, intro_text, subtitle_1, text_1, gallery_image_1, gallery_image_2, text_2, subtitle_2, text_3, video_image, bottom_text) FROM stdin;
1	Event Planning	/Page4/Section1/image1.png	Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do.	Sed ut perspiciatis unde omnis iste natus et	Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do. Nunc sodales vehicula risus.\n\nSuspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do.	/Page4/Section1/image2.png	/Page4/Section1/image3.png	Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do. Nunc sodales vehicula risus.\n\nSuspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do.	Aliquam quis lobortis quam	Curabitur pellentesque odio magna, id malesuada arcu sodales ut. Sed sed quam ut ex bibendum commodo id id magna. Aliquam sed ligula sed ante blandit volutpat. Ut bibendum, nisi et mattis vulputate, odio arcu aliquet metus, nec dapibus risus risus quis lectus.\n\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.	/Page4/Section1/image4.png	At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
\.


--
-- Data for Name: services_portfolio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.services_portfolio (id, category, title, image_url, link, sort_order) FROM stdin;
1	PORTFOLIO	Beef Tartare Royale	/Page3/Section2/image1.png	/	1
2	PORTFOLIO	Pesto Chicken Salad	/Page3/Section2/image2.png	/	2
3	PORTFOLIO	Passionfruit Mousse Cake	/Page3/Section2/image3.png	/	3
4	PORTFOLIO	Spicy Shrimp Curry	/Page3/Section2/image4.png	/	4
\.


--
-- Data for Name: slider_images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.slider_images (id, image_url, alt_text, sort_order) FROM stdin;
158	/Page1/Section1/image1.png	Описание 1	1
159	/Page1/Section1/image2.png	Описание 2	2
160	/Page1/Section1/image3.png	Описание 3	3
161	/Page1/Section1/image4.png	Описание 4	4
162	/Page1/Section1/image5.png	Описание 5	5
163	/Page1/Section1/image6.png	Описание 5	5
164	/Page1/Section1/image1.png	Описание 1	1
165	/Page1/Section1/image2.png	Описание 2	2
166	/Page1/Section1/image3.png	Описание 3	3
167	/Page1/Section1/image4.png	Описание 4	4
168	/Page1/Section1/image5.png	Описание 5	5
169	/Page1/Section1/image6.png	Описание 5	5
170	/Page1/Section1/image1.png	Описание 1	1
171	/Page1/Section1/image2.png	Описание 2	2
172	/Page1/Section1/image3.png	Описание 3	3
173	/Page1/Section1/image4.png	Описание 4	4
174	/Page1/Section1/image5.png	Описание 5	5
175	/Page1/Section1/image6.png	Описание 5	5
176	/Page1/Section1/image1.png	Описание 1	1
177	/Page1/Section1/image2.png	Описание 2	2
178	/Page1/Section1/image3.png	Описание 3	3
179	/Page1/Section1/image4.png	Описание 4	4
180	/Page1/Section1/image5.png	Описание 5	5
181	/Page1/Section1/image6.png	Описание 5	5
182	/Page1/Section1/image1.png	Описание 1	1
183	/Page1/Section1/image2.png	Описание 2	2
184	/Page1/Section1/image3.png	Описание 3	3
185	/Page1/Section1/image4.png	Описание 4	4
186	/Page1/Section1/image5.png	Описание 5	5
187	/Page1/Section1/image6.png	Описание 5	5
188	/Page1/Section1/image1.png	Описание 1	1
189	/Page1/Section1/image2.png	Описание 2	2
190	/Page1/Section1/image3.png	Описание 3	3
191	/Page1/Section1/image4.png	Описание 4	4
192	/Page1/Section1/image5.png	Описание 5	5
193	/Page1/Section1/image6.png	Описание 5	5
194	/Page1/Section1/image1.png	Описание 1	1
195	/Page1/Section1/image2.png	Описание 2	2
196	/Page1/Section1/image3.png	Описание 3	3
197	/Page1/Section1/image4.png	Описание 4	4
198	/Page1/Section1/image5.png	Описание 5	5
199	/Page1/Section1/image6.png	Описание 5	5
200	/Page1/Section1/image1.png	Описание 1	1
201	/Page1/Section1/image2.png	Описание 2	2
202	/Page1/Section1/image3.png	Описание 3	3
203	/Page1/Section1/image4.png	Описание 4	4
204	/Page1/Section1/image5.png	Описание 5	5
205	/Page1/Section1/image6.png	Описание 5	5
206	/Page1/Section1/image1.png	Описание 1	1
207	/Page1/Section1/image2.png	Описание 2	2
208	/Page1/Section1/image3.png	Описание 3	3
209	/Page1/Section1/image4.png	Описание 4	4
210	/Page1/Section1/image5.png	Описание 5	5
211	/Page1/Section1/image6.png	Описание 5	5
212	/Page1/Section1/image1.png	Описание 1	1
213	/Page1/Section1/image2.png	Описание 2	2
214	/Page1/Section1/image3.png	Описание 3	3
215	/Page1/Section1/image4.png	Описание 4	4
216	/Page1/Section1/image5.png	Описание 5	5
217	/Page1/Section1/image6.png	Описание 5	5
218	/Page1/Section1/image1.png	Описание 1	1
219	/Page1/Section1/image2.png	Описание 2	2
220	/Page1/Section1/image3.png	Описание 3	3
221	/Page1/Section1/image4.png	Описание 4	4
222	/Page1/Section1/image5.png	Описание 5	5
223	/Page1/Section1/image6.png	Описание 5	5
224	/Page1/Section1/image1.png	Описание 1	1
225	/Page1/Section1/image2.png	Описание 2	2
226	/Page1/Section1/image3.png	Описание 3	3
227	/Page1/Section1/image4.png	Описание 4	4
228	/Page1/Section1/image5.png	Описание 5	5
229	/Page1/Section1/image6.png	Описание 5	5
\.


--
-- Name: company_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.company_events_id_seq', 3, true);


--
-- Name: contact_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contact_messages_id_seq', 1, true);


--
-- Name: faqs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.faqs_id_seq', 4, true);


--
-- Name: newsletter_subscribers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.newsletter_subscribers_id_seq', 1, true);


--
-- Name: next_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.next_events_id_seq', 3, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reviews_id_seq', 16, true);


--
-- Name: service_articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_articles_id_seq', 1, true);


--
-- Name: services_portfolio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.services_portfolio_id_seq', 4, true);


--
-- Name: slider_images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.slider_images_id_seq', 229, true);


--
-- Name: company_events company_events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.company_events
    ADD CONSTRAINT company_events_pkey PRIMARY KEY (id);


--
-- Name: contact_messages contact_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_messages
    ADD CONSTRAINT contact_messages_pkey PRIMARY KEY (id);


--
-- Name: faqs faqs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faqs
    ADD CONSTRAINT faqs_pkey PRIMARY KEY (id);


--
-- Name: newsletter_subscribers newsletter_subscribers_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.newsletter_subscribers
    ADD CONSTRAINT newsletter_subscribers_email_key UNIQUE (email);


--
-- Name: newsletter_subscribers newsletter_subscribers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.newsletter_subscribers
    ADD CONSTRAINT newsletter_subscribers_pkey PRIMARY KEY (id);


--
-- Name: next_events next_events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.next_events
    ADD CONSTRAINT next_events_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: service_articles service_articles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_articles
    ADD CONSTRAINT service_articles_pkey PRIMARY KEY (id);


--
-- Name: services_portfolio services_portfolio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services_portfolio
    ADD CONSTRAINT services_portfolio_pkey PRIMARY KEY (id);


--
-- Name: slider_images slider_images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slider_images
    ADD CONSTRAINT slider_images_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict w1BfJvaoPebvUwJJwkJvhZLqwQb3lNaat3vnN2BqunqbYMzhQJtCKlRNmyWagjl

