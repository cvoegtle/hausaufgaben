package org.voegtle.homework.persistence

import com.googlecode.objectify.ObjectifyFilter
import javax.servlet.annotation.WebFilter

@WebFilter(urlPatterns = ["/*"])
class HomeworkObjectifyFilter: ObjectifyFilter()