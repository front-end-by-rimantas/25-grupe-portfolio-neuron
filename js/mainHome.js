// IMPORT
/* Loading page*/
/* Header */
import { stickyHeader } from './components/header/header.js';
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
/* Contacts */
/* Footer */

// FUNKCIJU PANAUDOJIMAS
/* Loading page*/
/* Header */
sDropdownMenu();
stickyHeader();
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
/* Contacts */
/* Footer */