```java
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

@PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project,BindingResult result){
        if(result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();

            for(FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(project1, HttpStatus.CREATED);
    }
```
[Other sample](https://spring.io/guides/gs/validating-form-input/)
