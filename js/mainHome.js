// IMPORT
/* Loading page*/
/* Header */
import { Header } from './components/header/Header.js';
import { headerData } from './data/headerData.js';
import { stickyHeader } from './components/header/stickyHeader.js';
import { search } from './components/header/search.js';
import { sDropdownMenu } from './components/header/sDropdownMenu.js';
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
import { Blog } from './components/blog/Blog.js';
/* Contacts */
/* Footer */

// FUNKCIJU PANAUDOJIMAS
/* Loading page*/
/* Header */
new Header('#main_header', headerData);
sDropdownMenu();
window.onscroll = function () { stickyHeader() };
search('#search_btn', '#search_block', '.close-btn');
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