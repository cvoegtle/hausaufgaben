package org.voegtle.homework

import com.googlecode.objectify.ObjectifyService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.voegtle.homework.data.Hausaufgabe
import org.voegtle.homework.processing.setCurrentDate
import java.util.Date
import java.util.logging.Level
import java.util.logging.Logger

@RestController class HomeworkService {
  @GetMapping("/list") @CrossOrigin(origins = ["https://www.tom-schimmeck.de", "https://www.tom-schimmeck.de", "http://localhost:4200"])
  fun list(): List<Hausaufgabe> {
    return ObjectifyService.ofy().load().type(Hausaufgabe::class.java).filter("datum >=", sevenDaysBefore()).order("-datum").list()
  }

  @PostMapping("/create") fun createHausaufgabe(@RequestBody() aufgabe: Hausaufgabe): Boolean {
    try {
      setCurrentDate(aufgabe)
      validate(aufgabe)
      ObjectifyService.ofy().save().entity(aufgabe).now()
      return true
    } catch (ex: Exception) {
      logException(ex)
      return false
    }
  }

  @GetMapping("/delete") fun delete(@RequestParam id: Long) {
    ObjectifyService.ofy().delete().type(Hausaufgabe::class.java).id(id).now()
  }

  private fun sevenDaysBefore() = Date().time - 7 * 24 * 60 * 60 * 1000

  private fun logException(ex: Exception) {
    val log = Logger.getLogger("HomeworkService")
    log.log(Level.SEVERE, ex.message, ex)
  }

}