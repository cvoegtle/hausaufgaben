package org.voegtle.homework

import com.googlecode.objectify.ObjectifyService
import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer
import org.voegtle.homework.data.Hausaufgabe

class ServletInitializer : SpringBootServletInitializer() {
  override fun configure(builder: SpringApplicationBuilder): SpringApplicationBuilder {
    ObjectifyService.register(Hausaufgabe::class.java)
    return builder.sources(Application::class.java)
  }
}