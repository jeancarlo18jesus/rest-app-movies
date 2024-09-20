// import  {MovieModel }  from "../models/local-files-system/movie.js"

import { MovieModel } from "./models/mysql/movie.js";

import {createServerApp} from './app.js'


createServerApp({movieModel: MovieModel})