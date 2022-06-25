import { Router } from "express";

const router = Router();

//Routers
router.get('/', (reg,res) => res.render('index', {title: 'First Web with Nodejs'}));
router.get('/about', (reg,res) => res.render('about', {title: 'About ME'}));
router.get('/contact', (reg,res) => res.render('contact', {title: 'Contact Page'}));

export default router;