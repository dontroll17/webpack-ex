import Post from '@models/Post';
import './styles/styles.css';
import json from './assets/json.json';
import icon from './assets/icon.png';
import xml from './assets/data.xml';

const post = new Post('webpack post title', icon);

console.log('Post to string: ', post.toString());
console.log('JSON: ', json);
console.log('XML: ', xml);