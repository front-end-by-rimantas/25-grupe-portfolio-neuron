// IMPORT
/* Loading page*/
/* Header */
import { stickyHeader } from './components/header/header.js';
/* Navigation */
/* Hero */
/* About */
/* About video */
/* Achievements */
/* Services */
import { servicesData } from './data/servicesData.js';
import { services } from './components/services/services.js';
/* Latest project */
/* Partner section */
/* How we work */
/* Blog */
import { blogData } from './data/blogData.js';
import { Blog } from './components/blog/Blog.js'
/* Contacts */
/* Footer */

// FUNKCIJU PANAUDOJIMAS
/* Loading page*/
/* Header */
stickyHeader();
/* Navigation */
/* Hero */
/* About */
/* About video */
/* Achievements */
/* Services */
services('#services_block', servicesData);
/* Latest project */
/* Partner section */
/* How we work */
/* Blog */
const blog = new Blog('#blog_block', blogData);

/* Contacts */
/* Footer */