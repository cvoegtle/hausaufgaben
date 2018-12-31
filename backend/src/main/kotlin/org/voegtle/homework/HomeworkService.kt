package org.voegtle.homework

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.voegtle.homework.data.Hausaufgabe
import org.voegtle.homework.persistence.deleteAufgabe
import org.voegtle.homework.persistence.loadHomeworkSince
import org.voegtle.homework.persistence.saveAufgabe
import org.voegtle.homework.processing.setCurrentDate
import org.voegtle.homework.processing.sevenDaysBefore
import org.voegtle.homework.util.checkAuthorisation
import org.voegtle.homework.util.extractUserName
import java.util.logging.Level
import java.util.logging.Logger
import javax.servlet.http.HttpServletRequest

@RestController class HomeworkService {
  @GetMapping("/list") fun list(): List<Hausaufgabe> {
    return loadHomeworkSince(sevenDaysBefore())
  }

  @PostMapping("/create") fun createHausaufgabe(@RequestBody() aufgabe: Hausaufgabe, req: HttpServletRequest): Boolean {
    val userName = extractUserName(req, true)
    checkAuthorisation(userName)
    try {
      setCurrentDate(aufgabe)
      validate(aufgabe)
      saveAufgabe(aufgabe)
      return true
    } catch (ex: Exception) {
      logException(ex)
      return false
    }
  }

  @GetMapping("/delete") fun delete(@RequestParam id: Long, req: HttpServletRequest) {
    val userName = extractUserName(req, true)
    checkAuthorisation(userName)
    deleteAufgabe(id)
  }

  private fun logException(ex: Exception) {
    val log = Logger.getLogger("HomeworkService")
    log.log(Level.SEVERE, ex.message, ex)
  }

}